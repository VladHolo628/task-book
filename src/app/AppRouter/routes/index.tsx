import { AppRoutes, NotesRoutes } from "@/shared/enums/routes";
import { AuthorizePage } from "@/pages/AuthorizePage";
import { NotesPage } from "@/pages/NotesPage";
import { RegisterPage } from "@/pages/RegisterPage";
import { TodoPage } from "@/pages/TodoPage";

import { AppPage } from "@/pages/AppPage";
import { NewNotePage } from "@/pages/NewNotePage";
import { NotesList } from "@/features/Notes/NotesList";
import { NotePageLayout } from "@/pages/NotePageLayout";
import { Navigate, RouteObject } from "react-router";
import { NoteContent } from "@/features/Notes/NoteContent";
import { EditNotePage } from "@/pages/EditNotePage";

export const privateRoutesList: RouteObject[] = [
  {
    element: <AppPage />,
    children: [
      {
        path: AppRoutes.TODO,
        element: <TodoPage />,
      },
      {
        path: AppRoutes.NOTES,
        element: <NotesPage />,
        children: [
          {
            index: true,
            element: <NotesList />,
          },
          {
            path: NotesRoutes.NEW,
            element: <NewNotePage />,
          },
          {
            path: NotesRoutes.NOTE,
            element: <NotePageLayout />,
            children: [
              {
                index: true,
                element: <NoteContent />,
              },
              {
                path: NotesRoutes.EDIT,
                element: <EditNotePage />,
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <Navigate to={AppRoutes.TODO} />,
      },
    ],
  },
];

export const publicRoutesList: RouteObject[] = [
  {
    path: AppRoutes.LOG_IN,
    element: <AuthorizePage />,
  },
  {
    path: AppRoutes.REGISTER,
    element: <RegisterPage />,
  },
  {
    path: "*",
    element: <Navigate to={AppRoutes.LOG_IN} />,
  },
];
