import { Modal, Box, IconButton, Typography } from "@mui/material";
import InsertCommentIcon from "@mui/icons-material/InsertComment";

import CloseIcon from "@mui/icons-material/Close";
import { FieldValues } from "react-hook-form";
import { useTodoStore } from "@/shared/store/todoStore";
import { IEditModalProps } from "./types";
import { TaskForm } from "../TaskForm";

export const EditTaskModal = ({
  open,
  onClose,
  taskId,
  taskName,
}: IEditModalProps) => {
  const editTaskName = useTodoStore((state) => state.editTaskName);

  const onSubmit = (data: FieldValues) => {
    editTaskName(taskId, data.taskName);
    onClose();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", sm: "70%", md: 400 },

    bgcolor: "background.paper",
    borderRadius: 1,
    boxShadow: 24,
    p: { xs: 2, md: 4 },
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
            mb: 4,
          }}
        >
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
            display={"flex"}
          >
            <InsertCommentIcon color="primary" />
            <Typography variant="h6">Edit task</Typography>
          </Box>
        </Box>
        <TaskForm
          placeholder="Change task to ..."
          onSubmit={onSubmit}
          taskName={taskName}
          buttonText="Edit"
        />
      </Box>
    </Modal>
  );
};
