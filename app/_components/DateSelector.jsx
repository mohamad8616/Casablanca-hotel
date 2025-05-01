"use client";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useReservation } from "@/app/_context/ReservationContext";
// import { isPast } from "date-fns-jalali";
// import DateObject from "react-date-object";
import { useState, useEffect } from "react";

export default function DateSelector() {
  const { range, setRange } = useReservation();

  const [values, setValues] = useState([]);

  useEffect(() => {
    setRange(values);
  }, [values, setRange]);

  // Convert date to Persian format for comparison
  const isDateDisabled = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date.toDate() < today;
  };

  return (
    <Calendar
      value={range}
      onChange={setValues}
      months={2}
      range
      rangeHover
      calendar={persian}
      locale={persian_fa}
      // disabled={isDateDisabled}
      minDate={new Date()} // Set minimum date to today
      className="bg-white dark:bg-stone-800"
      containerClassName="bg-white dark:bg-stone-800"
    />
  );
}
