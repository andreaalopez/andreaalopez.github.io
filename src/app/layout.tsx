import "./globals.css";
import { inter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Andrea López</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased dark:bg-slate-900 dark:text-white`}>{children}</body>
    </html>
  );
}
