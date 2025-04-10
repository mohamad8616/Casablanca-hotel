"use client";
import React, { createContext, useState, useContext } from "react";

// Create the ReservationContext
const ReservationContext = createContext();

// Create a provider component
export const ReservationProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const clearDates = () => {
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <ReservationContext.Provider
      value={{ startDate, endDate, setStartDate, setEndDate, clearDates }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

// Custom hook to use the ReservationContext
export const useReservation = () => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }
  return context;
};
