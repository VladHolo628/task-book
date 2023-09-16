import { INoteData } from "../types";
import { Grid, Box } from "@mui/material";
import { NoteCard } from "@/shared/ui/NoteCard";
import { Link } from "react-router-dom";
import { NotesListActions } from "../NotesListActions";

export const NotesList = () => {
  const notes: INoteData[] = [
    {
      id: "398SADF3323f1",
      title: "Some note",
      body: "We dont need new answers listing every extension youve found to cause this problem. A single answer saying that the problem can be caused by extensions and recommending to disable them is sufficient. Answers that do nothing more than name an extension have been and will continue to be deleted.",
      tags: [
        {
          label: "tag1",
          id: "123124",
        },
      ],
    },
    {
      id: "398fasDFDSF211",
      title: "Some note",
      body: "We dont need new answers listing every extension youve found to cause this problem. A single answer saying that the problem can be caused by extensions and recommending to disable them is sufficient. Answers that do nothing more than name an extension have been and will continue to be deleted.",
      tags: [
        {
          label: "tag1",
          id: "123124",
        },
      ],
    },
    {
      id: "398f12e213dsafac1",
      title: "Some note",
      body: "We dont need new answers listing every extension youve found to cause this problem. A single answer saying that the problem can be caused by extensions and recommending to disable them is sufficient. Answers that do nothing more than name an extension have been and will continue to be deleted.",
      tags: [
        {
          label: "tag1",
          id: "123124",
        },
      ],
    },
    {
      id: "398fFEasd1",
      title: "Some note",
      body: "We dont need new answers listing every extension youve found to cause this problem. A single answer saying that the problem can be caused by extensions and recommending to disable them is sufficient. Answers that do nothing more than name an extension have been and will continue to be deleted.",
      tags: [
        {
          label: "tag1",
          id: "123124",
        },
      ],
    },
    {
      id: "398f rqewf1",
      title: "Some note",
      body: "We dont need new answers listing every extension youve found to cause this problem. A single answer saying that the problem can be caused by extensions and recommending to disable them is sufficient. Answers that do nothing more than name an extension have been and will continue to be deleted.",
      tags: [
        {
          label: "tag1",
          id: "123124",
        },
      ],
    },
    {
      id: "398few1",
      title: "Some note",
      body: "We dont need new answers listing every extension youve found to cause this problem. A single answer saying that the problem can be caused by extensions and recommending to disable them is sufficient. Answers that do nothing more than name an extension have been and will continue to be deleted.",
      tags: [
        {
          label: "tag1",
          id: "123124",
        },
      ],
    },
    {
      id: "398asdff1",
      title: "Some note",
      body: "We dont need new answers listing every extension youve found to cause this problem. A single answer saying that the problem can be caused by extensions and recommending to disable them is sufficient. Answers that do nothing more than name an extension have been and will continue to be deleted.",
      tags: [
        {
          label: "tag1",
          id: "123124",
        },
      ],
    },
    {
      id: "39va3hq8f1",
      title: "Some note",
      body: "We dont need new answers listing every extension youve found to cause this problem. A single answer saying that the problem can be caused by extensions and recommending to disable them is sufficient. Answers that do nothing more than name an extension have been and will continue to be deleted.",
      tags: [
        {
          label: "tag1",
          id: "123124",
        },
        {
          label: "Life",
          id: "1dsg23124",
        },
      ],
    },
  ];

  return (
    <Box py={2}>
      <Box mb={4}>
        <NotesListActions />
      </Box>

      <Grid container spacing={{ xs: 2, lg: 4 }} mt={6}>
        {notes.map((note) => {
          return (
            <Grid xs={12} sm={6} lg={4} item key={note.id}>
              <Box
                sx={{
                  textDecoration: "none",
                }}
                component={Link}
                to={note.id}
              >
                <NoteCard
                  title={note.title}
                  tags={note.tags}
                  text={note.body}
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
