import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Velora Tech Labs",
  description: "Official website for Velora Tech Labs LTD — Rwanda-based technology company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
