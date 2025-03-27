import Link from "next/link";
import { auth } from "../_lib/auth";
import ContactUs from "./ContactUs";
import LanguageSelect from "./LanguageSelect";
import Logo from "./Logo";
import ResponsiveNavbar from "./ResponsiveNavbar";
import picHeader from "@/public/pic1.jpg";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import ShinyText from "./ShinyText";
import { SiHiltonhotelsandresorts } from "react-icons/si";
import TextLogo from "./TextLogo";
import SmallHeader from "./SmallHeader";

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
      <SmallHeader />
    </>
  );
}

{
  /* <p>span</p>
<div className="absolute top-3/5 right-0 flex h-2/5 w-full items-center justify-between bg-slate-900/50 text-slate-100">
  <ul className="flex h-full w-1/2 items-center justify-between bg-slate-300/20">
    <li>
    <Link href="#hero-section" className="text-xs">
    <span className="text-base sm:text-2xl">#</span> معرفی هتل
    </Link>
    </li>
    <li>
      <Link href="#aboutCabins" className="text-xs">
        <span className="text-base sm:text-2xl">#</span> درباره کابین
        های ما
      </Link>
    </li>
  </ul>
  <div className="text-center text-xs text-slate-100">
    <Link href="/account">ورود به حساب کاربری</Link>
  </div>
</div>*/
}

{
  /* <SiHiltonhotelsandresorts className="mr-6 hidden text-5xl text-[#b5b5b5e2] sm:mr-17 sm:block sm:text-6xl" /> */
}
