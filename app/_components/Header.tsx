"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import ContactUs from "./ContactUs";
import Logo from "./Logo";
import Navbar from "./Navbar";
import LanguageSelect from "./LanguageSelect";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className="flex h-20 w-full flex-col items-center justify-center bg-stone-900/90 text-stone-100 sm:h-26 md:h-38">
      <section className="relative grid w-full grid-cols-3 items-center justify-between gap-x-5 px-3 py-2 md:grid-cols-2 md:py-5">
        <button className="md:hidden" onClick={() => setShowNav((s) => !s)}>
          <GiHamburgerMenu />
        </button>
        <div className="items-center md:justify-self-start">
          <Logo />
          <LanguageSelect />
        </div>
        <div className="items-center justify-end gap-6 md:flex">
          <ContactUs />
        </div>
      </section>
      {showNav && (
        <Navbar className="absolute top-20 right-0 flex w-2/3 flex-col bg-slate-200 px-5 py-2 text-slate-800 sm:top-26 md:hidden" />
      )}
      <Navbar className="mb-1 hidden px-5 py-3 tracking-wide md:flex" />
    </header>
  );
}
