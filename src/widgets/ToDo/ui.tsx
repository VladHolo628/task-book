import { WidgetWrapper } from "@/shared/ui/WidgetWrapper";
import { Box, List } from "@mui/material";
import { IToDoProps } from "./types";
import { TaskItem } from "./components/TaskItem";

export const ToDo = ({ tasks }: IToDoProps) => {
  const currentCategory = "home";
  return (
    <WidgetWrapper widgetTitle="Tasks">
      <Box>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {tasks.map((task) => {
            if (task.category === currentCategory) {
              return <TaskItem task={task} />;
            }
          })}
        </List>
      </Box>
    </WidgetWrapper>
  );
};
