/** @format */

import '../styles/globals.css'
import React from 'react'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;700&display=swap" />
        <title>CN Travel</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
