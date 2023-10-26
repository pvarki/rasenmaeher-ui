import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./hook/auth/ProtectedRoute";
import { LoginView } from "./views/login/LoginView";
import { SoldierView } from "./views/SoldierView";
import { CallsignSetupStep } from "./views/login/CallsignSetupView";
import { EnrollmentView } from "./views/login/EnrollmentView";
import { ErrorView } from "./views/ErrorView";
import { TakRoutes } from "./TakRoutes";
import { MtlsTestView } from "./views/MtlsTestView";
import { AdminRoutes } from "./AdminRoutes";
import { RootRedirector } from "./hook/auth/rootRedirector";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRedirector />,
  },
  {
    path: "/login",
    element: <LoginView />,
  },
  {
    path: "/login/callsign",
    element: <CallsignSetupStep />,
  },
  {
    path: "/login/enrollment",
    element: <EnrollmentView />,
  },
  {
    path: "/app/admin/*",
    element: (
      <ProtectedRoute allowedUserTypes={["admin"]}>
        {AdminRoutes.map((route, index) =>
          React.cloneElement(route.element, { key: index }),
        )}
      </ProtectedRoute>
    ),
  },
  {
    path: "/app/users/:callsign",
    element: <SoldierView />,
  },
  {
    path: "/app/mtls-test",
    element: <MtlsTestView />,
  },
  {
    path: "/error",
    element: <ErrorView />,
  },
  ...TakRoutes,
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
