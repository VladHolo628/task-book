import { create } from "zustand";
import { ITodoState } from "./types";

export const useTodoStore = create<ITodoState>()((set) => ({
  tasks: [],
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
}));
