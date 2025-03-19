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
