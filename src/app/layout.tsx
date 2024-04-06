import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

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
            <body className={`${inter.className} bg-[#0e0e0e]`}>
                <ThemeProvider attribute="class"
                    defaultTheme="dark">
                    {children}
                    <Toaster position="top-center" />
                </ThemeProvider>
            </body>
        </html>
    );
}
