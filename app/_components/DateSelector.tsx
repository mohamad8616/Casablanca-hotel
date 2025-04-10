"use client";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useReservation } from "./ReservationContext";
import DateObject from "react-date-object";

export default function DateSelector() {
  const { startDate, endDate, setStartDate, setEndDate, clearDates } =
    useReservation();

  const handleDateChange = (dates: DateObject[]) => {
    if (dates && dates.length === 2) {
      setStartDate(dates[0].format());
      setEndDate(dates[1].format());
    } else {
      clearDates();
    }
  };

  return (
    <Calendar
      value={[startDate, endDate]}
      onChange={handleDateChange}
      range
      rangeHover
      calendar={persian}
      locale={persian_fa}
    />
  );
}
