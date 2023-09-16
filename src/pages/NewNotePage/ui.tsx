import { NoteForm } from "@/features/Notes/NoteForm";
import { Stack, Typography, Box } from "@mui/material";

export const NewNotePage = () => {
  return (
    <Stack>
      <Typography variant="h4" color={"primary"} mb={4}>
        New Note
      </Typography>
      <Box>
        <NoteForm />
      </Box>
    </Stack>
  );
};
