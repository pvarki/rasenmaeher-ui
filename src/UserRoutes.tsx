import { SoldierView } from "./views/SoldierView";
import { Routes, Route } from "react-router-dom";

const UserRoutes = [
  {
    path: "/:callsign",
    element: <SoldierView />,
  },
];

export function UserRouteWrapper() {
  return (
    <Routes>
      {UserRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
