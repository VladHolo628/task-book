import { useState, useEffect } from "react";
import { WidgetWrapper } from "@/shared/ui/WidgetWrapper";
import { format, getDayOfYear, getYear } from "date-fns";
import { Box, LinearProgress, Typography } from "@mui/material";

export const ClockWidget = () => {
  const date = new Date();

  const dateVariants = {
    year: getYear(date),
    month: format(date, "MMMM"),
    day: format(date, "do"),
    time: format(date, "HH:mm"),
  };

  const [currentTime, setCurrentTime] = useState(dateVariants.time);

  const getPercentageOfYear = () => {
    const currentDayOfYear = getDayOfYear(date);
    const percentage = Math.round((currentDayOfYear / 365) * 100);

    return percentage;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(format(date, "HH:mm:ss"));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [date]);

  return (
    <WidgetWrapper widgetTitle="Time">
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Box display={"flex"} justifyContent={"space-between"} mb={5}>
          <Box display={"flex"} gap={1}>
            <Typography variant="h6">{dateVariants.day}</Typography>
            <Typography
              variant="body2"
              color={"primary"}
              textTransform={"uppercase"}
            >
              of {dateVariants.month}
            </Typography>
          </Box>

          <Typography variant="h5">{currentTime}</Typography>
        </Box>
        <Box>
          <Typography color={"primary"} variant="h5" textAlign={"center"}>
            {dateVariants.year}
          </Typography>
          <Box display={"flex"} alignItems={"center"}>
            <Box width={"100%"} mr={1}>
              <LinearProgress
                variant="determinate"
                value={getPercentageOfYear()}
              />
            </Box>
            <Box>
              <Typography>{`${getPercentageOfYear()}%`} </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </WidgetWrapper>
  );
};
