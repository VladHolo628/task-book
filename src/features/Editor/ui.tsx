import { Box } from "@mui/material";
import { EditorProvider } from "@tiptap/react";

import { EditorToolbar } from "./components/EditorToolbar";
import { EditorBubbleMenu } from "./components/EditorBubbleMenu";
import "./styles/index.css";
import { IEditorProps } from "./types";
import { extensions } from "./utils/editorExtentions";

export const Editor = ({ content, onChangeHandler }: IEditorProps) => {
  return (
    <Box
      minHeight={"500px"}
      border={1}
      borderRadius={2}
      p={2}
      sx={{
        zIndex: "100000",
      }}
    >
      <EditorProvider
        autofocus
        extensions={extensions}
        content={content}
        onUpdate={({ editor }) => onChangeHandler(editor.getJSON())}
        slotBefore={<EditorToolbar />}
      >
        <EditorBubbleMenu />
      </EditorProvider>
    </Box>
  );
};
