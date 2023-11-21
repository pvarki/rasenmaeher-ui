import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./hook/auth/ProtectedRoute";
import { LoginView } from "./views/login/LoginView";
import { CallsignSetupStep } from "./views/login/CallsignSetupView";
import { EnrollmentView } from "./views/login/EnrollmentView";
import { ErrorView } from "./views/ErrorView";
import { NotFoundView } from "./views/NotFoundView";
import { TakRoutes } from "./TakRoutes";
import { MtlsCreateView } from "./views/mtls/MtlsCreateView";
import { AdminRouteWrapper } from "./AdminRoutes";
import { UserRouteWrapper } from "./UserRoutes";
import { TakRouteWrapper } from "./TakRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <></>
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <ProtectedRoute>
        <LoginView />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login/callsign",
    element: (
      <ProtectedRoute requireOtpVerified={true}>
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
      <ProtectedRoute
        requireValidUser={true}
        requireAuthType="mtls"
        allowedUserTypes={["admin"]}
      >
        <AdminRouteWrapper />
      </ProtectedRoute>
    ),
  },
  {
    path: "/app/users/*",
    element: (
      <ProtectedRoute
        requireValidUser={true}
        requireAuthType="mtls"
        allowedUserTypes={["user"]}
      >
        <UserRouteWrapper />
      </ProtectedRoute>
    ),
  },
  {
    path: "/app/services/tak/*",
    element: (
      <ProtectedRoute
        requireValidUser={true}
        requireAuthType="mtls"
        allowedUserTypes={["user", "admin"]}
      >
        <TakRouteWrapper />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login/createmtls",
    element: (
      <ProtectedRoute requireAuthType="jwt" requireValidUser={true}>
        <MtlsCreateView />
      </ProtectedRoute>
    ),
  },
  {
    path: "/error",
    element: <ErrorView />,
  },
  {
    path: "*",
    element: <NotFoundView />,
  },
  ...TakRoutes,
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
