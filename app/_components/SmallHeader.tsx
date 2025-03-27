"use client";
import Link from "next/link";
import TextLogo from "./TextLogo";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import picHeader from "@/public/pic1.jpg";
import { useState } from "react";

export default function SmallHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className="relative z-10 aspect-video max-h-56 min-h-26 w-full flex-1 overflow-hidden md:hidden">
      <div className="absolute top-0 left-0 h-full w-full bg-slate-900/10 px-1"></div>
      <Image
        src={picHeader}
        alt="Image for header"
        className="-z-10 object-cover"
        width={1000}
        height={2000}
      />
      <div className="absolute top-0 right-0 flex h-full w-full flex-wrap items-center justify-between gap-1 bg-slate-900/60 text-center text-slate-100 hover:text-white sm:px-6">
        <button className="cursor-pointer" onClick={() => setShowNav(true)}>
          <RxHamburgerMenu className="text-2xl text-slate-100 sm:text-4xl" />
        </button>
        <TextLogo />
        {children}
      </div>
      {showNav && (
        <div className="fixed top-0 right-0 z-20 h-dvh w-full bg-slate-900/70">
          <nav className="h-full w-10/12 bg-slate-800 text-slate-200">
            <div className="flex items-center justify-between border-b-2 border-slate-200/50 px-4 py-5 text-center">
              <TextLogo />
              <button
                className="cursor-pointer text-5xl text-red-500"
                onClick={() => setShowNav(false)}
              >
                &times;
              </button>
            </div>
            <ul className="w-full divide-y-2 divide-slate-200/30 px-10 py-6 text-start text-sm text-slate-200/80 sm:text-base">
              <li className="my-8 flex cursor-pointer items-center py-2 hover:text-amber-600">
                <Link href="/">رستوران ها</Link>
              </li>
              <li className="my-8 flex cursor-pointer items-center py-2 hover:text-amber-600">
                <Link href="/about">درباره مجموعه</Link>
              </li>
              <li className="my-8 flex cursor-pointer items-center py-2 hover:text-amber-600">
                <Link href="/cabins">اتاق ها</Link>
              </li>
              <li className="my-8 flex cursor-pointer items-center py-2 hover:text-amber-600">
                <Link href="/cabins">تماس با ما</Link>
              </li>
            </ul>
            <div className="flex w-full justify-center">
              <button className="w-3/4 cursor-pointer place-self-center rounded-md bg-slate-300 py-1 text-sm font-semibold text-slate-800 duration-200 hover:bg-slate-400 sm:text-base">
                ورود به حساب کاربری
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
