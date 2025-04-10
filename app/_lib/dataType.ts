

export interface Session {
  user: {
    name: string;
    email: string;
    image: string;
  };
  expires: string; // ISO 8601 date string
  guestId: number;
}

export interface Reservation {
  id: string;
  created_at: string;
  startDate: string ;
  endDate: string;
  image: string;
  cabinId: number;
  numGuests?: string;
  isPaid?: boolean;
  hasBreakfast?: boolean;
  status?: string;
  cabinPrice: number;
  extraPrice?: number;
  totalPrice: number;
  numNights?: number;
}
export interface Cabin  {
    id: number
    created_at: string
    name: string;
    maxCapacity: number;
    regularPrice: number;
    discount: number;
    description: string;
    image: string;
  }