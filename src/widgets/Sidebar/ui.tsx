import { LogoWithText } from "@/shared/ui/LogoWithText";
import { Drawer, Typography, Box, Button, Tabs, Tab } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { ICategoryItem, ISidebarProps } from "./types";
import { NavLink, useMatch } from "react-router-dom";
import { useEffect, useState } from "react";

const categories: ICategoryItem[] = [
  {
    name: "ToDo",
    icon: <HomeIcon />,
  },

  {
    name: "Notes",
    icon: <WorkOutlineOutlinedIcon />,
  },
];

export const Sidebar = ({ toggleOpen, isOpen }: ISidebarProps) => {
  const match = useMatch("/:value");
  const [selectedTab, setSelectedTab] = useState<string>("home");

  useEffect(() => {
    if (match?.params.value) {
      setSelectedTab(match?.params.value);
    }
  }, [match]);

  const drawer = (
    <>
      <Box marginBottom={4} alignSelf={"center"}>
        <LogoWithText textColor="primary" />
      </Box>

      <Tabs orientation="vertical" sx={{ mb: 2 }} value={selectedTab}>
        <Typography color={"primary"} variant="h6" marginBottom={3}>
          Systems
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
              onClick={toggleOpen}
            />
          );
        })}
      </Tabs>

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
    <>
      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={toggleOpen}
        sx={{ display: { xs: "block", md: "none" } }}
        PaperProps={{
          sx: {
            height: "100%",
            padding: 2,
            width: "300px",
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
            width: "100%",
            boxShadow: 2,
            position: "relative",
            justifyContent: "space-between",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
};
