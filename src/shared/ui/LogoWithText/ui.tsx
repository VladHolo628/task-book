import { Typography, Box } from "@mui/material";
import Logo from "@/shared/assets/logo.svg";

export const LogoWithText = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <img src={Logo} />
      <Typography
        sx={{
          width: "50px",
          ml: 2,
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
        color={"primary"}
      >
        Task Book
      </Typography>
    </Box>
  );
};
