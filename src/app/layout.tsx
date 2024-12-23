import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const giest = GeistSans;

const myFont = localFont({
  src: "./jetbrains.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Satvik Chandra",
  description: "Satvik's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${giest.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          <Analytics />
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
