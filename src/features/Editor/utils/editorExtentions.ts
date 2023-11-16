import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";

export const extensions = [
  TextStyle,
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: false,
    },
    orderedList: {
      keepMarks: false,
      keepAttributes: false,
    },
    heading: {
      levels: [1, 2, 3],
    },
  }),
];
