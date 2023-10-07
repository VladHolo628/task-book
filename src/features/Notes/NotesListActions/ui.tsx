import { Button, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { NotesRoutes } from "@/shared/enums/routes";
import { SearchInput } from "@/shared/ui/SearchInput";
import { CategorySelect } from "@/widgets/CategorySelect";
import { useForm } from "react-hook-form";

export const NotesListActions = () => {
  const { control } = useForm();
  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={4}>
      <Button variant="contained" component={RouterLink} to={NotesRoutes.NEW}>
        New note
      </Button>
      <SearchInput
        placeholder="Let's see"
        inputProps={{
          type: "text",
        }}
      />
      <CategorySelect control={control} />
    </Stack>
  );
};
