import { ITag } from "@/features/Notes/types";

export interface INoteCardProps {
  title: string;
  text?: string;
  tags: ITag[];
}
