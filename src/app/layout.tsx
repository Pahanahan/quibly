import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

export const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Викторина онлайн",
  description:
    "Многопользовательская онлайн-викторина с вопросами и вариантами ответов. Проверяй знания и соревнуйся с друзьями.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
