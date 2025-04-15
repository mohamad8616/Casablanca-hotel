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
  const { startDate, endDate, observations } = reservation;
  const jalaliStartDate = format(startDate, "yyyy/MM/dd");
  const jalaliEndDate = format(endDate, "yyyy/MM/dd");

  const validOrExpiredBooking = new Date() < new Date(reservation.endDate);
  const isActiveBooking = new Date() < new Date(reservation.endDate);
  return (
    <>
      <>
        <div className="hidden h-auto w-full space-y-5 border-slate-700 bg-slate-200/60 sm:block">
          <div className="flex h-20 w-full items-center justify-between gap-2">
            <div className="relative aspect-video h-full w-30">
              <Image src={image} alt={name} fill className="object-fill" />
            </div>
            <div className="flex h-full w-full items-center justify-between px-3 py-1">
              <div className="flex h-full flex-col items-start justify-between space-y-2">
                <h2 className="text-sm">
                  {reservation.numNights + "  "}شب در کابین{" "}
                  <span className="text-sm font-bold">{name + " "}</span>
                </h2>
                <p className="w-full space-x-5 text-sm text-slate-700">
                  <span> از تاریخ </span>

                  <span> {jalaliStartDate}</span>
                  <span> تا </span>

                  <span> {jalaliEndDate}</span>
                </p>
                <div className="w-full justify-between px-1">
                  <p className="text-xs text-slate-600">
                    تعداد مهمان {reservation.numGuests}
                  </p>
                </div>
              </div>
              <div className="flex h-full flex-col justify-between text-end">
                <span
                  className={`text-sm ${validOrExpiredBooking ? "text-green-800" : "text-red-500"}`}
                >
                  {isActiveBooking ? "فعال" : "منقضی شده"}
                </span>
                <span className="text-xs text-slate-500">
                  رزرو شده در{" "}
                  <span>{format(reservation.created_at, "yyyy/MM/dd")}</span>
                </span>
              </div>
            </div>
            <div className="flex h-full w-16 flex-col items-center justify-between gap-1.5 divide-y-1 divide-slate-900 px-1.5 py-2">
              {isActiveBooking && (
                <>
                  <DeleteBookingButton bookingId={reservation.id} />
                  <EditBookingButton
                    booking={reservation}
                    maxCapacity={maxCapacity}
                  />
                </>
              )}
            </div>
          </div>
          <div className="flex h-20 w-full items-center justify-between gap-2 px-3">
            <span className="text-sm font-semibold text-slate-600">
              ملاحظات و نظرات
            </span>
            <textarea
              disabled
              className="w-2/3 rounded-md bg-white px-2 py-1 text-sm text-slate-600"
              value={observations}
            />
          </div>
          <div className="mx-auto flex h-10 w-12/12 items-center justify-between space-x-2 bg-amber-500 px-3 text-sm font-semibold tracking-wide text-stone-800">
            <span>مبلغ نهایی : </span>
            <div>
              <span className="text-base"> {reservation.totalPrice}</span>
              <span className="text-xs">ریال</span>
            </div>
          </div>
        </div>
      </>
      <>
        <div className="flex h-[600px] w-full flex-col items-center justify-around bg-slate-200/65 py-3 sm:hidden">
          <div className="relative aspect-video h-1/2 w-11/12">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
          <div className="flex w-11/12 flex-col items-center justify-between">
            <div className="flex h-full w-full flex-col justify-between space-y-2">
              <p
                className={`text-sm ${isActiveBooking ? "text-green-800" : "text-red-500"}`}
              >
                {isActiveBooking ? "فعال" : "منقضی شده"}
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

              <div className="flex h-20 w-full items-center justify-between gap-2">
                <span className="text-sm text-slate-600">ملاحظات : </span>
                <textarea
                  disabled
                  className="w-2/3 rounded-md bg-white px-2 py-1 text-sm text-slate-600"
                  value={observations}
                />
              </div>
              <span className="mt-3 text-xs text-slate-600">
                <span>
                  {" "}
                  تعداد مهمان:{" "}
                  <span className="text-base"> {reservation.numGuests}</span>
                </span>
              </span>
            </div>
          </div>

          {isActiveBooking && (
            <div className="mt-3 flex w-11/12 items-center justify-end">
              <EditBookingButton
                booking={reservation}
                maxCapacity={maxCapacity}
              />
              <DeleteBookingButton bookingId={reservation.id} />
            </div>
          )}
        </div>
      </>
    </>
  );
}
