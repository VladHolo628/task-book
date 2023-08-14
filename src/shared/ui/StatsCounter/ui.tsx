import { Box, Typography } from "@mui/material";
import { IStatsCounterProps } from "./types";

export const StatsCounter = ({ title, count }: IStatsCounterProps) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography marginBottom={1}>{title}</Typography>
      <Box
        border={2}
        borderColor={"primary.main"}
        borderRadius={"50%"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: 120,
          height: 120,
        }}
      >
        <Typography color={"primary.main"} fontSize={36}>
          {count}
        </Typography>
        <Typography>Tasks</Typography>
      </Box>
    </Box>
  );
};
