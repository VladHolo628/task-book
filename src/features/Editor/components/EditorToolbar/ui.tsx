import { IconButton, Stack } from "@mui/material";
import { useCurrentEditor } from "@tiptap/react";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";

export const EditorToolbar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <Stack
      direction={"row"}
      spacing={2}
      paddingBottom={2}
      marginBottom={2}
      justifyContent={"end"}
      sx={{
        borderBottom: 1,
      }}
    >
      <IconButton
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().undo()}
      >
        <UndoOutlinedIcon />
      </IconButton>
      <IconButton
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().redo()}
      >
        <RedoOutlinedIcon />
      </IconButton>
    </Stack>
  );
};
