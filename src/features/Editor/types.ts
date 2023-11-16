import { JSONContent } from "@tiptap/react";

export interface IEditorProps {
  content: JSON | string;
  onChangeHandler: (param: JSONContent) => void;
}
