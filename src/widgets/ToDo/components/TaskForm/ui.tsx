import { Box, Button, TextField, Snackbar, Alert } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import PostAddIcon from "@mui/icons-material/PostAdd";

import { ITaskForm } from "./types";
import { useTodoStore } from "@/shared/store/todoStore";

export const TaskForm = ({
  onSubmit,
  taskName,
  buttonText,
  placeholder,
}: ITaskForm) => {
  const tasks = useTodoStore((state) => state.tasks);
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taskName: taskName ?? "",
    },
  });

  const submitHandler = (data: FieldValues) => {
    onSubmit(data);
    reset();
  };

  const isValid = Boolean(errors.taskName);

  const validateIsNotExists = (value: string) => {
    const isExists = tasks.some((task) => task.name === value);
    console.log(tasks);
    return !isExists;
  };

  return (
    <Box>
      <Box component={"form"} onSubmit={handleSubmit(submitHandler)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
          }}
        >
          <TextField
            {...register("taskName", {
              required: true,
              maxLength: 200,
              validate: validateIsNotExists,
            })}
            multiline
            fullWidth
            placeholder={placeholder}
          />

          <Button
            sx={{
              mt: 2,
              width: { xs: "60%", md: "200px" },
            }}
            variant="contained"
            endIcon={<PostAddIcon />}
            type="submit"
          >
            {buttonText}
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={isValid}
        autoHideDuration={2000}
        onClose={() => clearErrors()}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert
          onClose={() => clearErrors()}
          severity="error"
          sx={{ width: "100%" }}
        >
          {errors.taskName?.type === "maxLength"
            ? "Max Length is 200 characters"
            : ""}
          {errors.taskName?.type === "required"
            ? "This could not be empty"
            : ""}

          {errors.taskName?.type === "validate"
            ? "This Task Already Exists"
            : ""}
        </Alert>
      </Snackbar>
    </Box>
  );
};
