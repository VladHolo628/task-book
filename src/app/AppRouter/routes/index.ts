import { AuthorizePage } from "@/pages/AuthorizePage";
import { NewNotePage } from "@/pages/NewNotePage";
import { NotesPage } from "@/pages/NotesPage";
import { RegisterPage } from "@/pages/RegisterPage";
import { TodoPage } from "@/pages/TodoPage";

import { IRoute } from "../types";
import { RoutesEnum } from "./routesEnum";

export const privateRoutes: IRoute[] = [
  {
    path: RoutesEnum.TODO,
    element: TodoPage,
  },
  {
    path: RoutesEnum.NOTES,
    element: NotesPage,
  },
  {
    path: RoutesEnum.NEW_NOTE,
    element: NewNotePage,
  },
];

export const publicRoutes: IRoute[] = [
  {
    path: RoutesEnum.LOGIN,
    element: AuthorizePage,
  },
  {
    path: RoutesEnum.REGISTER,
    element: RegisterPage,
  },
];
