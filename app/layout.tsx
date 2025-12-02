import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/app/components/Sidebar";
import Footer from "@/app/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-white flex flex-col min-h-screen`}>
        <Sidebar />
        <main className="ml-[calc(12rem+8rem)] flex-1 pt-32 px-[8vw] pb-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
