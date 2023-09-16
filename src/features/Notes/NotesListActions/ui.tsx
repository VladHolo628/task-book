import { Button, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { NotesRoutes } from "@/shared/enums/routes";
import { SearchInput } from "@/shared/ui/SearchInput";

export const NotesListActions = () => {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={4}>
      <Button variant="contained" component={RouterLink} to={NotesRoutes.NEW}>
        New note
      </Button>
      <SearchInput
        placeholder="Notes or Tags"
        inputProps={{
          type: "text",
        }}
      />
    </Stack>
  );
};
