import { Box, IconButton, Modal, Typography } from "@mui/material";
import { IModalProps } from "./types";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import CloseIcon from "@mui/icons-material/Close";
import { FieldValues } from "react-hook-form";
import { TaskForm } from "../TaskForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTask } from "../../api/supabaseApi";

export const AddTaskModal = ({ open, onClose }: IModalProps) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (taskName: string) => {
      return addTask(taskName);
    },
    onSuccess: () => queryClient.invalidateQueries(["tasks"]),
  });

  const onSubmit = (data: FieldValues) => {
    mutation.mutate(data.taskName);
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
    <Modal open={open} onClose={onClose} aria-labelledby="Add Task Modal">
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
            <Typography variant="h6">Add New Task</Typography>
          </Box>
        </Box>
        <TaskForm
          placeholder="I Need To ..."
          buttonText="Add"
          onSubmit={onSubmit}
        />
      </Box>
    </Modal>
  );
};
