import ReservationCard from "@/app/_components/ReservationCard";
import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/database";

export default async function Page() {
  const session = await auth();
  if (!session) {
    throw new Error("User is not authenticated");
  }
  const bookings = await getBookings(session.guestId);

  console.log(bookings);

  return (
    <main className="mx-2 my-4 h-[440px] w-full space-y-10 overflow-y-scroll p-4 text-slate-800">
      <h1 className="text-center text-base font-semibold tracking-wide sm:text-base md:text-lg">
        اتاق های رزرو شده
      </h1>
      <section className="w-full space-y-10">
        {bookings
          ?.map((booking) => (
            <ReservationCard key={booking.id} reservation={booking} />
          ))
          .reverse()}
      </section>
    </main>
  );
}
