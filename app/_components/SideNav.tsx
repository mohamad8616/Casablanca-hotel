import Image from "next/image";
import Link from "next/link";
import { auth } from "../_lib/auth";
import SignOutButton from "./SignOutButton";
import SmallSideNav from "./SmallSideNav";

export default async function SideNav() {
  const session = await auth();
  return (
    <>
      <aside className="hidden h-full w-1/6 border-l-1 border-stone-700/50 bg-indigo-100 md:block">
        <div className="flex h-20 items-center justify-center">
          <Link
            href="/account"
            className="flex w-26 items-center justify-center gap-2"
          >
            <Image
              src={session?.user?.image || ""}
              alt="user image"
              referrerPolicy="no-referrer"
              className="mx-auto h-5 cursor-pointer rounded-full duration-200 hover:scale-125 sm:h-8 sm:w-8"
              width={26} // Adjust width as needed
              height={26} // Adjust height as needed
            />
            <span className="text-xs text-slate-800 duration-200 hover:text-blue-600">
              {session?.user?.name || "Guest"}
            </span>
          </Link>
        </div>
        <ul className="h-9/12 w-full flex-col items-center justify-between px-2 py-10 text-start lg:px-5">
          <div className="mb-12 flex w-full flex-col justify-between space-y-5">
            <Link
              href="/account"
              className="lg:text-md w-full rounded-lg bg-indigo-800/80 px-1 py-1 text-sm text-indigo-50 duration-200 hover:bg-indigo-500 lg:px-2"
            >
              پروفایل
            </Link>
            <Link
              href="/account/reservated"
              className="lg:text-md w-full rounded-lg bg-indigo-800/80 px-1 py-1 text-sm text-indigo-50 duration-200 hover:bg-indigo-500 lg:px-2"
            >
              رزرو شده ها
            </Link>
          </div>
          <SignOutButton />
        </ul>
      </aside>
      <nav className="mx-auto mt-3 flex w-full items-center justify-center rounded-tl-3xl rounded-br-3xl px-1 py-2 text-sm text-slate-700 shadow-xl shadow-slate-800/10 md:hidden">
        <SmallSideNav session={session} />
      </nav>
    </>
  );
}
