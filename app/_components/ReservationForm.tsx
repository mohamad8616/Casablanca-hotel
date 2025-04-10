"use client";
import { Cabin } from "@/app/_lib/dataType";

const inputClass =
  "rounded-full border-3 border-stone-700/50 bg-stone-100 px-3 py-1 w-1/3";

export default function ReservationForm({ cabin }: { cabin: Cabin }) {
  // Ensure maxCapacity is a number and has a default value
  const maxCapacity = cabin?.maxCapacity;

  console.log("maxCapacity:", maxCapacity);
  console.log(
    "Options:",
    Array.from({ length: maxCapacity }, (_, i) => i + 1),
  );

  return (
    <form className="w-full space-y-6 bg-stone-50 p-2">
      <div className="flex justify-between">
        <label htmlFor="numGuests">تعداد مهمان</label>
        <select
          id="numGuests"
          name="numGuests"
          className={`${inputClass} cursor-pointer`}
        >
          {Array.from({ length: maxCapacity }, (_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-between">
        <label htmlFor="description">توضیحات </label>
        <textarea
          id="description"
          name="description"
          className={inputClass}
          placeholder="توضیحات"
        />
      </div>
    </form>
  );
}
