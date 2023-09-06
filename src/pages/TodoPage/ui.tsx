import { ToDo } from "@/widgets/ToDo";
import { useTodoStore } from "@/shared/store/todoStore";
import { WeeklySuccess } from "@/widgets/WeeklySuccess";
import { Box } from "@mui/material";
import { ClockWidget } from "@/widgets/ClockWidget";

export const TodoPage = () => {
  const tasks = useTodoStore((state) => state.tasks);
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
        }}
      >
        <WeeklySuccess />
        <ClockWidget />
      </Box>

      <Box width={"100%"}>
        <ToDo tasks={tasks} />
      </Box>
    </Box>
  );
};
