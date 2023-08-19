import { FieldValues } from "react-hook-form";

export interface ITaskForm {
  onSubmit: (data: FieldValues) => void;
  taskName?: string;
  placeholder: string;
  buttonText: string;
}
