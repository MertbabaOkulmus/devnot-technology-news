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
    return JSON.stringify(obj, (_k, v) =>
      typeof v === "bigint" ? v.toString() : v
    );
  } catch {
    return "[unserializable]";
  }
}

function makeConsoleLogger(prefix = ""): Logger {
  const p = prefix ? `[${prefix}] ` : "";
  return {
    info: (m, meta) => console.log(p + m, meta ?? ""),
    warn: (m, meta) => console.warn(p + m, meta ?? ""),
    error: (m, meta) => console.error(p + m, meta ?? ""),
    debug: (m, meta) => console.debug(p + m, meta ?? ""),
  };
}

function getServerLogger(): Logger {
  if (cachedServerLogger) return cachedServerLogger;

  // Serverless / Vercel gibi ortamlarda dosyaya yazma riskli.
  const isVercel = !!process.env.VERCEL;
  const isServerless = isVercel || process.env.AWS_LAMBDA_FUNCTION_NAME;

  // Winston opsiyonel: yoksa console'a düş
  let winston: typeof import("winston") | null = null;
  let path: typeof import("path") | null = null;
  let fs: typeof import("fs") | null = null;

  try {
    const req = eval("require") as NodeRequire;
    winston = req("winston");
    path = req("path");
    fs = req("fs");
  } catch {
    cachedServerLogger = makeConsoleLogger("NO_WINSTON");
    return cachedServerLogger;
  }

  // Winston var ama güvenli değilse (serverless) sadece console
  if (!winston) {
    cachedServerLogger = makeConsoleLogger("NO_WINSTON");
    return cachedServerLogger;
  }

  const level = process.env.LOG_LEVEL || "info";

  const format = winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.printf(({ level, message, timestamp, ...meta }) => {
      const metaStr =
        meta && Object.keys(meta).length ? ` | ${safeStringify(meta)}` : "";
      return `[${timestamp}] ${String(level).toUpperCase()}: ${message}${metaStr}`;
    })
  );

  const transports: any[] = [];

  // Serverless'ta sadece console
  if (isServerless) {
    transports.push(
      new winston.transports.Console({
        format: process.env.NODE_ENV === "production" ? format : winston.format.simple(),
      })
    );
  } else {
    // Klasik sunucu (Windows/VPS): dosyaya yazabilir
    try {
      const logDir = path!.join(process.cwd(), "logs");
      if (!fs!.existsSync(logDir)) {
        fs!.mkdirSync(logDir, { recursive: true });
      }

      transports.push(
        new winston.transports.File({ filename: path!.join(logDir, "app.log") }),
        new winston.transports.File({
          filename: path!.join(logDir, "error.log"),
          level: "error",
        })
      );
    } catch {
      // Dosya sisteminde sorun olursa console'a düş
      transports.push(new winston.transports.Console({ format }));
    }

    // Dev'de console'a da bas
    if (process.env.NODE_ENV !== "production") {
      transports.push(
        new winston.transports.Console({ format: winston.format.simple() })
      );
    }
  }

  const internal = winston.createLogger({
    level,
    format,
    transports,
  });

  cachedServerLogger = {
    info: (m, meta) => internal.info(m, meta),
    warn: (m, meta) => internal.warn(m, meta),
    error: (m, meta) => internal.error(m, meta),
    debug: (m, meta) => internal.debug(m, meta),
  };

  return cachedServerLogger;
}

const logger: Logger = isServer ? getServerLogger() : clientLogger;
export default logger;
