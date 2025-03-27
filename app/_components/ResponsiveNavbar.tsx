"use client";
import Link from "next/link";
import Navbar from "./Navbar";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

interface ResponsiveNavbarProps {
  type: string;
}

export default function ResponsiveNavbar({
  type,
  children,
}: ResponsiveNavbarProps & { children: React.ReactNode }) {
  const [showNav, setShowNav] = useState(false);
  if (type === "sm")
    return (
      <>
        <button
          className="cursor-pointer text-3xl font-light md:hidden"
          onClick={() => setShowNav((s) => !s)}
        >
          <GiHamburgerMenu />
        </button>
        {showNav && (
          <div className="z-50 mt-10 w-full bg-slate-50 px-5 duration-200 sm:mt-80 md:hidden">
            <div className="flex items-center justify-between text-stone-800">
              {children}
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
      </>
    );
  if (type === "lg")
    return (
      <section className="flex w-full items-center justify-around gap-3 md:py-3 lg:mx-4 lg:h-14 lg:py-0">
        <Navbar className="mb-1 hidden self-center rounded-full bg-stone-200 px-30 py-3 tracking-wide text-stone-800 md:flex lg:my-3" />
        {children}
      </section>
    );
}
