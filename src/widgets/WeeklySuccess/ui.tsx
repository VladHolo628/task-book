import { Box, CircularProgress } from "@mui/material";
import { WidgetWrapper } from "@/shared/ui/WidgetWrapper";
import { StatsCounter } from "@/shared/ui/StatsCounter";
import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../ToDo/api/supabaseApi";

export const WeeklySuccess = () => {
  const tasksQuery = useQuery({
    queryFn: getTasks,
    queryKey: ["tasks"],
  });

  const getTotalTasksCount: () => number = () => {
    if (tasksQuery.data) {
      return tasksQuery.data.length;
    }

    return 0;
  };

  const getDoneTasksCount: () => number = () => {
    if (tasksQuery.data) {
      return tasksQuery.data.filter((task) => task.isDone).length;
    }

    return 0;
  };

  return (
    <WidgetWrapper widgetTitle="To Do Progress">
      {tasksQuery.isLoading ? (
        <CircularProgress />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 2, md: 7 },
          }}
        >
          <StatsCounter title="Added" count={getTotalTasksCount()} />
          <StatsCounter title="Done" count={getDoneTasksCount()} />
        </Box>
      )}
    </WidgetWrapper>
  );
};
