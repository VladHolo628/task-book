import { supabase } from "@/app/providers/supabase";
import { extensions } from "@/features/Editor/utils/editorExtentions";
import { generateHTML } from "@tiptap/react";
import { FieldValues } from "react-hook-form";

export const getAllNotes = async () => {
  const { data } = await supabase.from("Notes").select("*");

  return data;
};

export const getSpecificNote = async () => {
  const { data } = await supabase.from("Notes").select("*");

  return data;
};

export const addNote = async ({ title, category, note }: FieldValues) => {
  const noteText = generateHTML(note, extensions);
  const extractedNoteText = noteText.replace(/<[^>]+>/g, "");

  const searchData = (title + category.value + extractedNoteText).replace(
    /\s+/g,
    ""
  );

  const { data, error } = await supabase
    .from("Notes")
    .upsert([{ noteTitle: title, category, noteBody: note, searchData }]);

  if (error) return error;

  return data;
};

export const updateNote = async ({
  title,
  category,
  note,
  id,
}: FieldValues) => {
  const { data, error } = await supabase
    .from("Notes")
    .update({ noteTitle: title, category, noteBody: note })
    .eq("id", id);

  if (error) return error;

  return data;
};

export const deleteNote = async (id: number) => {
  const { error } = await supabase.from("Notes").delete().eq("id", id);

  if (error) return error;
};
