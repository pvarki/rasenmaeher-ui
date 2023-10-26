import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./hook/auth/ProtectedRoute";
import { LoginView } from "./views/login/LoginView";
import { CallsignSetupStep } from "./views/login/CallsignSetupView";
import { EnrollmentView } from "./views/login/EnrollmentView";
import { ErrorView } from "./views/ErrorView";
import { TakRoutes } from "./TakRoutes";
import { MtlsTestView } from "./views/MtlsTestView";
import { AdminRouteWrapper } from "./AdminRouteWrapper";
import { UserRouteWrapper } from "./UserRouteWrapper";
import { TakRouteWrapper } from "./TakRouteWrapper";
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
    element: (
      <ProtectedRoute requireAuthType="jwt">
        <CallsignSetupStep />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login/enrollment",
    element: (
      <ProtectedRoute requireAuthType="jwt">
        <EnrollmentView />
      </ProtectedRoute>
    ),
  },
  {
    path: "/app/admin/*",
    element: (
      <ProtectedRoute allowedUserTypes={["admin"]}>
        <AdminRouteWrapper />
      </ProtectedRoute>
    ),
  },
  {
    path: "/app/users/*",
    element: (
      <ProtectedRoute allowedUserTypes={["user"]}>
        <UserRouteWrapper />
      </ProtectedRoute>
    ),
  },
  {
    path: "/app/services/tak/*",
    element: (
      <ProtectedRoute allowedUserTypes={["user", "admin"]}>
        <TakRouteWrapper />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login/createmtls",
    element: (
      <ProtectedRoute requireAuthType="jwt" requireValidUser={true}>
        <MtlsTestView />
      </ProtectedRoute>
    ),
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
