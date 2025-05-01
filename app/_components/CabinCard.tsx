"use client";
import Image from "next/image";
import Link from "next/link";
import { CabinCard } from "../_lib/dataType";
import { useState } from "react";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";

export default function Cabin({ cabin }: { cabin: CabinCard }) {
  const { id, name, maxCapacity, image, description, regularPrice, discount } =
    cabin;
  const [isExpanded, setIsExpanded] = useState(false);

  // Calculate discounted price
  const discountedPrice = regularPrice - discount;

  // Truncate description for performance
  const truncatedDescription =
    description.length > 100
      ? description.substring(0, 100) + "..."
      : description;

  // Toggle description expansion
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="group relative h-full w-full overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:bg-slate-800">
      {/* Image container with overlay on hover */}
      <div className="relative h-48 w-full overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={`Cabin ${name}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-200 dark:bg-slate-700">
            <IoBedOutline className="h-12 w-12 text-slate-400" />
          </div>
        )}
        {/* Price tag overlay */}
        <div className="absolute right-2 bottom-2 rounded-full bg-amber-500 px-3 py-1 text-sm font-bold text-white">
          {discount > 0 ? (
            <div className="flex items-center gap-1">
              <span className="text-xs line-through opacity-70">
                {regularPrice.toLocaleString()}
              </span>
              <span>{discountedPrice.toLocaleString()} تومان</span>
            </div>
          ) : (
            <span>{regularPrice.toLocaleString()} تومان</span>
          )}
        </div>
      </div>

      {/* Content area */}
      <div className="flex flex-col justify-between p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
            {name}
          </h3>
          <div className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400">
            <IoBedOutline className="h-4 w-4" />
            <span>{maxCapacity} نفر</span>
          </div>
        </div>

        {/* Description with expand/collapse */}
        <div className="mb-3 text-sm text-slate-600 dark:text-slate-400">
          <p>{isExpanded ? description : truncatedDescription}</p>
          {description.length > 100 && (
            <button
              onClick={toggleDescription}
              className="mt-1 flex items-center text-xs text-amber-600 hover:text-amber-700 dark:text-amber-400"
            >
              {isExpanded ? (
                <>
                  <span>بستن</span>
                  <MdOutlineExpandLess className="ml-1 h-4 w-4" />
                </>
              ) : (
                <>
                  <span>ادامه متن</span>
                  <MdOutlineExpandMore className="ml-1 h-4 w-4" />
                </>
              )}
            </button>
          )}
        </div>

        {/* Action button */}
        <Link
          href={`/cabins/${id}`}
          className="block w-full rounded-md bg-amber-500 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-amber-600"
        >
          رزرو و اطلاعات بیشتر
        </Link>
      </div>
    </div>
  );
}
