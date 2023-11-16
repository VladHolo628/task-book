import { FieldValues } from "react-hook-form";

export interface INoteFormProps {
  noteTitle?: string;
  noteCategory?: string;
  noteBody?: string;
  onSubmit: (data: FieldValues) => void;
}
