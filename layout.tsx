import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WordMaicro - Word Game",
  description: "A fun word puzzle game where you build words from letters",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  );
}
