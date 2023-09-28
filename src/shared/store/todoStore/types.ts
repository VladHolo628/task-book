import { ITask } from "../../../widgets/ToDo/types";

export interface ITodoState {
  tasks: ITask[] | [];
  getTasks: () => ITask[];
  addTask: (task: ITask) => void;
  deleteTask: (taskId: number) => void;
  toggleTaskDone: (taskId: number) => void;
  editTaskName: (taskId: number, newName: string) => void;
  setTasks: (fetchedTasks: ITask[]) => void;
}
