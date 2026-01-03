type LogMeta = Record<string, any>;

type Logger = {
  info: (message: string, meta?: LogMeta) => void;
  warn: (message: string, meta?: LogMeta) => void;
  error: (message: string, meta?: LogMeta) => void;
  debug: (message: string, meta?: LogMeta) => void;
};

const isServer = typeof window === "undefined";

// Client'ta winston yok → console
const clientLogger: Logger = {
  info: (m, meta) => console.log(m, meta ?? ""),
  warn: (m, meta) => console.warn(m, meta ?? ""),
  error: (m, meta) => console.error(m, meta ?? ""),
  debug: (m, meta) => console.debug(m, meta ?? ""),
};

let cachedServerLogger: Logger | null = null;

function safeStringify(obj: any) {
  try {
    return JSON.stringify(obj, (_k, v) => (typeof v === "bigint" ? v.toString() : v));
  } catch {
    return "[unserializable]";
  }
}

function getServerLogger(): Logger {
  if (cachedServerLogger) return cachedServerLogger;

  const req = eval("require") as NodeRequire;

  const winston = req("winston") as typeof import("winston");
  const path = req("path") as typeof import("path");
  const fs = req("fs") as typeof import("fs");

  const logDir = path.join(process.cwd(), "logs");
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }

  const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || "info",
    format: winston.format.combine(
      winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      winston.format.printf(({ level, message, timestamp, ...meta }) => {
        const metaStr =
          meta && Object.keys(meta).length ? ` | ${safeStringify(meta)}` : "";
        return `[${timestamp}] ${level.toUpperCase()}: ${message}${metaStr}`;
      })
    ),
    transports: [
      new winston.transports.File({ filename: path.join(logDir, "app.log") }),
      new winston.transports.File({
        filename: path.join(logDir, "error.log"),
        level: "error",
      }),
    ],
  });

  // Dev'de server console'a da bas
  if (process.env.NODE_ENV !== "production") {
    logger.add(new winston.transports.Console({ format: winston.format.simple() }));
  }

  cachedServerLogger = {
    info: (m, meta) => logger.info(m, meta),
    warn: (m, meta) => logger.warn(m, meta),
    error: (m, meta) => logger.error(m, meta),
    debug: (m, meta) => logger.debug(m, meta),
  };

  return cachedServerLogger;
}

const logger: Logger = isServer ? getServerLogger() : clientLogger;

export default logger;
