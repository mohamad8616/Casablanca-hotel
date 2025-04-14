import { format } from "date-fns-jalali";
import Image from "next/image";
import { Reservation } from "../_lib/dataType";
import { getCabinByID } from "../_lib/database";
import DeleteBookingButton from "./DeleteBookingButton";
import EditBookingButton from "./EditBookingButton";

export default async function ReservationCard({
  reservation,
}: {
  reservation: Reservation;
}) {
  const cabin = await getCabinByID(reservation.cabinId);
  if (!cabin) {
    throw new Error("Cabin not found");
  }

  const { image, name, maxCapacity } = cabin;
  const { startDate, endDate } = reservation;
  const jalaliStartDate = format(startDate, "yyyy/MM/dd");
  const jalaliEndDate = format(endDate, "yyyy/MM/dd");
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

              <span> {jalaliStartDate}</span>
              <span> تا </span>

              <span> {jalaliEndDate}</span>
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
            {/* <span className="text-sm">
              {date < new Date(reservation.endDate) ? "فعال" : "منقضی شده"}
            </span> */}
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
        <div className="flex h-96 w-full flex-col items-center justify-around bg-slate-200/65 py-3 sm:hidden">
          <div className="relative aspect-video h-1/2 w-11/12">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
          <div className="flex w-11/12 flex-col items-center justify-between">
            <div className="flex h-full w-full flex-col justify-between space-y-2">
              <p
                className={`text-sm ${new Date(endDate) < new Date() ? "text-red-500" : "text-green-800"}`}
              >
                {new Date(endDate) > new Date() ? "فعال" : "منقضی شده"}
              </p>
              <h2 className="text-sm">
                {reservation.numNights + "  "}شب در کابین{" "}
                <span className="text-sm font-bold">{name + " "}</span>
              </h2>
              <p className="text-sm text-slate-700">
                <span> از تاریخ </span>
                <span>{jalaliStartDate}</span>
                <span> تا </span>
                <span>{jalaliEndDate}</span>
              </p>
            </div>
            <div className="flex w-full flex-col-reverse items-start justify-between space-y-2">
              <span className="mt-5 flex w-full items-center justify-between bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-600">
                <span> مبلغ نهایی: </span>

                <span className="text-xs">
                  <span className="text-base"> {reservation.totalPrice}</span>{" "}
                  ریال
                </span>
              </span>
              <span className="mt-3 text-xs text-slate-600">
                <span>
                  {" "}
                  تعداد مهمان:{" "}
                  <span className="text-base"> {reservation.numGuests}</span>
                </span>
              </span>
            </div>
          </div>
          <div className="flex w-11/12 items-center justify-end">
            <EditBookingButton
              booking={reservation}
              maxCapacity={maxCapacity}
            />
            <DeleteBookingButton bookingId={reservation.id} />
          </div>
        </div>
      </>
    </>
  );
}
