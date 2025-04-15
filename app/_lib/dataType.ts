export interface Session {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
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
  observations?: string;
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
  export interface CabinCard {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  image: string | null;
}
export interface LargeHeaderProps {
  session: {
    user?: {
      image?: string;
      name?: string;
      email: string;
      id: number;
    };
  } | null;
}