"use client";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function SmallSideNav({ session }: { session: Session | null }) {
  const pathname = usePathname();

  return (
    <ul className="grid w-full grid-cols-3 items-center justify-between gap-2 px-5 text-sm">
      <Link
        href="/account"
        className="flex w-1/2 items-center justify-center gap-0.5"
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
      <Link
        href="/account"
        className={`flex h-full w-full items-center justify-center rounded-md ${pathname === "/account" ? "bg-blue-200" : "bg-stone-200"}`}
      >
        پروفایل
      </Link>

      <Link
        href="/account/reservated"
        className={`${pathname === "/account/reservated" ? "bg-blue-200" : "bg-stone-200"} flex h-full w-full items-center justify-center rounded-md`}
      >
        رزرو شده ها
      </Link>
      {/* <li
        className={`flex h-full w-full items-center justify-center rounded-md ${pathname === "/account" ? "bg-blue-200" : "bg-stone-200"}`}
      >
        <Link href="/account">پروفایل</Link>
      </li>

      <li
        className={`${pathname === "/account/reservated" ? "bg-blue-200" : "bg-stone-200"} flex h-full w-full items-center justify-center rounded-md`}
      >
        <Link href="/account/reservated">رزرو شده ها</Link>
      </li> */}
    </ul>
  );
}
