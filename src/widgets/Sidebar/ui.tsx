import { LogoWithText } from "@/shared/ui/LogoWithText";
import {
  Drawer,
  Typography,
  Box,
  Button,
  Tabs,
  Tab,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import DirectionsRunOutlinedIcon from "@mui/icons-material/DirectionsRunOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MenuIcon from "@mui/icons-material/Menu";
import { ICategoryItem } from "./types";
import { NavLink, useMatch } from "react-router-dom";
import React, { useEffect, useState } from "react";

const categories: ICategoryItem[] = [
  {
    name: "Home",
    icon: <HomeIcon />,
  },
  {
    name: "Family",
    icon: <Diversity1Icon />,
  },
  {
    name: "Work",
    icon: <WorkOutlineOutlinedIcon />,
  },
  {
    name: "Sport",
    icon: <DirectionsRunOutlinedIcon />,
  },
];

export const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const match = useMatch("/:value");
  const [selectedTab, setSelectedTab] = useState<string>("home");

  useEffect(() => {
    if (match?.params.value) {
      setSelectedTab(match?.params.value);
    }
  }, [match]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Box marginBottom={4} alignSelf={"center"}>
        <LogoWithText />
      </Box>

      <Tabs orientation="vertical" sx={{ mb: 2 }} value={selectedTab}>
        <Typography color={"primary"} variant="h6" marginBottom={3}>
          Categories
        </Typography>
        {categories.map((category) => {
          return (
            <Tab
              component={NavLink}
              to={category.name.toLowerCase()}
              key={category.name}
              sx={{
                height: "20px",
                padding: 2,
                justifyContent: "start",
                gap: 3,
                "&:hover": {
                  color: "primary.main",
                },
              }}
              label={category.name}
              icon={category.icon}
              iconPosition="start"
              value={category.name.toLowerCase()}
              onClick={handleDrawerToggle}
            />
          );
        })}
      </Tabs>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button startIcon={<AddBoxOutlinedIcon />}>Add</Button>
      </Box>
      <Box>
        <Typography color={"primary"} variant="h6" marginBottom={1}>
          Data
        </Typography>
        <Tabs>
          <Tab label="Statisics" />
        </Tabs>
      </Box>

      <Box textAlign={"right"}>
        <Button
          sx={{
            mt: "auto",
          }}
          startIcon={<ExitToAppIcon />}
        >
          Log Out
        </Button>
      </Box>
    </>
  );

  return (
    <Box
      sx={{
        pl: { xs: 4, md: 0 },
        pt: { xs: 4, md: 0 },
      }}
    >
      <IconButton
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ display: { md: "none" }, padding: 1 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", md: "none" } }}
        PaperProps={{
          sx: {
            height: "100vh",
            padding: 2,
            width: "250px",
            boxShadow: 2,
            position: "relative",
            justifyContent: "space-between",
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
        }}
        PaperProps={{
          sx: {
            height: "100vh",
            padding: 2,
            width: "250px",
            boxShadow: 2,
            position: "relative",
            justifyContent: "space-between",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
