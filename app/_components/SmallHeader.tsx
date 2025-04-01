"use client";
import Link from "next/link";
import TextLogo from "./TextLogo";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import picHeader from "@/public/pic1.jpg";
import { useEffect, useState } from "react";

interface SmallHeaderProps {
  session: {
    user?: {
      image?: string;
      name?: string;
      email: string;
      guestId: number;
    };
  } | null;
}

export default function SmallHeader({ session }: SmallHeaderProps) {
  const [showNav, setShowNav] = useState(false);

  // Disable scrolling when the navbar is open
  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }
  }, [showNav]);

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
      <div className="absolute top-0 right-0 flex h-full w-full flex-wrap items-center justify-between gap-1 bg-slate-900/60 px-3 text-center text-slate-100 hover:text-white sm:px-6">
        <button className="cursor-pointer" onClick={() => setShowNav(true)}>
          <RxHamburgerMenu className="text-2xl text-slate-100 sm:text-4xl" />
        </button>
        <TextLogo />
      </div>
      <div
        className={`fixed top-0 right-0 z-20 h-dvh w-full bg-slate-900/70 transition-opacity duration-300 ${
          showNav ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setShowNav(false)}
      >
        <nav
          className={`z-50 h-full w-10/12 transform bg-slate-800 text-slate-200 transition-transform duration-300 ${
            showNav ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
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
              <Link onClick={() => setShowNav(false)} href="/">
                رستوران ها
              </Link>
            </li>
            <li className="my-8 flex cursor-pointer items-center py-2 hover:text-amber-600">
              <Link onClick={() => setShowNav(false)} href="/about">
                درباره مجموعه
              </Link>
            </li>
            <li className="my-8 flex cursor-pointer items-center py-2 hover:text-amber-600">
              <Link onClick={() => setShowNav(false)} href="/cabins">
                اتاق ها
              </Link>
            </li>
            <li className="my-8 flex cursor-pointer items-center py-2 hover:text-amber-600">
              <Link onClick={() => setShowNav(false)} href="/cabins">
                تماس با ما
              </Link>
            </li>
          </ul>
          {session?.user ? (
            <Link
              href="/account"
              className="flex w-8/12 cursor-pointer items-center justify-center gap-2 justify-self-center rounded-md border-2 border-slate-200/60 py-1.5 duration-200 hover:border-slate-800 hover:bg-slate-200 hover:text-slate-800"
              onClick={() => setShowNav(false)}
            >
              <Image
                src={session.user.image || ""}
                alt="user image"
                referrerPolicy="no-referrer"
                className="h-11/12 rounded-full sm:h-8 sm:w-8"
                width={26} // Adjust width as needed
                height={26} // Adjust height as needed
              />
              <span className="text-sm sm:text-sm">{session.user.name}</span>
            </Link>
          ) : (
            <div className="flex w-full justify-center text-center">
              <Link
                href="/account"
                className="w-3/4 cursor-pointer place-self-center rounded-md bg-slate-300 py-1 text-sm font-semibold text-slate-800 duration-200 hover:bg-slate-400 sm:text-base"
                onClick={() => setShowNav(false)}
              >
                ورود به حساب کاربری
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
