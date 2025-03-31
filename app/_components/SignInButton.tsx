import { SiGoogle } from "react-icons/si";
import { SignInAction } from "../_lib/actions";

export default function SignInButton() {
  return (
    <form action={SignInAction}>
      <button className="flex w-full cursor-pointer items-center justify-around rounded-xl border-2 border-red-500/80 bg-red-500 px-2 py-1 text-xs text-red-50 duration-200 hover:bg-red-50 hover:text-blue-700 sm:text-sm">
        ورود به حساب کاربری با گوگل{" "}
        <span className="rounded-full border-0 border-red-50 bg-red-500 p-2 text-red-50 duration-200 hover:scale-125 hover:text-red-50">
          <SiGoogle />
        </span>
      </button>
    </form>
  );
}
