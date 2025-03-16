import type { Metadata } from "next";

import "./globals.css";
import Header from "./_components/Header";
import localFont from "next/font/local";
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
    <html lang='en' className=''>
      <body
        dir='rtl'
        className={`${myFont.className} antialiased dark:bg-stone-800 dark:text-stone-50 `}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
