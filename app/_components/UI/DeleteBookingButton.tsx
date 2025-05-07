"use client";
import { ScaleLoader } from "react-spinners";
import { DeleteBooking } from "../../_lib/actions";
import { useTransition } from "react";

export default function DeleteBookingButton({
  bookingId,
}: {
  bookingId: number | string;
}) {
  const [isPending, startTransition] = useTransition();
  function handleDeleteBooking() {
    if (confirm("آیا مطمئن هستید که می‌خواهید این رزرو را حذف کنید؟")) {
      startTransition(() => DeleteBooking(bookingId));
    }
  }
  return isPending ? (
    <div className="flex h-full w-16 items-center justify-center">
      <ScaleLoader
        height={15}
        width={3}
        color="#000"
        speedMultiplier={1}
        className="font-bold"
      />
    </div>
  ) : (
    <button
      onClick={handleDeleteBooking}
      className="h-full w-16 cursor-pointer border-none bg-red-500 px-1.5 py-0.5 text-sm text-red-50"
      disabled={isPending}
    >
      {isPending ? "حذف..." : "حذف"}
    </button>
  );
}
