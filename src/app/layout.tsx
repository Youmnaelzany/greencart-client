import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import Navbar from "@/components/Navbar";

import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GreenCart App",
  description: "GreenCart app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} mx-auto h-screen max-w-7xl antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
