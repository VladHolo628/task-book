import { create } from "zustand";
import { ITodoState } from "./types";
import { persist } from "zustand/middleware";
import { ITask } from "@/widgets/ToDo/types";
import { supabase } from "@/app/providers/supabase";

// const BASE_URL = "https://task-book-a97d0-default-rtdb.firebaseio.com/";

export const useTodoStore = create<ITodoState>()(
  persist(
    (set) => ({
      tasks: [],
      getTasks: async () => {
        const { data } = await supabase.from("Tasks").select("*");
        console.log(data);
      },
      addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
      deleteTask: (taskId: number) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== taskId),
        })),
      toggleTaskDone: (taskId: number) =>
        set((state) => ({
          tasks: state.tasks.map((task) => {
            if (task.id === taskId) {
              return {
                ...task,
                done: !task.done,
              };
            }
            return task;
          }),
        })),
      editTaskName: (taskId: number, newName: string) =>
        set((state) => ({
          tasks: state.tasks.map((task) => {
            if (task.id === taskId) {
              return {
                ...task,
                name: newName,
              };
            }
            return task;
          }),
        })),
      setTasks: (fetchedTasks: ITask[]) =>
        set({
          tasks: fetchedTasks,
        }),
    }),
    { name: "todoStore", version: 1 }
  )
);
