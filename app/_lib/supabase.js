import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

// Check if environment variables are set
if (!supabaseUrl || !supabaseKey) {
  console.error("Supabase environment variables are missing!");
  console.error("NEXT_PUBLIC_SUPABASE_URL:", supabaseUrl ? "Set" : "Missing");
  console.error("NEXT_PUBLIC_SUPABASE_KEY:", supabaseKey ? "Set" : "Missing");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

// Test the connection
supabase
  .from("cabins")
  .select("count")
  .then(({ error }) => {
    if (error) {
      console.error("Supabase connection test failed:", error);
    } else {
      console.log("Supabase connection test successful");
    }
  });
