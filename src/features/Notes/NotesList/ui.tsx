import { Grid, Box, CircularProgress, Typography } from "@mui/material";
import { NoteCard } from "@/shared/ui/NoteCard";
import { Link } from "react-router-dom";
import { NotesListActions } from "../NotesListActions";
import { useQuery } from "@tanstack/react-query";
import { getAllNotes } from "../api/supabaseApi";

export const NotesList = () => {
  const {
    data: notesData,
    isLoading,
    isError,
  } = useQuery({
    queryFn: getAllNotes,
    queryKey: ["notes"],
  });

  return (
    <Box py={2}>
      <Box mb={4}>
        <NotesListActions />
      </Box>

      {isLoading && (
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <CircularProgress />
        </Box>
      )}

      {isError && (
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Typography color={"error"}>Ops... Something went wrong</Typography>
        </Box>
      )}

      {notesData && (
        <Grid container spacing={{ xs: 2, lg: 4 }} mt={6}>
          {notesData.map((note) => {
            return (
              <Grid xs={12} sm={6} lg={4} item key={note.id}>
                <Box
                  sx={{
                    textDecoration: "none",
                  }}
                  component={Link}
                  to={String(note.id)}
                >
                  <NoteCard
                    title={note.noteTitile}
                    category={note.category}
                    text={note.noteBody}
                  />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
  );
};
