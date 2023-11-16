import { Grid, Box, CircularProgress, Typography } from "@mui/material";
import { NoteCard } from "@/shared/ui/NoteCard";
import { Link } from "react-router-dom";
import { NotesListActions } from "../NotesListActions";
import { useQuery } from "@tanstack/react-query";
import { getAllNotes } from "../api/supabaseApi";
import { generateHTML } from "@tiptap/react";
import { extensions } from "@/features/Editor/utils/editorExtentions";
import { useState } from "react";

export const NotesList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);
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
        <NotesListActions
          onSearchChangeHandler={(data: string) => setSearchTerm(data)}
        />
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
          {notesData
            .filter((note) => note.searchData.includes(searchTerm))
            .map((note) => {
              const noteCategory = JSON.parse(note.category).label;
              const noteText = generateHTML(note.noteBody, extensions);
              const extractedNoteText = noteText.replace(/<[^>]+>/g, "");

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
                      title={note.noteTitle}
                      category={noteCategory}
                      text={extractedNoteText}
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
