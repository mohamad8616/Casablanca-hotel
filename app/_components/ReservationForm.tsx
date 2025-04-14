"use client";
import { Cabin } from "@/app/_lib/dataType";

import DateSelector from "./DateSelector";
import { differenceInCalendarDays } from "date-fns-jalali";
import { useReservation } from "./ReservationContext";
import { createBooking } from "../_lib/actions";
import { useState } from "react";
import Modal from "./Modal";

const inputClass =
  "rounded-md border-3 border-stone-700/50 bg-stone-100 px-3 py-1 ";

// Create a wrapper function to match the expected parameter structure

export default function ReservationForm({ cabin }: { cabin: Cabin }) {
  const [showCalendar, setShowCalendar] = useState(false);
  // Ensure maxCapacity is a number and has a default value

  const { maxCapacity, regularPrice, discount, id: cabinId } = cabin;
  const { range, resetRange } = useReservation();

  const numDays: number | string =
    range.length > 1
      ? Math.abs(differenceInCalendarDays(range[0], range[1]))
      : "انتخاب نشده";

  const rial = "text-xs";

  const totalPrice: number =
    typeof numDays === "number" ? numDays * regularPrice : 0;

  const startDate = range[0];
  const endDate = range[1];

  const bookingData = {
    cabinId,
    startDate: startDate,
    endDate: endDate,
    totalPrice,
    numNights: numDays,
  };
  const createBookingwithData = createBooking.bind(null, bookingData);
  return (
    <>
      <section
        id="reservation"
        className="mx-auto hidden h-auto flex-col items-center justify-between gap-6 px-3 py-14 shadow-2xl shadow-stone-500/20 md:flex md:w-full lg:w-11/12 lg:px-6"
      >
        <form
          action={createBookingwithData}
          className="h-full w-full space-y-6 bg-stone-50 p-2"
        >
          <section className="flex h-full w-3/3 items-start justify-between gap-4">
            <div className="flex h-[300px] w-full justify-start rounded-md bg-stone-50 p-4">
              <div className="flex h-full w-full flex-col items-center justify-between">
                <div className="flex w-full justify-between gap-4 rounded-md bg-slate-800 px-2 py-4 text-slate-200">
                  <span>
                    از:{" "}
                    {startDate?.format?.("YYYY/MM/DD") || (
                      <button className="font-semibold">..../../..</button>
                    )}
                  </span>
                  <span>
                    تا:{"    "}
                    {endDate?.format?.("YYYY/MM/DD") || (
                      <button className="font-semibold">..../../..</button>
                    )}
                  </span>
                </div>
                <p className="flex w-full justify-between">
                  تعداد روز ها:
                  <span>{numDays} روز</span>
                </p>
                <div className="flex w-full justify-between">
                  <label htmlFor="numGuests">تعداد مهمان</label>
                  <select
                    id="numGuests"
                    required
                    name="numGuests"
                    className={`${inputClass} w-16 cursor-pointer border-none px-0.5 text-center`}
                  >
                    {Array.from({ length: maxCapacity }, (_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex w-full flex-col justify-between space-y-3">
                  <p className="flex w-full justify-between">
                    <span> قیمت بر حسب روز: </span>
                    <span>
                      {totalPrice ? totalPrice : ""}{" "}
                      <span className={rial}>ریال </span>
                    </span>
                  </p>
                  <p className="flex w-full justify-between">
                    تخفیف:{" "}
                    <span>
                      {discount ? discount : ""}
                      <span className={rial}> ریال </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <DateSelector />
          </section>
          <div className="flex items-center justify-between">
            <label htmlFor="observations">توضیحات </label>
            <textarea
              id="observations"
              name="observations"
              className={`${inputClass} h-20 w-2/5`}
              placeholder="توضیحات"
            />
          </div>
          <div className="flex w-full items-center justify-between rounded-md bg-yellow-500 px-4 py-5 font-bold">
            <div className="flex gap-2 text-lg">
              <span className="tracking-wide">قیمت نهایی با تخفیف:</span>
              <span>
                {totalPrice ? totalPrice - discount : ""}
                <span className={rial}> ریال </span>
              </span>
            </div>
            <div className="flex gap-2">
              <button
                className="cursor-pointer rounded-md border-2 border-stone-700/60 px-2 py-1 text-xs text-stone-600 duration-200 hover:bg-stone-800/70 hover:text-stone-100"
                onClick={() => resetRange()}
              >
                حذف رزرو
              </button>

              <button
                type="submit"
                className="focus:ring-opacity-50 cursor-pointer rounded-md bg-blue-800 px-4 py-2 font-light text-white duration-200 hover:bg-blue-600 focus:bg-stone-800 focus:ring-2 focus:ring-stone-800 focus:outline-none disabled:cursor-default disabled:bg-stone-400 disabled:text-stone-700"
                disabled={!startDate || !endDate}
              >
                رزرو
              </button>
            </div>
          </div>
        </form>
      </section>
      <section
        id="reservation"
        className="relative mx-auto h-auto w-full flex-col items-center justify-between px-2 py-6 md:hidden"
      >
        <form
          action={createBookingwithData}
          className="h-full w-full space-y-6 bg-stone-50 p-2"
        >
          <section className="flex h-full w-3/3 items-start justify-between gap-4">
            <div className="flex h-[300px] w-full justify-start rounded-md bg-stone-50 p-4">
              <div className="flex h-full w-full flex-col items-center justify-between">
                <div className="flex w-full justify-between gap-4">
                  <span>
                    از:{" "}
                    {startDate?.format?.("YYYY/MM/DD") || (
                      <span
                        onClick={() => setShowCalendar(true)}
                        className="rounded-md border-2 px-2 py-0.5 font-semibold text-slate-500"
                      >
                        ..../../..
                      </span>
                    )}
                  </span>
                  <span>
                    تا:{"    "}
                    {endDate?.format?.("YYYY/MM/DD") || (
                      <span
                        onClick={() => setShowCalendar(true)}
                        className="rounded-md border-2 px-2 py-0.5 font-semibold text-slate-500"
                      >
                        ..../../..
                      </span>
                    )}
                  </span>
                </div>
                <p className="flex w-full justify-between">
                  تعداد روز ها:
                  <span>{numDays} روز</span>
                </p>
                <div className="flex w-full justify-between">
                  <label htmlFor="numGuests">تعداد مهمان</label>
                  <select
                    id="numGuests"
                    required
                    name="numGuests"
                    className={`${inputClass} w-16 cursor-pointer border-none px-0.5 text-center`}
                  >
                    {Array.from({ length: maxCapacity }, (_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex w-full flex-col justify-between space-y-3">
                  <p className="flex w-full justify-between">
                    <span> قیمت بر حسب روز: </span>
                    <span>
                      {totalPrice ? totalPrice : ""}{" "}
                      <span className={rial}>ریال </span>
                    </span>
                  </p>
                  <p className="flex w-full justify-between">
                    تخفیف:{" "}
                    <span>
                      {discount ? discount : ""}
                      <span className={rial}> ریال </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {showCalendar && (
              <Modal setShowCalendar={setShowCalendar}>
                <DateSelector />
                <span
                  onClick={() => setShowCalendar(false)}
                  className="rounded-md border-1 border-stone-800 px-2 py-1 text-sm text-stone-800 duration-200 hover:border-stone-600 hover:text-stone-600"
                >
                  تایید و خروج &rarr;
                </span>
              </Modal>
            )}
          </section>
          <div className="flex justify-between">
            <label htmlFor="observations">توضیحات </label>
            <textarea
              id="observations"
              name="observations"
              className={`${inputClass} h-20 w-2/5`}
              placeholder="توضیحات"
            />
          </div>
          <div className="flex w-full items-center justify-between rounded-md bg-yellow-500 px-4 py-5 font-bold">
            <div className="flex gap-2 text-lg">
              <span className="tracking-wide">قیمت نهایی با تخفیف:</span>
              <span>
                {totalPrice ? totalPrice - discount : ""}
                <span className={rial}> ریال </span>
              </span>
            </div>
            <div className="flex gap-2">
              <button
                type="reset"
                className="cursor-pointer rounded-md border-2 border-stone-700/60 px-2 py-1 text-xs text-stone-600 duration-200 hover:bg-stone-800/70 hover:text-stone-100"
                onClick={() => resetRange()}
              >
                حذف رزرو
              </button>

              <button
                type="submit"
                className="focus:ring-opacity-50 cursor-pointer rounded-md bg-blue-800 px-4 py-2 font-light text-white duration-200 hover:bg-blue-600 focus:bg-stone-800 focus:ring-2 focus:ring-stone-800 focus:outline-none disabled:cursor-default disabled:bg-stone-400 disabled:text-stone-700"
                disabled={!startDate || !endDate}
              >
                رزرو
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
