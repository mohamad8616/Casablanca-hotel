import { format } from "date-fns-jalali";
import Image from "next/image";
import { Reservation } from "../_lib/dataType";
import { getCabinByID } from "../_lib/database";
import DeleteBookingButton from "./DeleteBookingButton";

export default async function ReservationCard({
  reservation,
}: {
  reservation: Reservation;
}) {
  const cabin = await getCabinByID(reservation.cabinId);
  if (!cabin) {
    throw new Error("Cabin not found");
  }
  const date = new Date();

  const { image, name } = cabin;

  return (
    <>
      <div className="hidden h-20 w-full items-center justify-between gap-2 border-slate-700 bg-slate-200/60 sm:flex">
        <div className="relative aspect-video h-full w-30">
          <Image src={image} alt={name} fill className="object-fill" />
        </div>
        <div className="flex h-full w-full items-center justify-between px-3 py-1">
          <div className="flex h-full flex-col items-start justify-between">
            <h2 className="text-sm">
              {reservation.numNights + "  "}شب در کابین{" "}
              <span className="text-sm font-bold">{name + " "}</span>
            </h2>
            <p className="text-sm text-slate-700">
              <span> از تاریخ </span>
              <span> {format(reservation.startDate, "MM/dd")}</span>
              <span> تا </span>
              <span> {format(reservation.endDate, "MM/dd")}</span>
            </p>
            <div className="flex w-full justify-between gap-5 px-1">
              <span className="text-sm font-semibold text-slate-600">
                مبلغ نهایی {reservation.totalPrice}
              </span>
              <span className="text-xs text-slate-600">
                تعداد مهمان {reservation.numGuests}
              </span>
            </div>
          </div>
          <div className="flex h-full flex-col justify-between text-end">
            <span className="text-sm">
              {date < new Date(reservation.endDate) ? "فعال" : "منقضی شده"}
            </span>
            <span className="text-xs text-slate-500">
              رزرو شده در{" "}
              <span>{format(reservation.created_at, "yyyy/MM/dd")}</span>
            </span>
          </div>
        </div>
        <div className="flex h-full w-16 flex-col items-center justify-between gap-1.5 divide-y-1 divide-slate-900 px-1.5 py-2">
          <DeleteBookingButton bookingId={reservation.id} />
          <button className="h-full w-16 cursor-pointer rounded-md border-none bg-orange-400 px-1 text-sm text-red-50">
            ویرایش
          </button>
        </div>
      </div>
      <>
        <div className="flex h-72 w-full flex-col items-center justify-around bg-slate-200/65 py-3 sm:hidden">
          <div className="relative aspect-video h-1/2 w-10/12">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
          <div className="flex w-10/12 items-center justify-between">
            <div className="flex h-full w-10/12 flex-col justify-between">
              <h2 className="text-sm">
                {reservation.numNights + "  "}شب در کابین{" "}
                <span className="text-sm font-bold">{name + " "}</span>
              </h2>
              <p className="text-sm text-slate-700">
                <span> از تاریخ </span>
                <span> {format(reservation.startDate, "MM/dd")}</span>
                <span> تا </span>
                <span> {format(reservation.endDate, "MM/dd")}</span>
              </p>
            </div>
            <div className="flex w-full flex-col-reverse items-end justify-between gap-5 px-1">
              <span className="text-sm font-semibold text-slate-600">
                مبلغ نهایی {reservation.totalPrice}
              </span>
              <span className="text-xs text-slate-600">
                تعداد مهمان {reservation.numGuests}
              </span>
            </div>
          </div>
          <div className="flex w-10/12 items-center justify-end gap-3">
            <button className="h-full w-16 cursor-pointer rounded-md border-none bg-amber-600 px-1 text-sm text-red-50">
              ویرایش
            </button>

            <DeleteBookingButton bookingId={reservation.id} />
          </div>
        </div>
      </>
    </>
  );
}
