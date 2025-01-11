import "./globals.css";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CN Travel",
  description: "Created with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
