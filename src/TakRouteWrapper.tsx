import { TakRoutes } from "./TakRoutes";
import { Routes, Route } from "react-router-dom";

export function TakRouteWrapper() {
  return (
    <Routes>
      {TakRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}