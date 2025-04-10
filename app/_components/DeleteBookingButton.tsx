"use client";
import { DeleteBooking } from "../_lib/actions";

export default function DeleteBookingButton({
  bookingId,
}: {
  bookingId: number | string;
}) {
  return (
    <button
      onClick={() => {
        if (confirm("آیا مطمئن هستید که می‌خواهید این رزرو را حذف کنید؟")) {
          DeleteBooking(bookingId);
        }
      }}
      className="h-full w-16 cursor-pointer rounded-md border-none bg-red-500/90 px-1 text-sm text-red-50"
    >
      حذف
    </button>
  );
}
