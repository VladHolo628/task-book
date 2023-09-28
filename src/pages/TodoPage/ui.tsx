import { ToDo } from "@/widgets/ToDo";

import { WeeklySuccess } from "@/widgets/WeeklySuccess";
import { Box } from "@mui/material";
import { ClockWidget } from "@/widgets/ClockWidget";

export const TodoPage = () => {
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
        <ToDo />
      </Box>
    </Box>
  );
};
