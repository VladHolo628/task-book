import { Stack, Button, Box } from "@mui/material";
import { SearchInput } from "@/shared/ui/SearchInput";
import { FieldValues, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const NotesActions = () => {
  const { register, handleSubmit } = useForm();
  // Testing state lifting
  const searchSubmitHandler = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Stack
      direction={{ xs: "column-reverse", sm: "row" }}
      spacing={2}
      my={{ xs: 2, sm: 4 }}
    >
      <Box textAlign={"center"}>
        <Button
          component={Link}
          to="new"
          variant="contained"
          sx={{
            width: { xs: "60%", sm: "auto" },
          }}
        >
          New note
        </Button>
      </Box>

      <form onSubmit={handleSubmit(searchSubmitHandler)}>
        <SearchInput
          placeholder="Let's see..."
          inputProps={{ ...register("searchQuery") }}
        />
      </form>
    </Stack>
  );
};
