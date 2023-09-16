import { Card, CardContent, Chip, Stack, Typography } from "@mui/material";

import { INoteCardProps } from "./types";

export const NoteCard = ({ title, text, tags }: INoteCardProps) => {
  const noteCardTextLength = 150;
  const formattedNoteText = `${text?.slice(0, noteCardTextLength)}...`;
  return (
    <Card
      sx={{
        cursor: "pointer",
      }}
      variant="outlined"
    >
      <CardContent>
        <Stack spacing={1} direction={"row"} mb={2}>
          {tags.map((tag) => {
            return (
              <Chip label={tag.label} color="primary" variant="outlined" />
            );
          })}
        </Stack>
        <Typography color={"primary"} variant="h5">
          {title}
        </Typography>
        <Typography mt={3}>{formattedNoteText}</Typography>
      </CardContent>
    </Card>
  );
};
