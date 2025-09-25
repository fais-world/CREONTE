import type { Metadata } from "next";
import React from "react";
import "./globals.css";

const title = "CREONTE – Відроджена перша опера Дмитра Бортнянського";
const description =
  "Тимчасовий статичний лендінг про віднайдену після 250 років оперу «Креонт». Демоверсія перед міграцією у CMS.";
const heroImage = "http://utox.medved.kiev.ua/creonte/images/creologo.jpg";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "uk_UA",
    url: "https://example.com", // TODO: продакшн URL
  siteName: "CREONTE Opera",
    images: [
      {
        url: heroImage,
        width: 1200,
        height: 630,
  alt: "CREONTE Opera",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [heroImage],
  },
  icons: {
    icon: "/favicon.svg",
  },
  metadataBase: new URL("https://example.com"), // TODO: оновити
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Theme is toggled by adding/removing 'dark' on <html> (see ThemeToggle component)
  return (
    <html lang="uk" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
