'use server'

import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth"
import { supabase } from "./supabase";

export async function SignInAction() {
    return await signIn('google',{redirectTo:'/account'})
}
export async function signOutAction() {
    return await signOut({redirectTo:'/'})
}

export async function DeleteBooking(bookingId:string|number) {
  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    console.error("Error deleting booking:", error);
      throw new Error("Booking could not be deleted");
  }
  revalidatePath('account/reservated','page');
}
