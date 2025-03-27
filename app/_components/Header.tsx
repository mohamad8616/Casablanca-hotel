import { auth } from "../_lib/auth";
import ContactUs from "./ContactUs";
import LanguageSelect from "./LanguageSelect";

import picHeader from "@/public/pic1.jpg";
import Image from "next/image";

// import { SiHiltonhotelsandresorts } from "react-icons/si";
import TextLogo from "./TextLogo";
import SmallHeader from "./SmallHeader";
import Link from "next/link";
import LargeNavbar from "./LargeNavbar";

export default async function Header() {
  const session = await auth();
  console.log(session);

  //   <header className="flex h-auto w-full flex-col items-center justify-center bg-stone-900/90 text-stone-100 sm:h-26 md:h-44 lg:h-auto lg:pt-4">
  //     <section className="relative grid w-full grid-cols-3 items-center justify-between gap-x-5 border-stone-100 px-3 py-2 md:grid-cols-2 md:py-5 lg:border-b">
  //       <div className="col-span-2 flex items-center justify-between md:justify-self-start">
  //         <ResponsiveNavbar type="sm">
  //           {session?.user ? (
  //             <Link className="flex space-x-3" href="/account">
  //               <img
  //                 src={session.user.image}
  //                 alt="user image"
  //                 className="h-8 items-center rounded-full"
  //                 referrerPolicy="no-referrer"
  //               />
  //               <span>{session.user.name}</span>
  //             </Link>
  //           ) : (
  //             <div>
  //               <Link href="/account" className="text-sm md:text-base">
  //                 ورود به حساب کاربری
  //               </Link>
  //             </div>
  //           )}
  //         </ResponsiveNavbar>
  //         <Logo />
  //       </div>
  //       <div className="flex items-start justify-end gap-6 text-end">
  //         <ContactUs />
  //         <LanguageSelect />
  //       </div>
  //     </section>
  //     <ResponsiveNavbar type="lg">
  //       {session?.user ? (
  //         <Link
  //           className="hidden items-center space-x-3 md:flex"
  //           href="/account"
  //         >
  //           <img
  //             src={session.user.image}
  //             alt="user image"
  //             className="h-8 rounded-full"
  //             referrerPolicy="no-referrer"
  //           />
  //           <span>{session.user.name}</span>
  //         </Link>
  //       ) : (
  //         <div>
  //           <Link
  //             href="/account"
  //             className="hidden text-sm md:block md:text-base"
  //           >
  //             ورود به حساب کاربری
  //           </Link>
  //         </div>
  //       )}
  //     </ResponsiveNavbar>
  //   </header>
  // );
  return (
    <>
      <SmallHeader>
        {session?.user && (
          <div className="w-16 flex-col items-center justify-center gap-2">
            <Image
              src={session.user.image || ""}
              alt="user image"
              referrerPolicy="no-referrer"
              className="mx-auto h-5 rounded-full sm:h-8 sm:w-8"
              width={26} // Adjust width as needed
              height={26} // Adjust height as needed
            />
            <span className="text-xs sm:text-sm">{session.user.name}</span>
          </div>
        )}
      </SmallHeader>
      {/* <header className="relative z-10 hidden max-h-56 min-h-26 w-full flex-1 flex-col items-center justify-between overflow-hidden md:flex">
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
              {session?.user && (
                <div className="flex w-26 items-center justify-center gap-2">
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
                </div>
              )}
            </ul>
          </nav>
        </div>
      </header> */}
      <LargeNavbar>
        {session?.user && (
          <div className="flex w-26 items-center justify-center gap-2">
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
          </div>
        )}
      </LargeNavbar>
    </>
  );
}
