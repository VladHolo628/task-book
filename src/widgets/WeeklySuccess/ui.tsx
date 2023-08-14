import { Box } from "@mui/material";
import { WidgetWrapper } from "@/shared/ui/WidgetWrapper";
import { StatsCounter } from "@/shared/ui/StatsCounter";

export const WeeklySuccess = () => {
  return (
    <WidgetWrapper widgetTitle="Weekly Success">
      <Box display={"flex"} gap={7}>
        <StatsCounter title="Created" count={25} />
        <StatsCounter title="Done" count={14} />
        <StatsCounter title="Removed" count={5} />
      </Box>
    </WidgetWrapper>
  );
};
