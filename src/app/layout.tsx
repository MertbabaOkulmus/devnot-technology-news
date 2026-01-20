import "../styles/index.css";
import { Inter, Manrope } from "next/font/google";
import Script from "next/script";

const isDev = process.env.NODE_ENV === "development";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

// ✅ Sayfa boyanmadan önce temayı ayarla (flash/refresh sorunu biter)
const themeInitScript = `
(function () {
  try {
    var key = "tg_theme_scheme";
    var saved = localStorage.getItem(key);

    // Eğer kayıt yoksa sistem temasını kullan ve kaydet
    if (!saved) {
      saved = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
      localStorage.setItem(key, saved);
    }

    // Normalize
    saved = (saved === "dark") ? "dark" : "light";

    // CSS'in dinlediği attribute
    document.documentElement.setAttribute("tg-theme", saved);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <title>Devnot | Yazılım, teknoloji, yapay zeka, haberler, etkinlikler</title>
        <meta
          name="description"
          content="Yazılım, teknoloji, yapay zeka, programlama, mühendislik, liderlik, girişimcilik, haberler, etkinlikler"
        />
        <link rel="icon" href="/favicon.png" sizes="any" />

        {/* ✅ Tema init: refresh'te dark mode düşmesin */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>

      <body suppressHydrationWarning={true} className={`${inter.variable} ${manrope.variable}`}>
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-211MX2697M"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-211MX2697M');
          `}
        </Script>
      </body>
    </html>
  );
}