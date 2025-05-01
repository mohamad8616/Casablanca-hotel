
"use client";

import { createContext, ReactNode, useContext, useState } from "react";

const initialState: number[] = [];

type ReservationContextType = {
  range: number[];
  setRange: React.Dispatch<React.SetStateAction<number[]>>;
  resetRange: () => void;
};

const ReservationContext = createContext<ReservationContextType | null>(null);

type ReservationProviderProps = {
  children: ReactNode;
};

function ReservationProvider({ children }: ReservationProviderProps) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);

  const ctx = {
    range,
    setRange,
    resetRange,
  };
  return (
    <ReservationContext.Provider value={ctx}>
      {children}
    </ReservationContext.Provider>
  );
}
export default ReservationProvider;

export function useReservation() {
  const context = useContext(ReservationContext);
  if (!context) throw new Error("The context used out of the provider");
  return context;
}
