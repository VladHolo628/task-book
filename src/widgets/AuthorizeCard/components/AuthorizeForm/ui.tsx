import { TextField, FormControl, Button } from "@mui/material";
import { IAuthorizeForm } from "./types";

export const AuthorizeForm = ({
  submitButtonText,
  formHandler,
}: IAuthorizeForm) => {
  return (
    <form onSubmit={formHandler}>
      <FormControl
        sx={{
          display: "flex",
          direction: "column",
          gap: "20px",
          mb: "20px",
          alignItems: "center",
        }}
      >
        <TextField
          sx={{ width: "100%" }}
          placeholder="Name"
          variant="outlined"
          size="small"
        ></TextField>
        <TextField
          sx={{ width: "100%" }}
          placeholder="Email"
          variant="outlined"
          size="small"
        ></TextField>
        <Button
          sx={{ width: { xs: "70%", sm: "50%" } }}
          variant="contained"
          type="submit"
        >
          {submitButtonText}
        </Button>
      </FormControl>
    </form>
  );
};
