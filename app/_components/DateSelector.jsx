"use client";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useReservation } from "./ReservationContext";
import { useState } from "react";
import DateObject from "react-date-object";

export default function DateSelector({ type }) {
  const { startDate, endDate, setStartDate, setEndDate, clearDates } =
    useReservation();
  // if (type === "start") {
  //   return (
  //     <Calendar
  //       value={startDate}
  //       onChange={setStartDate}
  //       calendar={persian}
  //       locale={persian_fa}
  //       calendarPosition="bottom-right"
  //     />
  //   );
  // }
  // if (type === "end") {
  //   return (
  //     <Calendar
  //       value={endDate}
  //       onChange={setEndDate}
  //       calendar={persian}
  //       locale={persian_fa}
  //       calendarPosition="bottom-right"
  //     />
  //   );
  // }

  const [values, setValues] = useState([
    new DateObject({ calendar: persian }),
    new DateObject({ calendar: persian }),
  ]);

  return (
    <Calendar
      value={values}
      onChange={setValues}
      range
      rangeHover
      calendar={persian}
      locale={persian_fa}
      calendarPosition="bottom-right"
    />
  );
}
