import { AdminRoutes } from "./AdminRoutes";
import { Routes, Route, Outlet } from "react-router-dom";

export function AdminRouteWrapper() {
  return (
    <Routes>
      {AdminRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<Outlet />} />
    </Routes>
  );
}
