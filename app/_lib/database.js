import { supabase } from "./supabase";

export async function getCabins() {
  let { data: cabins, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error("Error fetching cabins:", error);
    return null; // Handle the error appropriately
  }
  return cabins;
}
export async function getCabinByID(id) {
  let { data: cabin, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", id); // Filter by the provided id

  if (error) {
    console.error("Error fetching cabin:", error);
    return null; // Handle the error appropriately
  }

  return cabin;
}

export async function createGuest(newGuest) {
  // console.log(newGuest);
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
