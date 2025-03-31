// "use client";
// import Link from "next/link";
// import TextLogo from "./TextLogo";
// import { RxHamburgerMenu } from "react-icons/rx";
// import Image from "next/image";
// import picHeader from "@/public/pic1.jpg";
// import { useEffect, useState } from "react";

// export default function SmallHeader({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [showNav, setShowNav] = useState(false);
//   // Disable scrolling when the navbar is open
//   useEffect(() => {
//     if (showNav) {
//       document.body.style.overflow = "hidden"; // Disable scrolling
//     } else {
//       document.body.style.overflow = ""; // Re-enable scrolling
//     }
//     return () => {
//       document.body.style.overflow = ""; // Cleanup on unmount
//     };
//   }, [showNav]);
//   return (
//     <header className="relative z-10 aspect-video max-h-56 min-h-26 w-full flex-1 overflow-hidden md:hidden">
//       <div className="absolute top-0 left-0 h-full w-full bg-slate-900/10 px-1"></div>
//       <Image
//         src={picHeader}
//         alt="Image for header"
//         className="-z-10 object-cover"
//         width={1000}
//         height={2000}
//       />
//       <div className="absolute top-0 right-0 flex h-full w-full flex-wrap items-center justify-between gap-1 bg-slate-900/60 px-1 text-center text-slate-100 hover:text-white sm:px-6">
//         <button className="cursor-pointer" onClick={() => setShowNav(true)}>
//           <RxHamburgerMenu className="text-2xl text-slate-100 sm:text-4xl" />
//         </button>
//         <TextLogo />
//       </div>
//       {showNav && (
//         <div
//           className="fixed top-0 right-0 z-20 h-dvh w-full bg-slate-900/70"
//           onClick={() => setShowNav(false)}
//         >
//           <nav
//             className="z-50 h-full w-10/12 bg-slate-800 text-slate-200"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex items-center justify-between border-b-2 border-slate-200/50 px-4 py-5 text-center">
//               <TextLogo />
//               <button
//                 className="cursor-pointer text-5xl text-red-500"
//                 onClick={() => setShowNav(false)}
//               >
//                 &times;
//               </button>
//             </div>
//             <ul className="w-full divide-y-2 divide-slate-200/30 px-10 py-6 text-start text-sm text-slate-200/80 sm:text-base">
//               <li className="my-8 flex cursor-pointer items-center py-2 hover:text-amber-600">
//                 <Link href="/">رستوران ها</Link>
//               </li>
//               <li className="my-8 flex cursor-pointer items-center py-2 hover:text-amber-600">
//                 <Link href="/about">درباره مجموعه</Link>
//               </li>
//               <li className="my-8 flex cursor-pointer items-center py-2 hover:text-amber-600">
//                 <Link href="/cabins">اتاق ها</Link>
//               </li>
//               <li className="my-8 flex cursor-pointer items-center py-2 hover:text-amber-600">
//                 <Link href="/cabins">تماس با ما</Link>
//               </li>
//             </ul>

//             {children}
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }
/////////////////////////////////////////////////////////////////////////////
"use client";
import Link from "next/link";
import TextLogo from "./TextLogo";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import picHeader from "@/public/pic1.jpg";
import { useEffect, useState } from "react";

export default function SmallHeader({
  children,
}: {
  children: React.ReactNode;
}) {
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
      <div className="absolute top-0 right-0 flex h-full w-full flex-wrap items-center justify-between gap-1 bg-slate-900/60 px-1 text-center text-slate-100 hover:text-white sm:px-6">
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
          {children}
        </nav>
      </div>
    </header>
  );
}
// "use client";
// import Link from "next/link";
// import TextLogo from "./TextLogo";
// import { RxHamburgerMenu } from "react-icons/rx";
// import Image from "next/image";
// import picHeader from "@/public/pic1.jpg";
// import { useEffect, useState } from "react";

// export default function SmallHeader({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [showNav, setShowNav] = useState(false);
//   const [isVisible, setIsVisible] = useState(false); // Controls visibility for smooth transition

//   // Disable scrolling when the navbar is open
//   useEffect(() => {
//     if (showNav) {
//       setIsVisible(true); // Make the navbar visible
//       document.body.style.overflow = "hidden"; // Disable scrolling
//     } else {
//       document.body.style.overflow = ""; // Re-enable scrolling
//       // Delay hiding the navbar until the transition is complete
//       const timeout = setTimeout(() => setIsVisible(false), 300); // Match the transition duration
//       return () => clearTimeout(timeout); // Cleanup timeout on unmount
//     }
//   }, [showNav]);

//   return (
//     <header className="relative z-10 aspect-video max-h-56 min-h-26 w-full flex-1 overflow-hidden md:hidden">
//       <div className="absolute top-0 left-0 h-full w-full bg-slate-900/10 px-1"></div>
//       <Image
//         src={picHeader}
//         alt="Image for header"
//         className="-z-10 object-cover"
//         width={1000}
//         height={2000}
//       />
//       <div className="absolute top-0 right-0 flex h-full w-full flex-wrap items-center justify-between gap-1 bg-slate-900/60 px-1 text-center text-slate-100 hover:text-white sm:px-6">
//         <button className="cursor-pointer" onClick={() => setShowNav(true)}>
//           <RxHamburgerMenu className="text-2xl text-slate-100 sm:text-4xl" />
//         </button>
//         <TextLogo />
//       </div>
//       {isVisible && (
//         <div
//           className={`fixed top-0 right-0 z-20 h-dvh w-full bg-slate-900/70 transition-opacity duration-300 ${
//             showNav ? "opacity-100" : "opacity-0"
//           }`}
//           onClick={() => setShowNav(false)}
//         >
//           <nav
//             className={`z-50 h-full w-10/12 transform bg-slate-800 text-slate-200 transition-transform duration-300 ${
//               showNav ? "translate-x-0" : "translate-x-full"
//             }`}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex items-center justify-between border-b-2 border-slate-200/50 px-4 py-5 text-center">
//               <TextLogo />
//               <button
//                 className="cursor-pointer text-5xl text-red-500"
//                 onClick={() => setShowNav(false)}
//               >
//                 &times;
//               </button>
//             </div>
//             <ul className="w-full divide-y-2 divide-slate-200/30 px-10 py-6 text-start text-sm text-slate-200/80 sm:text-base">
//               <li className="my-8 flex cursor-pointer items-center py-2 hover:text-amber-600">
//                 <Link href="/">رستوران ها</Link>
//               </li>
//               <li className="my-8 flex cursor-pointer items-center py-2 hover:text-amber-600">
//                 <Link href="/about">درباره مجموعه</Link>
//               </li>
//               <li className="my-8 flex cursor-pointer items-center py-2 hover:text-amber-600">
//                 <Link href="/cabins">اتاق ها</Link>
//               </li>
//               <li className="my-8 flex cursor-pointer items-center py-2 hover:text-amber-600">
//                 <Link href="/cabins">تماس با ما</Link>
//               </li>
//             </ul>

//             {children}
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }
