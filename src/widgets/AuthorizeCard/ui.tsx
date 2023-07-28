import {
  Paper,
  Typography,
  Box,
  Button,
  Link,
  Divider,
  List,
} from "@mui/material";
import { Google, GitHub } from "@mui/icons-material";
import { AuthorizeForm } from "./components/AuthorizeForm";
import { IAuthorizeCard } from "./types";

export const AuthorizeCard = ({ isRegister, formHandler }: IAuthorizeCard) => {
  const formButtonText = isRegister ? "Register" : "Log In";

  return (
    <Paper
      elevation={2}
      sx={{
        p: { xs: 2, sm: 5 },
        width: { xs: "100%", sm: "400px" },
        margin: { xs: 1, sm: 0 },
      }}
    >
      <Typography
        sx={{ mb: 2 }}
        color={"primary"}
        variant="h5"
        textAlign={"center"}
      >
        Log in
      </Typography>

      <Box>
        <AuthorizeForm
          submitButtonText={formButtonText}
          formHandler={formHandler}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <List>
            {isRegister ? (
              <Typography textAlign={"center"}>
                Already have an account?{" "}
                <Link sx={{ cursor: "pointer" }}>Log In</Link>
              </Typography>
            ) : (
              <Typography textAlign={"center"}>
                Don't have an account yet?{" "}
                <Link sx={{ cursor: "pointer" }}>Register</Link>
              </Typography>
            )}

            <Divider
              light={true}
              sx={{ my: "20px", w: "100%", backgroundColor: "primary" }}
              role="presentation"
            >
              OR
            </Divider>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: 2,
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Button variant="outlined" startIcon={<GitHub />}>
                GitHub
              </Button>
              <Button variant="outlined" startIcon={<Google />}>
                Google
              </Button>
            </Box>
          </List>
        </Box>
      </Box>
    </Paper>
  );
};
