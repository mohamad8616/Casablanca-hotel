"use client";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useReservation } from "./ReservationContext";
// import DateObject from "react-date-object";
import { useState, useEffect } from "react";

export default function DateSelector() {
  const { range, setRange } = useReservation();

  // const [values, setValues] = useState([
  //   new DateObject({ calendar: persian }),
  //   new DateObject({ calendar: persian }),
  // ]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    setRange(values);
  }, [values, setRange]);

  return (
    <Calendar
      value={range}
      onChange={setValues}
      range
      rangeHover
      calendar={persian}
      locale={persian_fa}
    />
  );
}
