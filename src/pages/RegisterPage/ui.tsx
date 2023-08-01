import { Typography, Box, Link } from "@mui/material";
import { AuthorizeCard } from "@/widgets/AuthorizeCard";
import { LogoWithText } from "@/shared/ui/LogoWithText";

export const RegisterPage = () => {
  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: { xs: 1, sm: 4 },
      }}
    >
      <LogoWithText />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100%"
        width={"100%"}
      >
        <AuthorizeCard isRegister={true} formHandler={formHandler} />
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography>
          © Designed By <Link>CupTeam</Link>
        </Typography>
      </Box>
    </Box>
  );
};
