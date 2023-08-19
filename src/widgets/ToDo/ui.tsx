import { WidgetWrapper } from "@/shared/ui/WidgetWrapper";
import { Box, List, Button, Typography, ListItem } from "@mui/material";
import { IToDoProps } from "./types";
import { TaskItem } from "./components/TaskItem";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { AddTaskModal } from "./components/AddTaskModal";
import { useState } from "react";

export const ToDo = ({ tasks }: IToDoProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <WidgetWrapper widgetTitle="Tasks">
      <Box>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            mb: 4,
          }}
        >
          {tasks.length !== 0 ? (
            tasks.map((task) => {
              return (
                <ListItem
                  sx={{
                    p: "0",
                  }}
                >
                  <TaskItem task={task} />
                </ListItem>
              );
            })
          ) : (
            <ListItem
              sx={{
                width: "100%",
                justifyContent: "center",
              }}
            >
              <Typography textAlign={"center"} variant="body2">
                No Tasks Yet ...
              </Typography>
            </ListItem>
          )}
        </List>
        <Box textAlign={"center"}>
          <Button
            variant="contained"
            startIcon={<AddCircleOutlineIcon />}
            onClick={handleModalOpen}
          >
            New Task
          </Button>
        </Box>
        <AddTaskModal open={modalOpen} onClose={handleModalClose} />
      </Box>
    </WidgetWrapper>
  );
};
