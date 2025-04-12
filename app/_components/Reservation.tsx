import { Cabin } from "@/app/_lib/dataType";
import { auth } from "../_lib/auth";
import ReservationProvider from "./ReservationContext";
import ReservationForm from "./ReservationForm";

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
    <div id="reservation" className="w-full text-center">
      ابتدا وارد حساب کاربری خود شوید
    </div>
  );
}
