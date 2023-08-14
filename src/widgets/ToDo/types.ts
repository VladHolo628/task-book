export interface ITask {
  id: number;
  name: string;
  category: string;
  done: boolean;
  priority: string;
}

export interface IToDoProps {
  tasks: ITask[];
}
