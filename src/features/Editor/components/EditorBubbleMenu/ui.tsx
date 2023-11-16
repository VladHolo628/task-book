import { TwitterPicker } from "react-color";
import { BubbleMenu, useCurrentEditor } from "@tiptap/react";
import {
  IconButton,
  Popover,
  Stack,
  ToggleButton,
  Tooltip,
  Typography,
} from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { useState } from "react";

const colors = ["#000", "#FF6900", "#00D084", "#0693E3", "#EB144C", "#9900EF"];

export const EditorBubbleMenu = () => {
  const { editor } = useCurrentEditor();

  const [popupAnchorEl, setPopupAnchorEl] = useState<HTMLDivElement | null>(
    null
  );

  const handlePopupClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (popupAnchorEl) {
      setPopupAnchorEl(null);

      return;
    }

    setPopupAnchorEl(event.currentTarget);
  };

  const handlePopupClose = () => {
    setPopupAnchorEl(null);
    editor?.commands.focus("end", { scrollIntoView: true });
  };

  const open = Boolean(popupAnchorEl);

  if (!editor) {
    return null;
  }

  return (
    <BubbleMenu>
      <Stack direction={"row"} spacing={4} alignItems={"center"}>
        <Stack
          direction={"row"}
          gap={1}
          maxWidth={"100px"}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          <ToggleButton
            size="small"
            value={"bold"}
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
          >
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton
            size="small"
            value={"italic"}
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
          >
            <FormatItalicIcon />
          </ToggleButton>

          <ToggleButton
            size="small"
            value={"bullet-list"}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            disabled={!editor.can().chain().focus().toggleBulletList().run()}
          >
            <FormatListBulletedIcon />
          </ToggleButton>

          <ToggleButton
            size="small"
            value={"h1"}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            disabled={
              !editor.can().chain().focus().toggleHeading({ level: 1 }).run()
            }
          >
            <Typography fontWeight={"bold"}>H1</Typography>
          </ToggleButton>
          <ToggleButton
            size="small"
            value={"h2"}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            disabled={
              !editor.can().chain().focus().toggleHeading({ level: 2 }).run()
            }
          >
            <Typography fontWeight={"bold"}>H2</Typography>
          </ToggleButton>
          <ToggleButton
            color="primary"
            size="small"
            value={"h3"}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            disabled={
              !editor.can().chain().focus().toggleHeading({ level: 3 }).run()
            }
          >
            <Typography fontWeight={"bold"}>H3</Typography>
          </ToggleButton>
        </Stack>

        <Tooltip
          title="Color"
          onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
            handlePopupClick(event)
          }
        >
          <IconButton>
            <ColorLensIcon color="primary" />
          </IconButton>
        </Tooltip>

        <Popover
          open={open}
          anchorEl={popupAnchorEl}
          onClose={handlePopupClose}
          sx={{
            zIndex: "100",
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <TwitterPicker
            colors={colors}
            triangle={"hide"}
            onChange={(color) =>
              editor.chain().focus().setColor(color.hex).run()
            }
          />
        </Popover>
      </Stack>
    </BubbleMenu>
  );
};
