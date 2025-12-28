import "../styles/index.css";
import { Inter, Manrope } from "next/font/google";

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
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${inter.variable} ${manrope.variable}`}
      >
        {children}
      </body>
    </html>
  );
}