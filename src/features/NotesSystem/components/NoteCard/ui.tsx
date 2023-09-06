import { Card, CardContent, Typography } from "@mui/material";
// import LaunchIcon from "@mui/icons-material/Launch";

import { INoteCardProps } from "./types";

export const NoteCard = ({ title, text, onClick }: INoteCardProps) => {
  return (
    <Card
      sx={{
        cursor: "pointer",
      }}
      variant="outlined"
      onClick={onClick}
    >
      <CardContent>
        <Typography color={"primary"} variant="h5">
          {title}
        </Typography>
        <Typography my={3}>{text}</Typography>
      </CardContent>
    </Card>
  );
};
