import { signOutAction } from "../_lib/actions";

export default function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="mb-20 w-11/12 rounded-lg bg-indigo-800/80 px-2 py-1 text-indigo-50 duration-200 hover:bg-indigo-500 lg:text-lg">
        خروج از حساب کاربری
      </button>
    </form>
  );
}
