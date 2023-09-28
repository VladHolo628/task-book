import { supabase } from "@/app/providers/supabase";

export const getAllNotes = async () => {
  const { data } = await supabase.from("Notes").select("*");

  return data;
};

export const getSpecificNote = async () => {
  const { data } = await supabase.from("Notes").select("*");

  return data;
};
