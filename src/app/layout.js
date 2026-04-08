import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/syne@5.0.8/index.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/dm-sans@5.0.14/index.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
