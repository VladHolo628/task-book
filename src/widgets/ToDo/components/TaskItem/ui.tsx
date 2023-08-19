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
import { useTodoStore } from "../../../../shared/store/todoStore";
import { EditTaskModal } from "../EditTaskModal";

export const TaskItem = ({ task }: ITaskItemProps) => {
  const [editModalOpen, setEditModalOpen] = useState(false);

  const handleEditModalOpen = () => setEditModalOpen(true);
  const handleEditModalClose = () => setEditModalOpen(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const deleteTask = useTodoStore((state) => state.deleteTask);

  const toggleTaskDone = useTodoStore((state) => state.toggleTaskDone);

  const open = Boolean(anchorEl);

  const handleActionsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    deleteTask(task.id);
    handleClose();
  };

  const handleCheck = () => {
    toggleTaskDone(task.id);
  };

  const handleEditButtonClick = () => {
    handleEditModalOpen();
    handleClose();
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
        <MenuItem onClick={handleEditButtonClick}>
          <Tooltip title="Edit Task">
            <IconButton aria-label="edit task">
              <EditIcon />
            </IconButton>
          </Tooltip>
        </MenuItem>

        <MenuItem onClick={handleDelete}>
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
        alignItems: "flex-start",
        justifyContent: "space-between",
      }}
    >
      <FormControlLabel
        sx={{
          textDecoration: task.done ? "line-through" : "none",
          cursor: "pointer",

          "&.MuiFormControlLabel-root": {
            alignItems: "flex-start",
            wordBreak: "break-word",
          },
        }}
        value={task.name}
        control={<Checkbox checked={task.done} onChange={handleCheck} />}
        label={task.name}
      />

      <Box>
        <Tooltip title="actions">
          <IconButton onClick={handleActionsClick}>
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
        {taskItemActionsMenu}
      </Box>
      <EditTaskModal
        open={editModalOpen}
        onClose={handleEditModalClose}
        taskId={task.id}
        taskName={task.name}
      />
    </ListItem>
  );
};
