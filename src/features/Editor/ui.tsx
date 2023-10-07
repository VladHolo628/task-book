import { Paper } from "@mui/material";
import EditorJS from "@editorjs/editorjs";
import DragDrop from "editorjs-drag-drop";
import Undo from "editorjs-undo";

import { tools } from "./tools";

export const Editor = ({ data }) => {
  const editor = new EditorJS({
    holder: "editorjs",
    onReady: () => {
      new DragDrop(editor);
      new Undo(editor);
    },
    tools: tools,
    data,
  });
  return (
    <Paper
      sx={{
        p: 2,
      }}
    >
      <div id={"editorjs"}></div>
    </Paper>
  );
};
