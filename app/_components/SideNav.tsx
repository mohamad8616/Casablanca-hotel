import Link from "next/link";
import SignOutButton from "./SignOutButton";

export default function SideNav() {
  return (
    <aside className="h-full w-1/6 border-l-1 border-stone-700/50 bg-indigo-100">
      <div className="mx-auto w-11/12 space-x-3 border-b-2 border-stone-700/30 py-10 text-center">
        <span>حساب کاربری</span>
        <span>عکس</span>
      </div>
      <ul className="hidden h-9/12 w-full flex-col items-start justify-between px-5 py-10 text-start md:flex">
        <div className="flex w-full flex-col items-start justify-between space-y-5 md:flex">
          <Link
            href="/account"
            className="w-11/12 rounded-lg bg-indigo-800/80 px-2 py-1 text-indigo-50 duration-200 hover:bg-indigo-500 lg:text-lg"
          >
            پروفایل
          </Link>
          <Link
            href="/account/reservated"
            className="w-11/12 rounded-lg bg-indigo-800/80 px-2 py-1 text-indigo-50 duration-200 hover:bg-indigo-500 lg:text-lg"
          >
            رزرو شده ها
          </Link>
        </div>
        <SignOutButton />
      </ul>
    </aside>
  );
}
