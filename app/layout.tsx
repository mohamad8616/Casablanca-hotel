import type { Metadata } from "next";
import Loading from "./Loading";
import "./globals.css";
import Header from "./_components/Header";
import localFont from "next/font/local";
import Footer from "./_components/Footer";
import { Suspense } from "react";
import { ThemeProvider } from "@/src/context/ThemeContext";
const myFont = localFont({ src: "./Yekan.woff2" });
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
          <Header />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
