import { Editor } from "@/features/Editor";
import { CategorySelect } from "@/widgets/CategorySelect";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { INoteFormProps } from "./types";

export const NoteForm = ({
  noteTitle = "",
  noteCategory = "",
  noteBody = "<p></p>",
  onSubmit,
}: INoteFormProps) => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      title: noteTitle,
      category: noteCategory,
      note: noteBody,
    },
  });

  const navigate = useNavigate();

  const submitHandler = (data: FieldValues) => {
    onSubmit(data);
    navigate("../");
  };

  return (
    <form onSubmit={handleSubmit((data) => submitHandler(data))}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        spacing={2}
        alignItems={"end"}
      >
        <TextField
          {...register("title", { required: true, value: noteTitle })}
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
      <Box my={4}>
        <Controller
          name="note"
          control={control}
          render={(field) => (
            <Editor
              content={field.field.value}
              onChangeHandler={field.field.onChange}
            />
          )}
        />
      </Box>

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
    </form>
  );
};
