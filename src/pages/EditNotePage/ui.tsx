import { EditNoteForm } from "@/features/Notes/EditNoteForm";
import { Stack, Typography, Box } from "@mui/material";

export const EditNotePage = () => {
  return (
    <Stack>
      <Typography variant="h4" color={"primary"}>
        Edit Note
      </Typography>
      <Box>
        <EditNoteForm />
      </Box>
    </Stack>
  );
};
