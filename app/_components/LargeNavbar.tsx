import Image from "next/image";
import TextLogo from "./TextLogo";
import ContactUs from "./ContactUs";
import LanguageSelect from "./LanguageSelect";
import picHeader from "@/public/pic1.jpg";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { BsQuestionSquare } from "react-icons/bs";
import { GiWoodCabin } from "react-icons/gi";
import { IoMdContacts } from "react-icons/io";
import { LargeHeaderProps } from "../_lib/dataType";

const navLiClass =
  "cursor-pointer items-center py-2 text-base text-slate-800 duration-200 hover:text-amber-600";

const navLinkClass = "flex items-center md:gap-x-1 lg:gap-x-2";
export default function LargeNavbar({ session }: LargeHeaderProps) {
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
          <ul className="flex h-auto items-center justify-between gap-x-5 rounded-tl-full rounded-br-full bg-slate-50/80 px-7 md:w-10/12 lg:w-8/12">
            <li className={navLiClass}>
              <Link href="/" className={navLinkClass}>
                {" "}
                <span>
                  <IoHomeOutline className="inline text-xl" />
                </span>
                <span>صفحه اصلی</span>
              </Link>
            </li>
            <li className={navLiClass}>
              <Link href="/about" className={navLinkClass}>
                <span>
                  <BsQuestionSquare className="inline text-xl" />
                </span>
                <span>درباره مجموعه</span>
              </Link>
            </li>
            <li className={navLiClass}>
              <Link href="/cabins" className={navLinkClass}>
                <span>
                  <GiWoodCabin className="inline text-xl" />
                </span>
                <span>اتاق ها</span>
              </Link>
            </li>
            <li className={navLiClass}>
              <Link href="#contactUs" className={navLinkClass}>
                <span>
                  <IoMdContacts className="inline text-xl" />
                </span>
                <span>تماس با ما</span>
              </Link>
            </li>

            {session?.user ? (
              <Link
                href="/account"
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
        </nav>
      </div>
    </header>
  );
}
