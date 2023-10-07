import { Editor } from "@/features/Editor";
import { CategorySelect } from "@/widgets/CategorySelect";
import { Button, Stack, TextField, Typography } from "@mui/material";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const NoteForm = () => {
  const { register, handleSubmit, control } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        spacing={2}
        alignItems={"end"}
      >
        <TextField
          {...register("title", { required: true })}
          type="text"
          autoFocus
          variant="outlined"
          label="Title"
          multiline
          sx={{
            width: "70%",
            height: "100%",
            fontSize: "30px",
            mt: 2,
          }}
        />
        <Stack direction={"column"} spacing={2}>
          <Typography color={"primary"} textTransform={"uppercase"}>
            Category
          </Typography>

          <CategorySelect control={control} />
        </Stack>
      </Stack>
      <TextField
        {...register("body", { required: true })}
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
        <Button type="submit" variant="contained">
          Save
        </Button>
        <Button component={Link} to=".." variant="outlined">
          Cancel
        </Button>
      </Stack>
      <Editor data={{}} />
    </form>
  );
};
