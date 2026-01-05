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
    "PREPVANTAGE by Ram Anjaneya Student Services | NTA-like NEET & JEE Online Mock Tests",
  description:
    "PREPVANTAGE, by Ram Anjaneya Student Services, offers NTA-like online mock tests for NEET and JEE with detailed solutions and AI-based performance analysis.",
  keywords: [
    "PREPVANTAGE",
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
