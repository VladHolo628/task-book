import { NoteForm } from "@/features/Notes/NoteForm";
import { addNote } from "@/features/Notes/api/supabaseApi";
import { Stack, Typography, Box, CircularProgress } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";

export const NewNotePage = () => {
  const { mutate: mutateNewNote, isLoading } = useMutation({
    mutationFn: (data: FieldValues) => {
      return addNote(data);
    },
    mutationKey: ["notes", "new_note"],
  });
  return (
    <Stack>
      <Typography variant="h4" color={"primary"} mb={4}>
        New Note
      </Typography>
      <Box>
        {isLoading && <CircularProgress />}
        {!isLoading && (
          <NoteForm onSubmit={(data: FieldValues) => mutateNewNote(data)} />
        )}
      </Box>
    </Stack>
  );
};
