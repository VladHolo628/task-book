import { Navigate, Route, Routes } from "react-router-dom";

import { privateRoutes, publicRoutes } from "./routes";
import { FC } from "react";
import { RoutesEnum } from "./routes/routesEnum";
import { AppPage } from "@/pages/AppPage";

export const AppRouter: FC = () => {
  const isAuth = true;

  return isAuth ? (
    <Routes>
      <Route
        path={RoutesEnum.ROOT}
        element={<Navigate to={RoutesEnum.TODO} />}
      />
      <Route path={RoutesEnum.ROOT} element={<AppPage />}>
        {privateRoutes.map((route) => {
          return (
            <Route
              path={route.path}
              element={<route.element />}
              key={route.path}
            />
          );
        })}
      </Route>

      <Route path="*" element={<Navigate to={RoutesEnum.TODO} replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => {
        return (
          <Route
            path={route.path}
            element={<route.element />}
            key={route.path}
          />
        );
      })}
      <Route path="*" element={<Navigate to={RoutesEnum.LOGIN} replace />} />
    </Routes>
  );
};
