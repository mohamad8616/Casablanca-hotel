import { auth } from "../_lib/auth";

import Image from "next/image";

// import { SiHiltonhotelsandresorts } from "react-icons/si";
import LargeNavbar from "./LargeNavbar";
import SmallHeader from "./SmallHeader";
import Link from "next/link";

export default async function Header() {
  const session = await auth();

  return (
    <>
      <SmallHeader>
        {session?.user ? (
          <Link
            href="/account"
            className="w-16 flex-col items-center justify-center gap-2"
          >
            <Image
              src={session.user.image || ""}
              alt="user image"
              referrerPolicy="no-referrer"
              className="mx-auto h-5 rounded-full sm:h-8 sm:w-8"
              width={26} // Adjust width as needed
              height={26} // Adjust height as needed
            />
            <span className="text-xs sm:text-sm">{session.user.name}</span>
          </Link>
        ) : (
          <div className="flex w-full justify-center">
            <Link
              href="/account"
              className="w-3/4 cursor-pointer place-self-center rounded-md bg-slate-300 py-1 text-sm font-semibold text-slate-800 duration-200 hover:bg-slate-400 sm:text-base"
            >
              ورود به حساب کاربری
            </Link>
          </div>
        )}
      </SmallHeader>

      <LargeNavbar>
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
      </LargeNavbar>
    </>
  );
}
