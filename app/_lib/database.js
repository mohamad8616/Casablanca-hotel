import { supabase } from "./supabase";

export async function getBookings(guestId) {
  let { data: bookings, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("guestId", guestId);
  if (error) {
    console.error("Error fetching bookings:", error);
    return null; // Handle the error appropriately
  }
  return bookings;
}

export async function getCabins() {
  let { data: cabins, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error("Error fetching cabins:", error);
    return null; // Handle the error appropriately
  }
  return cabins;
}

export async function getCabinByID(id) {
  console.log("Fetching cabin with ID:", id);

  // Add retry logic
  let retries = 3;
  let lastError = null;

  while (retries > 0) {
    try {
      let { data: cabin, error } = await supabase
        .from("cabins")
        .select("*")
        .eq("id", id); // Filter by the provided id

      if (error) {
        console.error(
          `Error fetching cabin (attempt ${4 - retries}/3):`,
          error,
        );
        lastError = error;
        retries--;
        // Wait before retrying (exponential backoff)
        await new Promise((resolve) =>
          setTimeout(resolve, 1000 * (4 - retries)),
        );
        continue;
      }

      console.log("Cabin data received:", cabin);
      return cabin;
    } catch (err) {
      console.error(
        `Exception fetching cabin (attempt ${4 - retries}/3):`,
        err,
      );
      lastError = err;
      retries--;
      // Wait before retrying (exponential backoff)
      await new Promise((resolve) => setTimeout(resolve, 1000 * (4 - retries)));
    }
  }

  console.error("All retry attempts failed. Last error:", lastError);
  return null;
}

export async function createGuest(newGuest) {
  const { data, error } = await supabase
    .from("guests")
    .insert([newGuest])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Guest could not be created");
  }

  return data;
}

// Guests are uniquely identified by their email address
export async function getGuest(email) {
  const { data } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email)
    .single();

  // No error here! We handle the possibility of no guest in the sign in callback
  return data;
}
