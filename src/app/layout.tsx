import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atha Khairi — Premium Developer Portfolio",
  description:
    "Professional developer portfolio of Atha Khairi (khairi.tech), featuring immersive 3D interactions and modern web performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#04050d] text-slate-100">{children}</body>
    </html>
  );
}
