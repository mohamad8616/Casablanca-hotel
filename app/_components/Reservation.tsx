import { Cabin } from "@/app/_lib/dataType";
import { auth } from "../_lib/auth";
import ReservationProvider from "./ReservationContext";
import ReservationForm from "./ReservationForm";
import Link from "next/link";

export default async function Reservation({ cabin }: { cabin: Cabin }) {
  const session = await auth();

  if (session?.user) {
    return (
      <ReservationProvider>
        <ReservationForm cabin={cabin} />
      </ReservationProvider>
    );
  }
  return (
    <div
      id="reservation"
      className="w-full space-y-6 text-center dark:bg-stone-900 dark:text-stone-100"
    >
      <p>ابتدا وارد حساب کاربری خود شوید</p>
      <Link
        href="/login"
        className="bg-stone-800 px-2 py-1 text-start text-sm tracking-wide text-stone-50 duration-200 ease-in-out hover:bg-stone-700"
      >
        وارد حساب کاربری شوید
      </Link>
    </div>
  );
}
