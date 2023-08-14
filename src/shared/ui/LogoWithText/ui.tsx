import { Typography, Box } from "@mui/material";
import Logo from "@/shared/assets/logo.svg";
import { ILogoWithTextProps } from "./types";

export const LogoWithText = ({ textColor }: ILogoWithTextProps) => {
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
        color={textColor}
      >
        Task Book
      </Typography>
    </Box>
  );
};
