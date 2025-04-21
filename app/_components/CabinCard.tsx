import Image from "next/image";
import Link from "next/link";
import { CabinCard } from "../_lib/dataType";

export default function Cabin({ cabin }: { cabin: CabinCard }) {
  const { id, name, maxCapacity, image } = cabin;
  return (
    <div className="my-5 h-[470px] w-full rounded-md border-stone-800 shadow-xl shadow-stone-600/30 lg:h-[500px] dark:border-none">
      <div className="relative h-4/5 w-full flex-1 rounded-md">
        {image ? (
          <Image
            src={image}
            alt={`Cabin ${name}`}
            className="flex-1 rounded-md border-none object-cover"
            fill
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gray-200">
            <p>No Image Available</p>
          </div>
        )}
      </div>
      <div className="space-y-5 px-3">
        <div className="flex items-center justify-between p-2 text-sm">
          <span>شماره اتاق: {name}</span>
          <span>ظرفیت اتاق: {maxCapacity}</span>
        </div>
        <Link
          href={`/cabins/${id}`}
          className="mr-auto cursor-pointer rounded-md border-2 border-amber-500 px-2 py-0.5 text-sm text-amber-500 duration-200 hover:bg-amber-500 hover:text-amber-50"
        >
          اطلاعات بیشتر و رزرو &larr;
        </Link>
      </div>
    </div>
  );
}
