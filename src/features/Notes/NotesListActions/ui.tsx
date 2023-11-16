import { Button, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { NotesRoutes } from "@/shared/enums/routes";
import { SearchInput } from "@/shared/ui/SearchInput";
import { INotesListActionsProps } from "./types";

export const NotesListActions = ({
  onSearchChangeHandler,
}: INotesListActionsProps) => {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={4}>
      <Button variant="contained" component={RouterLink} to={NotesRoutes.NEW}>
        New note
      </Button>
      <SearchInput
        onChange={(e) => onSearchChangeHandler(e.target.value)}
        placeholder="Let's see ..."
        inputProps={{
          type: "text",
        }}
      />
    </Stack>
  );
};
