"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import ContactUs from "./ContactUs";
import Logo from "./Logo";
import Navbar from "./Navbar";
import LanguageSelect from "./LanguageSelect";
import Link from "next/link";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className="flex h-auto w-full flex-col items-center justify-center bg-stone-900/90 text-stone-100 sm:h-26 md:h-44 lg:h-auto lg:pt-4">
      <section className="relative grid w-full grid-cols-3 items-center justify-between gap-x-5 border-stone-100 px-3 py-2 md:grid-cols-2 md:py-5 lg:border-b">
        <button
          className="cursor-pointer text-3xl font-light md:hidden"
          onClick={() => setShowNav((s) => !s)}
        >
          <GiHamburgerMenu />
        </button>
        <div className="items-center md:justify-self-start">
          <Logo />
        </div>
        <div className="flex items-start justify-end gap-6 text-end">
          <ContactUs />

          <LanguageSelect />
        </div>
      </section>
      <section className="flex w-full items-center justify-around gap-3 md:py-3 lg:mx-4 lg:h-14 lg:py-0">
        {showNav && (
          <div className="z-50 mt-10 w-full bg-slate-50 px-5 duration-200 sm:mt-80 md:hidden">
            <div className="flex items-center justify-between text-stone-800">
              <div>
                <Link href="tp" className="text-sm md:text-base">
                  ورود
                </Link>
                <span className="mx-2 text-lg">/</span>
                <Link href="tp" className="text-sm md:text-base">
                  ثبت نام
                </Link>
              </div>
              <button
                className="cursor-pointer text-4xl text-red-600"
                onClick={() => setShowNav((s) => !s)}
              >
                &times;
              </button>
            </div>
            <Navbar className="flex w-full flex-col py-2 text-slate-800 md:hidden" />
          </div>
        )}
        {/* <Navbar className="mb-1 hidden self-center rounded-full bg-stone-200 px-30 py-3 tracking-wide text-stone-800 md:flex lg:my-3" /> */}
        <Navbar className="mb-1 hidden self-center rounded-full bg-stone-200 px-30 py-3 tracking-wide text-stone-800 md:flex lg:my-3" />
        <div className="hidden place-items-end md:flex">
          <Link href="tp" className="text-sm md:text-base">
            ورود
          </Link>
          <span className="mx-2 text-lg">/</span>
          <Link href="tp" className="text-sm md:text-base">
            ثبت نام
          </Link>
        </div>
      </section>
    </header>
  );
}
