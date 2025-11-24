import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist"
});

export const metadata: Metadata = {
  title: "Agentic Welcome",
  description: "A minimal interactive landing page greeting visitors."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${urbanist.variable}`}>{children}</body>
    </html>
  );
}
