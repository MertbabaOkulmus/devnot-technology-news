import "../styles/index.css"

const isDev = process.env.NODE_ENV === 'development'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <title>Devnot | Yazılım, teknoloji, yapay zeka, haberler, etkinlikler</title>
        <meta name="description" content="Yazılım, teknoloji, yapay zeka, programlama, mühendislik, liderlik, girişimcilik, haberler, etkinlikler" />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&family=Manrope:wght@300;400;500;600;700;800&display=swap" />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
