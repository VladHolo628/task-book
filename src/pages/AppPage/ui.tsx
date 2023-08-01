import { Sidebar } from "@/widgets/Sidebar";
import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router";

export const AppPage = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        gap: { xs: 3, md: 6 },
      }}
    >
      <Box>
        <Sidebar />
      </Box>

      <Box sx={{ py: 5 }}>{<Outlet />}</Box>
    </Stack>
  );
};
