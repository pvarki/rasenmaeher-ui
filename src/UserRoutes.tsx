import { SoldierView } from "./views/SoldierView";

export const UserRoutes = [
  {
    path: "/:callsign",
    element: <SoldierView />,
  },
];