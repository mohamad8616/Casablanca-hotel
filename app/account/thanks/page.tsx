import Link from "next/link";
import { FaHandHoldingHeart } from "react-icons/fa";

export default function ThanksForReservation() {
  return (
    <main className="flex h-full w-full items-center justify-center">
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="mb-6 flex items-center gap-2 space-y-3 text-3xl">
          از این که مجموعه مارا انتخاب کردید متشکریم
          <FaHandHoldingHeart />
        </h1>
        <Link
          href="/account/reservated"
          className="cursor-pointer border-1 border-amber-500 px-4 py-2 text-amber-600 hover:bg-amber-500 hover:text-amber-50"
        >
          لیست رزروها &larr;
        </Link>
      </div>
    </main>
  );
}
