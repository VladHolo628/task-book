import { supabase } from "@/app/providers/supabase";

export const getAllCategories = async () => {
  const { data } = await supabase.from("Caregories").select("*");

  return data;
};

export const addNewCategory = async (label: string, value: string) => {
  const { data } = await supabase.from("Caregories").insert([{ label, value }]);

  return data;
};

export const deleteCategory = async (value: string) => {
  return await supabase.from("Caregories").delete().eq("value", value);
};
