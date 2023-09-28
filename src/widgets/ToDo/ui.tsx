import { WidgetWrapper } from "@/shared/ui/WidgetWrapper";
import {
  Box,
  List,
  Button,
  Typography,
  ListItem,
  CircularProgress,
} from "@mui/material";

import { TaskItem } from "./components/TaskItem";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { AddTaskModal } from "./components/AddTaskModal";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTasks } from "./api/supabaseApi";

export const ToDo = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const {
    data: tasksData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

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
          {isLoading && (
            <Box display={"flex"} justifyContent={"center"}>
              <CircularProgress />
            </Box>
          )}
          {tasksData?.length === 0 && (
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography>Everything is done :)</Typography>
            </ListItem>
          )}

          {tasksData &&
            tasksData.map((task) => {
              return (
                <ListItem
                  sx={{
                    p: "0",
                  }}
                >
                  <TaskItem task={task} />
                </ListItem>
              );
            })}
          {isError && <Typography>Sorry, mistakes were made</Typography>}
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
