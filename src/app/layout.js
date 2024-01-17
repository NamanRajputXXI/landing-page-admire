import "./globals.css";

export const metadata = {
  title: "Landing Page",
  description: "Landing Page Admire Holidays",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
