import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atha Khairi — Premium Developer Portfolio",
  description:
    "Professional developer portfolio of Atha Khairi (khairi.tech), featuring a storytelling-led hero, polished case studies, and modern web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#F9F7F7] text-[#112D4E]">{children}</body>
    </html>
  );
}
