import type { Metadata } from "next";
import Loading from "./Loading";
import "./globals.css";
import Header from "./_components/header/Header";
import localFont from "next/font/local";
import Footer from "./_components/Footer";
import { Suspense } from "react";
import { ThemeProvider } from "@/src/context/ThemeContext";
const myFont = localFont({ src: "./font/Yekan.woff2" });
export const metadata: Metadata = {
  title: "هتل کازابلانکا",
  description: "سایت رسمی هتل کازابلانکا",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        dir="rtl"
        className={`${myFont.className} antialiased dark:bg-stone-800 dark:text-stone-50`}
      >
        <ThemeProvider>
          <div className="space-y-10">
            <Header />
            <Suspense fallback={<Loading />}>{children}</Suspense>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
