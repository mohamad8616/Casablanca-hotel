import { signOutAction } from "../_lib/actions";

export default function SignOutButton({ classname }: { classname?: string }) {
  return (
    <form action={signOutAction}>
      <button
        className={`mb-20 hidden w-full cursor-pointer rounded-lg bg-red-600 py-1 text-sm text-white duration-200 hover:bg-red-500 md:block md:px-0.5 lg:text-base ${classname}`}
      >
        خروج از حساب کاربری
      </button>
      <button
        className={`cursor-pointer text-sm text-red-600 hover:text-red-700 md:hidden ${classname}`}
      >
        خروج از حساب کاربری
      </button>
    </form>
  );
}
