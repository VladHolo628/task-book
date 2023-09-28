import { Button, Chip, Paper, Stack, Typography } from "@mui/material";
import { INoteData } from "../types";
import { Link, useParams } from "react-router-dom";
import { BackButton } from "@/shared/ui/BackButton";

export const NoteContent = () => {
  const params = useParams();
  const note: INoteData = {
    title: "Note Content Title",
    id: String(params.id),
    body: "We dont need new answers listing every extension youve found to cause this problem. A single answer saying that the problem can be caused by extensions and recommending to disable them is sufficient. Answers that do nothing more than name an extension have been and will continue to be deleted.We dont need new answers listing every extension youve found to cause this problem. A single answer saying that the problem can be caused by extensions and recommending to disable them is sufficient. Answers that do nothing more than name an extension have been and will continue to be deleted.We dont need new answers listing every extension youve found to cause this problem. A single answer saying that the problem can be caused by extensions and recommending to disable them is sufficient. Answers that do nothing more than name an extension have been and will continue to be deleted.We dont need new answers listing every extension youve found to cause this problem. A single answer saying that the problem can be caused by extensions and recommending to disable them is sufficient. Answers that do nothing more than name an extension have been and will continue to be deleted.We dont need new answers listing every extension youve found to cause this problem. A single answer saying that the problem can be caused by extensions and recommending to disable them is sufficient. Answers that do nothing more than name an extension have been and will continue to be deleted.We dont need new answers listing every extension youve found to cause this problem. A single answer saying that the problem can be caused by extensions and recommending to disable them is sufficient. Answers that do nothing more than name an extension have been and will continue to be deleted.We dont need new answers listing every extension youve found to cause this problem. A single answer saying that the problem can be caused by extensions and recommending to disable them is sufficient. Answers that do nothing more than name an extension have been and will continue to be deleted.We dont need new answers listing every extension youve found to cause this problem. A single answer saying that the problem can be caused by extensions and recommending to disable them is sufficient. Answers that do nothing more than name an extension have been and will continue to be deleted.We dont need new answers listing every extension youve found to cause this problem. A single answer saying that the problem can be caused by extensions and recommending to disable them is sufficient. Answers that do nothing more than name an extension have been and will continue to be deleted.We dont need new answers listing every extension youve found to cause this problem. A single answer saying that the problem can be caused by extensions and recommending to disable them is sufficient. Answers that do nothing more than name an extension have been and will continue to be deleted.We dont need new answers listing every extension youve found to cause this problem. A single answer saying that the problem can be caused by extensions and recommending to disable them is sufficient. Answers that do nothing more than name an extension have been and will continue to be deleted.",
    tags: [
      {
        label: "Life&Health",
        id: "fo1ub1f89e122",
      },
      {
        label: "Todo",
        id: "231e21rndfi9",
      },
    ],
  };
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
          {note.title}
        </Typography>
        <Stack
          direction={"row"}
          spacing={2}
          textAlign={"center"}
          justifyContent={"center"}
          my={{ xs: 2, sm: 0 }}
        >
          {note.tags.map((tag) => {
            return <Chip label={tag.label} />;
          })}
        </Stack>
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
        {note.body}
        {note.id}
      </Paper>
      <BackButton />
    </Stack>
  );
};
