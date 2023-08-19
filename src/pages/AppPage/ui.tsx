import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Sidebar } from "@/widgets/Sidebar";
import {
  Box,
  Stack,
  Container,
  IconButton,
  AppBar,
  Toolbar,
  Avatar,
} from "@mui/material";
import { Outlet } from "react-router";
import Logo from "@/shared/assets/logo.svg";

export const AppPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <AppBar
        sx={{
          display: { sx: "flex", md: "none" },
          mb: "200",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            aria-label="open drawer"
            sx={{
              color: "white",
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <img src={Logo} />
          <Avatar>V</Avatar>
        </Toolbar>
      </AppBar>

      <Stack direction={"row"}>
        <Box>
          <Sidebar toggleOpen={handleDrawerToggle} isOpen={isSidebarOpen} />
        </Box>

        <Container
          sx={{
            p: { sm: 2 },
            py: { xs: 1, sm: 2 },
            mt: { xs: 8, md: 0 },
            overflowY: { xs: "none", md: "auto" },

            scrollbarWidth: { xs: "none", md: "auto" },
            width: "100%",
            height: { md: "100vh" },
          }}
        >
          {<Outlet />}
        </Container>
      </Stack>
    </>
  );
};
