import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className="antialiased m-0 p-0 overflow-x-hidden">{children}</body>
    </html>
  );
}
