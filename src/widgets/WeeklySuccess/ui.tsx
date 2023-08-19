import { Box } from "@mui/material";
import { WidgetWrapper } from "@/shared/ui/WidgetWrapper";
import { StatsCounter } from "@/shared/ui/StatsCounter";
import { useTodoStore } from "@/shared/store/todoStore";

export const WeeklySuccess = () => {
  const tasks = useTodoStore((state) => state.tasks);

  const completedTasks = tasks.filter((task) => task.done);
  return (
    <WidgetWrapper widgetTitle="To Do Progress">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 2, md: 7 },
        }}
      >
        <StatsCounter title="Added" count={tasks.length} />
        <StatsCounter title="Done" count={completedTasks.length} />
      </Box>
    </WidgetWrapper>
  );
};
