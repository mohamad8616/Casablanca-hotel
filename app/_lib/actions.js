"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { redirect } from "next/navigation";

export async function SignInAction() {
  return await signIn("google", { redirectTo: "/account" });
}
export async function signOutAction() {
  return await signOut({ redirectTo: "/" });
}

export async function DeleteBooking(bookingId) {
  const session = await auth();
  if (!session) {
    throw new Error("Unauthorized users could not create a booking");
  }

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    console.error("Error deleting booking:", error);
    throw new Error("Booking could not be deleted");
  }
  revalidatePath("account/reservated", "page");
}

export async function createBooking(bookingData, formData) {
  const session = await auth();
  if (!session) {
    throw new Error("Unauthorized users could not create a booking");
  }

  const createBookingData = {
    ...bookingData,
    numGuests: formData.get("numGuests"),
    observations: formData.get("observations"),
    guestId: session.guestId,
    hasBreakfast: false,
    isPaid: false,
    status: "unconfirmed",
    extraPrice: 0,
  };
  console.log(createBookingData);
  const { error } = await supabase.from("bookings").insert([createBookingData]);

  if (error) {
    console.error("Error creating booking:", error);
    throw new Error("Booking could not be created");
  }
  revalidatePath("account/reservated", "page");
  redirect("/account/bvihbsdinvsdknvohnzdbvsklmvmfnbfbjfdub");
}

export async function updateBooking(bookingData, formData) {
  // AUTHENTICATION
  const session = await auth();
  if (!session) {
    throw new Error("Unauthorized users could not create a booking");
  }
  console.log("from actions updateboking:", formData);
  const { bookingId, cabinId, numNights, startDate, endDate } = bookingData;
  // VALIDATION
  const createBookingData = {
    cabinId,
    startDate,
    endDate,
    numNights,
    numGuests: formData.get("numGuests"),
    guestId: session.guestId,
    hasBreakfast: formData.get("hasBreakfast"),
    status: formData.get("status"),
    isPaid: formData.get("isPaid"),
  };
  console.log("from actions updateboking:", createBookingData);

  // UPDATE BOOKING

  const { error } = await supabase
    .from("bookings")
    .update(createBookingData)
    .eq("id", bookingId);

  if (error) {
    console.error("Error updating booking:", error);
    throw new Error("Booking could not be updated");
  }
  revalidatePath("account/reservated", "page");
}
