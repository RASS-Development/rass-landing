import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Ram Anjaneya Student Services | NTA-like Online Mock Tests for NEET & JEE",
  description:
    "AI-powered online mock test platform offering NTA-like exams for NEET & JEE with detailed solutions, analytics, and a launch targeted for April 2026.",
  keywords: [
    "NEET mock test",
    "JEE mock test",
    "online exam practice",
    "NTA pattern tests",
    "AI exam analytics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
