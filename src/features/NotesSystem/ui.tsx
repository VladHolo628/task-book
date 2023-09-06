import { Grid } from "@mui/material";
import { NoteCard } from "./components/NoteCard";
import { NotesActions } from "./components/NotesActions";

export const NotesSystem = () => {
  const notes = [
    {
      title: "Some Random Title",
      text: "lorflsajsdafkjldlsa adskfhjsajkdshfabds fsdfajksd dfsf dfdskafkljsdnfk asdfknnasdfkjsdfjbsdfkjas",
    },
    {
      title: "Some Random Title",
      text: "lorflsajsdafkjldlsa adskfhjsajkdshfabds fsdfajksd dfsf dfdskafkljsdnfk asdfknnasdfkjsdfjbsdfkjas",
    },
    {
      title: "Some Random Title",
      text: "lorflsajsdafkjldlsa adskfhjsajkdshfabds fsdfajksd dfsf dfdskafkljsdnfk asdfknnasdfkjsdfjbsdfkjas",
    },
    {
      title: "Some Random Title",
      text: "lorflsajsdafkjldlsa adskfhjsajkdshfabds fsdfajksd dfsf dfdskafkljsdnfk asdfknnasdfkjsdfjbsdfkjas",
    },
    {
      title: "Some Random Title",
      text: "lorflsajsdafkjldlsa adskfhjsajkdshfabds fsdfajksd dfsf dfdskafkljsdnfk asdfknnasdfkjsdfjbsdfkjas",
    },
    {
      title: "Some Random Title",
      text: "lorflsajsdafkjldlsa adskfhjsajkdshfabds fsdfajksd dfsf dfdskafkljsdnfk asdfknnasdfkjsdfjbsdfkjas",
    },
  ];

  return (
    <>
      <NotesActions />
      <Grid container spacing={{ xs: 2, lg: 3 }} alignContent={"center"}>
        {notes.map((note) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <NoteCard
                title={note.title}
                text={note.text}
                onClick={() => console.log(123)}
              />
            </Grid>
          );
        })}
      </Grid>
      {/* {<Outlet />} */}
    </>
  );
};
