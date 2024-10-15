import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <link rel="icon" href="/blog_blogger.png" sizes="any" /> */}
      <head>
        <title>Blogger</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
