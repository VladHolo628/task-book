import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getAllNotes, updateNote } from "../api/supabaseApi";
import { NoteForm } from "../NoteForm";
import { CircularProgress } from "@mui/material";
import { FieldValues } from "react-hook-form";

export const EditNoteForm = () => {
  const params = useParams();

  const noteId = params.id;

  const {
    data: notesData,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["notes", noteId],
    queryFn: getAllNotes,
  });

  const editNoteMutation = useMutation({
    mutationFn: (data: FieldValues) => updateNote({ ...data, id: +noteId! }),
    mutationKey: ["notes", `note-${noteId}`],
  });

  const renderForm = () => {
    if (notesData && isSuccess) {
      const note = notesData.find((item) => String(item.id) === noteId);

      const noteCategory = JSON.parse(note.category);

      const noteTitle = note.noteTitle;

      const noteBody = note.noteBody;

      return (
        <NoteForm
          onSubmit={(data) => editNoteMutation.mutate(data)}
          noteTitle={noteTitle}
          noteBody={noteBody}
          noteCategory={noteCategory}
        />
      );
    }
  };
  return (
    <>
      {isLoading && <CircularProgress />}
      {notesData && renderForm()}
    </>
  );
};
