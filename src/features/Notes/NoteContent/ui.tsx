import {
  Button,
  Chip,
  CircularProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { Link, useParams } from "react-router-dom";
import { BackButton } from "@/shared/ui/BackButton";
import { useQuery } from "@tanstack/react-query";
import { getAllNotes } from "../api/supabaseApi";

export const NoteContent = () => {
  const params = useParams();
  const noteId = params.id;

  const {
    data: notesData,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["notes", noteId],
    queryFn: getAllNotes,
  });

  const renderNoteContent = () => {
    if (notesData && isSuccess) {
      const note = notesData.find((item) => String(item.id) === noteId);

      return (
        <Stack py={4}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent={{ xs: "center", sm: "space-between" }}
          >
            <Typography
              variant="h4"
              color={"primary"}
              textAlign={{ xs: "center", sm: "left" }}
            >
              {note.noteTitile}
            </Typography>
            <Chip label={note.category} />
            <Button component={Link} to={"edit"} variant="outlined">
              Edit
            </Button>
          </Stack>
          <Paper
            sx={{
              height: "100%",
              flexGrow: "1",
              mt: 4,
              p: { xs: 2, sm: 4 },
              boxShadow: 5,
              fontSize: "20px",
            }}
          >
            {note.noteBody}
          </Paper>
          <BackButton />
        </Stack>
      );
    }

    return null;
  };

  return (
    <>
      {isLoading && <CircularProgress />}
      {notesData && renderNoteContent()}
    </>
  );
};
