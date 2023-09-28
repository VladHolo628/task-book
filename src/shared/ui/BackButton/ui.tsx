import { Fab } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";

export const BackButton = () => {
  return (
    <Fab
      size="large"
      color="primary"
      component={Link}
      to=".."
      sx={{
        position: "fixed",
        bottom: 20,
        right: 25,
      }}
    >
      <ArrowBackIosNewIcon />
    </Fab>
  );
};
