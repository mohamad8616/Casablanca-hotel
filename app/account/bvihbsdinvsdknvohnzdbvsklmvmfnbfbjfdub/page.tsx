import Link from "next/link";
import { FaHandHoldingHeart } from "react-icons/fa";

export default function ThanksForReservation() {
  return (
    <main className="flex h-dvh w-full items-center justify-center md:h-full">
      <div className="flex h-full w-11/12 flex-col items-center justify-center">
        <h1 className="mb-6 flex items-center justify-center gap-2 text-base sm:text-xl md:text-2xl lg:text-3xl">
          از این که مجموعه مارا انتخاب کردید متشکریم
          <span className="hidden md:block">
            <FaHandHoldingHeart />
          </span>
        </h1>
        <Link
          href="/account/reservated"
          className="cursor-pointer border-1 border-amber-500 px-1 py-2 text-sm text-amber-600 hover:bg-amber-500 hover:text-amber-50 md:px-4 md:py-2 md:text-base"
        >
          لیست رزروها &larr;
        </Link>
      </div>
    </main>
  );
}
