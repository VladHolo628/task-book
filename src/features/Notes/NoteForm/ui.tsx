import { Button, Stack, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CreatableSelect from "react-select/creatable";

export const NoteForm = () => {
  return (
    <form>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        spacing={2}
        alignItems={"end"}
      >
        <TextField
          type="text"
          autoFocus
          variant="outlined"
          label="Title"
          sx={{
            width: "70%",
            height: "100%",
            fontSize: "30px",
          }}
        />
        <Stack direction={"column"} spacing={2}>
          <Typography color={"primary"} textTransform={"uppercase"}>
            Tags
          </Typography>
          <CreatableSelect isMulti minMenuHeight={100} />
        </Stack>
      </Stack>
      <TextField
        sx={{
          fontSize: "30px",
          my: 4,
        }}
        multiline
        rows={20}
        label="Note"
        fullWidth
      />
      <Stack
        direction={"row"}
        spacing={2}
        justifyContent={{ xs: "center", sm: "end" }}
      >
        <Button variant="contained">Save</Button>
        <Button component={Link} to=".." variant="outlined">
          Cancel
        </Button>
      </Stack>
    </form>
  );
};
