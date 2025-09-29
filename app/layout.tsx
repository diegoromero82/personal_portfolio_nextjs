// app/layout.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "flag-icons/css/flag-icons.min.css";
import "./globals.css";

import Navbar from "./components/Navbar";

export const metadata = {
  title: "Diego Romero - Portfolio",
  description: "Professional portfolio of Diego Romero"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
