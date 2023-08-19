export interface IEditModalProps {
  open: boolean;
  onClose: () => void;
  taskId: number;
  taskName: string;
}

export interface IEditForm {
  taskName: string;
}
