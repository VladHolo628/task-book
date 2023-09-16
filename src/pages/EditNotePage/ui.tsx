import { NoteForm } from "@/features/Notes/NoteForm";
import { Stack, Typography, Box } from "@mui/material";

export const EditNotePage = () => {
  return (
    <Stack>
      <Typography variant="h4" color={"primary"}>
        Edit Note
      </Typography>
      <Box>
        <NoteForm />
      </Box>
    </Stack>
  );
};
