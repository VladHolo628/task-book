export interface ITag {
  id: string;
  label: string;
}
export interface INoteData {
  id: string;
  title: string;
  body: string;
  tags: ITag[];
}
