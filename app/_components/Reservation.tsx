import DateSelector from "@/app/_components/DateSelector";
import { ReservationProvider } from "./ReservationContext";
import ReservationForm from "./ReservationForm";
import { Cabin } from "@/app/_lib/dataType";
import { auth } from "../_lib/auth";

export default async function Reservation({ cabin }: { cabin: Cabin }) {
  const session = await auth();

  if (session?.user) {
    return (
      <ReservationProvider>
        <section
          id="reservation"
          className="h-auto w-full items-center justify-around gap-6 px-10 py-14 md:flex"
        >
          <section className="w-1/2">
            <DateSelector />
          </section>
          <section className="w-1/2">
            <ReservationForm cabin={cabin} />
          </section>
        </section>
      </ReservationProvider>
    );
  }
  return (
    <div id="reservation" className="w-full text-center">
      ابتدا وارد حساب کاربری خود شوید
    </div>
  );
}
