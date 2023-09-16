import { privateRoutesList, publicRoutesList } from "./routes";
import { FC } from "react";
import { useRoutes } from "react-router";

export const AppRouter: FC = () => {
  const isAuth = true;

  const privateRoutes = useRoutes(privateRoutesList);

  const publicRoutes = useRoutes(publicRoutesList);

  if (isAuth) {
    return privateRoutes;
  } else {
    return publicRoutes;
  }
};
