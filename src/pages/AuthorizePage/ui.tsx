import Logo from "@/shared/assets/logo.svg";
import { Typography, Box, Link } from "@mui/material";
import { AuthorizeCard } from "@/widgets/AuthorizeCard";

export const AuthorizePage = () => {
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
      <Box sx={{ display: "flex" }}>
        <img src={Logo} alt="" />
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
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100%"
        width={"100%"}
      >
        <AuthorizeCard isRegister={false} formHandler={formHandler} />
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography>
          © Designed By <Link>CupTeam</Link>
        </Typography>
      </Box>
    </Box>
  );
};
