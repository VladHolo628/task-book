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
  Typography,
} from "@mui/material";
import { Outlet } from "react-router";
import Logo from "@/shared/assets/logo.svg";
import LightModeIcon from "@mui/icons-material/LightMode";
import { AvatarWithMenu } from "@/shared/ui/AvatarWithMenu";

export const AppPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItems = ["Profile", "Settings", "Log Out"];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          display: { xs: "block", md: "none" },
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
          <AvatarWithMenu menuItems={menuItems} />
        </Toolbar>
      </AppBar>

      <Stack
        direction={"row"}
        sx={{
          mt: { xs: "70px", md: "0" },
          height: { xs: "100%", md: "100vh" },
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: { xs: "none", md: "block" },
            minWidth: "250px",
            width: "20%",
          }}
        >
          <Sidebar toggleOpen={handleDrawerToggle} isOpen={isSidebarOpen} />
        </Box>

        <Box sx={{ flexGrow: 1, overflowY: "auto" }} height={"100%"}>
          <AppBar
            sx={{
              position: { xs: "sticky", md: "static" },
              height: "10%",
              bgcolor: "white",
              color: "black",
              boxShadow: 3,
              display: { xs: "none", md: "block" },
            }}
          >
            <Toolbar
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <IconButton>
                <LightModeIcon />
              </IconButton>

              <Box display={"flex"} alignItems={"center"}>
                <Typography mr={2}>Get things done, UserName</Typography>
                <AvatarWithMenu menuItems={menuItems} />
              </Box>
            </Toolbar>
          </AppBar>
          <Container
            sx={{
              p: { sm: 2 },
              py: { xs: 1, sm: 2 },
              scrollbarWidth: { xs: "none" },
              width: "100%",
              height: "100%",
            }}
          >
            <Outlet />
          </Container>
        </Box>
      </Stack>
    </>
  );
};
