"use client";
import Image from "next/image";
import TextLogo from "../UI/TextLogo";
import ContactUs from "../UI/ContactUs";
import LanguageSelect from "../UI/LanguageSelect";
import picHeader from "@/public/pic1.jpg";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { BsQuestionSquare } from "react-icons/bs";
import { GiWoodCabin } from "react-icons/gi";
import { IoMdContacts } from "react-icons/io";
import { LargeHeaderProps } from "../../_lib/dataType";
import ThemeToggle from "@/app/_components/ThemeToggle";
import { ReactNode, useState } from "react";

interface NavLink {
  id: number;
  name: string;
  href: string;
  icon: ReactNode;
}

const navLinks: NavLink[] = [
  {
    id: 0,
    name: "صفحه اصلی",
    href: "/",
    icon: <IoHomeOutline className="inline text-xl" />,
  },
  {
    id: 1,
    name: " درباره مجموعه",
    href: "/about",
    icon: <BsQuestionSquare className="inline text-xl" />,
  },
  {
    id: 2,
    name: "کابین ها",
    href: "/cabins",
    icon: <GiWoodCabin className="inline text-xl" />,
  },
  {
    id: 3,
    name: "ارتباط با ما",
    href: "#contactus",
    icon: <IoMdContacts className="inline text-xl" />,
  },
];

const navLiClass =
  "cursor-pointer items-center py-2 text-base text-slate-800 duration-200 hover:text-amber-600";

const navLinkClass = "flex items-center md:gap-x-1 lg:gap-x-2";
export default function LargeNavbar({ session }: LargeHeaderProps) {
  const [selectedLink, setSelectedLink] = useState<number>(0);
  return (
    <header className="relative z-10 hidden max-h-56 min-h-26 w-full flex-1 flex-col items-center justify-between overflow-hidden md:flex">
      <Image
        src={picHeader}
        alt="Header background image"
        className="object-cover"
        layout="responsive"
        width={1000}
        height={500}
        loading="lazy"
      />
      <div className="absolute top-0 right-0 flex h-2/3 w-full flex-wrap items-center justify-between gap-2 bg-slate-900/60 px-6 text-center text-slate-100 hover:text-white">
        <TextLogo />
        <div className="flex flex-col items-end gap-5 text-slate-200/300">
          <ContactUs />
          <LanguageSelect />
        </div>
      </div>
      <div className="absolute top-2/3 right-0 flex h-1/3 w-full flex-wrap items-center justify-between gap-2 bg-slate-900/55 text-center text-slate-100 hover:text-white">
        <nav className="relative flex h-full w-full items-center justify-center">
          <ul className="flex h-auto items-center justify-between gap-x-5 rounded-tl-full rounded-br-full bg-slate-50/80 px-7 md:w-10/12 lg:w-8/12">
            {navLinks.map((navLink) => (
              <li
                className={`${navLiClass} `}
                key={navLink.id}
                onClick={() => setSelectedLink(navLink.id)}
              >
                <Link href={navLink.href} className={navLinkClass}>
                  {" "}
                  <span
                    className={`${navLink.id === selectedLink ? "text-green-700" : ""}`}
                  >
                    {navLink.icon}
                  </span>
                  <span
                    className={`${navLink.id === selectedLink ? "text-green-700" : ""}`}
                  >
                    {navLink.name}
                  </span>
                </Link>
              </li>
            ))}

            {session?.user ? (
              <Link
                href="/account"
                onClick={() => setSelectedLink(5)}
                className="flex w-26 items-center justify-center gap-2"
              >
                <Image
                  src={session.user.image || ""}
                  alt="user image"
                  referrerPolicy="no-referrer"
                  className="mx-auto h-5 cursor-pointer rounded-full duration-200 hover:scale-125 sm:h-8 sm:w-8"
                  width={26} // Adjust width as needed
                  height={26} // Adjust height as needed
                />
                <span className="text-xs text-slate-800 sm:text-sm">
                  {session.user.name}
                </span>
              </Link>
            ) : (
              <Link
                className="text-slate-800 duration-200 hover:text-amber-600"
                href="/account"
              >
                ورود به حساب کاربری
              </Link>
            )}
          </ul>
          <div className="absolute top-1/2 left-3 flex -translate-y-1/2 transform items-center">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
