import { useState } from "react";
import {
  ListItem,
  Checkbox,
  FormControlLabel,
  Box,
  Menu,
  IconButton,
  Tooltip,
  MenuItem,
  MenuList,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ITaskItemProps } from "./types";

export const TaskItem = ({ task }: ITaskItemProps) => {
  const [isDone, setIsDone] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDone(event.target.checked);
  };

  const taskItemActionsMenu = (
    <Menu
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      <MenuList
        dense
        sx={{
          display: "flex",
          p: 0,
        }}
      >
        <MenuItem onClick={handleClose}>
          <Tooltip title="Edit Task">
            <IconButton aria-label="edit task">
              <EditIcon />
            </IconButton>
          </Tooltip>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Tooltip title="Delete Task">
            <IconButton aria-label="delete task">
              <DeleteIcon color="error" />
            </IconButton>
          </Tooltip>
        </MenuItem>
      </MenuList>
    </Menu>
  );

  return (
    <ListItem
      key={task.id}
      sx={{
        width: "100%",
        border: 1,
        borderRadius: 2,
        borderColor: "#282846",
        display: "flex",
        padding: { xs: 1, sm: "2 1" },
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <FormControlLabel
        sx={{
          textDecoration: isDone ? "line-through" : "none",
          cursor: "pointer",
          mr: 2,
        }}
        value={task.name}
        control={<Checkbox checked={isDone} onChange={handleCheck} />}
        label={task.name}
      />

      <Box>
        <Tooltip title="actions">
          <IconButton onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
        {taskItemActionsMenu}
      </Box>
    </ListItem>
  );
};
