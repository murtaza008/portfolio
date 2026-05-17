import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne, Pacifico } from "next/font/google";
import ScrollObserver from "@/components/utils/ScrollObserver";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  weight: "400",
  variable: "--font-pacifico",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Johnson - Full Stack Engineer",
  description: "Portfolio of Alex Johnson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.min.css" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${pacifico.variable} antialiased bg-[#f8f5f0] text-stone-600 font-sans`} suppressHydrationWarning>
        <ScrollObserver />
        {children}
      </body>
    </html>
  );
}
