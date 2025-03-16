"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import ContactUs from "./ContactUs";
import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className='h-20 sm:h-26 md:h-36 w-full  aspect-video overflow-hidden bg-stone-900/90 text-stone-100 flex flex-col items-center justify-center'>
      <section className='grid grid-cols-3 justify-between items-center md:p-5 py-2 px-3 gap-x-5 relative w-full'>
        <button className='md:hidden' onClick={() => setShowNav((s) => !s)}>
          <GiHamburgerMenu />
        </button>
        <Logo />
        <div>
          <p className='hidden sm:block'>انتخاب زبان</p>
          <button>English</button>
          <button>فارسی</button>
        </div>
        <ContactUs />
      </section>
      {showNav && (
        <Navbar className='md:hidden absolute bg-slate-200 text-slate-800 right-0 top-20 sm:top-26 py-2 px-5 w-2/3 flex flex-col' />
      )}
      <Navbar className='hidden md:flex py-3 px-5 ' />
    </header>
  );
}
