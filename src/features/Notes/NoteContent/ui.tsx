import {
  Button,
  Chip,
  CircularProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { generateHTML } from "@tiptap/core";

import { Link, useNavigate, useParams } from "react-router-dom";
import { BackButton } from "@/shared/ui/BackButton";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteNote, getAllNotes } from "../api/supabaseApi";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Interweave } from "interweave";

import { extensions } from "@/features/Editor/utils/editorExtentions";
import "./styles/index.css";

export const NoteContent = () => {
  const params = useParams();
  const navigate = useNavigate();
  const noteId = params.id;

  const {
    data: notesData,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["notes", noteId],
    queryFn: getAllNotes,
  });

  const noteDeleteMutation = useMutation({
    mutationFn: (id: number) => deleteNote(id),
    mutationKey: ["notes", `note-${noteId}`],
  });

  const renderNoteContent = () => {
    if (notesData && isSuccess) {
      const note = notesData.find((item) => String(item.id) === noteId);

      const noteCategory = JSON.parse(note.category).label;

      const noteDeleteHandler = () => {
        noteDeleteMutation.mutate(+noteId!);
        navigate("../");
      };

      return (
        <Stack py={4}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 0 }}
            justifyContent={{ xs: "center", sm: "space-between" }}
            alignItems={{ sm: "center" }}
          >
            <Typography
              variant="h4"
              color={"primary"}
              textAlign={{ xs: "center", sm: "left" }}
            >
              {note.noteTitle}
            </Typography>
            <Chip label={noteCategory} />
            <Button component={Link} to={"edit"} variant="outlined">
              Edit
            </Button>

            <Button
              onClick={noteDeleteHandler}
              variant="outlined"
              endIcon={<DeleteForeverIcon />}
              color="error"
            >
              Delete
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
            <Interweave content={generateHTML(note.noteBody, extensions)} />
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
