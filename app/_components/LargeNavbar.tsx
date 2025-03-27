import Image from "next/image";
import TextLogo from "./TextLogo";
import ContactUs from "./ContactUs";
import LanguageSelect from "./LanguageSelect";
import picHeader from "@/public/pic1.jpg";
import Link from "next/link";
import { ReactNode } from "react";

export default function LargeNavbar({ children }: { children: ReactNode }) {
  return (
    <header className="relative z-10 hidden max-h-56 min-h-26 w-full flex-1 flex-col items-center justify-between overflow-hidden md:flex">
      <Image
        src={picHeader}
        alt="Header background image"
        className="object-cover"
        layout="responsive"
        width={1000}
        height={500}
      />
      <div className="absolute top-0 right-0 flex h-2/3 w-full flex-wrap items-center justify-between gap-2 bg-slate-900/60 px-6 text-center text-slate-100 hover:text-white">
        <TextLogo />
        <div className="flex flex-col items-end gap-5 text-slate-200/300">
          <ContactUs />
          <LanguageSelect />
        </div>
      </div>
      <div className="absolute top-2/3 right-0 flex h-1/3 w-full flex-wrap items-center justify-between gap-2 bg-slate-900/55 text-center text-slate-100 hover:text-white">
        <nav className="flex h-full w-full items-center justify-center">
          <ul className="flex h-auto w-8/12 items-center justify-between gap-x-5 rounded-tl-full rounded-br-full bg-slate-50/80 px-5">
            <li className="flex cursor-pointer items-center py-2 text-base text-slate-800 duration-200 hover:text-amber-600">
              <Link href="/">رستوران ها</Link>
            </li>
            <li className="flex cursor-pointer items-center py-2 text-base text-slate-800 duration-200 hover:text-amber-600">
              <Link href="/about">درباره مجموعه</Link>
            </li>
            <li className="flex cursor-pointer items-center py-2 text-base text-slate-800 duration-200 hover:text-amber-600">
              <Link href="/cabins">اتاق ها</Link>
            </li>
            <li className="flex cursor-pointer items-center py-2 text-base text-slate-800 duration-200 hover:text-amber-600">
              <Link href="/cabins">تماس با ما</Link>
            </li>
            {children}
          </ul>
        </nav>
      </div>
    </header>
  );
}
