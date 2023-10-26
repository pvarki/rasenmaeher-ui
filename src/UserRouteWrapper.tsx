import { UserRoutes } from "./UserRoutes";
import { Routes, Route } from "react-router-dom";

export function UserRouteWrapper() {
  return (
    <Routes>
      {UserRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}


  