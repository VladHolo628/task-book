export interface ITask {
  id: number;
  name: string;
  done: boolean;
}

export interface IToDoProps {
  tasks: ITask[];
}
