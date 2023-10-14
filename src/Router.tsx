import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { LoginView } from "./views/login/LoginView";
import { MassEnrollmentView } from "./views/MassEnrollmentView";
import { SoldierView } from "./views/SoldierView";
import { CallsignSetupStep } from "./views/login/CallsignSetupView";
import { EnrollmentView } from "./views/login/EnrollmentView";
import { AdminHomeView } from "./views/AdminHomeView";
import { UserManagementView } from "./views/UserManagementView";
import { UserInviteView } from "./views/UserInviteView";
import { QrCodeView } from "./views/users/invite/QrCodeView";
import { EnrollCodeListView } from "./views/users/invite/EnrollCodeListView";
import { EnrollApprovalView } from "./views/users/invite/EnrollApprovalView";
import { ServicesView } from "./views/ServicesView";
import { ServiceTakView } from "./views/ServiceTakView";
import { SoldierServicesView } from "./views/SoldierServicesView";
import { SoldierServiceTakView } from "./views/SoldierServiceTakView";
import { MtlsTestView } from "./views/MtlsTestView";
import { ErrorView } from "./views/ErrorView";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
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
        path: "/app",
        element: <AdminHomeView />,
      },
      {
        path: "/app/user-management",
        element: <UserManagementView />,
      },
      {
        path: "/app/user-management/invite",
        element: <UserInviteView />,
      },
      {
        path: "/app/users/:callsign",
        element: <SoldierView />,
      },
      {
        path: "/app/user-management/code-list",
        element: <EnrollCodeListView />,
      },
      {
        path: "/app/user-management/code-list/:inviteCode",
        element: <QrCodeView />,
      },
      {
        path: "/app/user-management/approval",
        element: <EnrollApprovalView />,
      },
      {
        path: "/enrollment",
        element: <MassEnrollmentView />,
      },
      {
        path: "/app/services",
        element: <ServicesView />,
      },
      {
        path: "/app/services/tak",
        element: <ServiceTakView />,
      },
      {
        path: "/app/users/:callsign/services/tak",
        element: <SoldierServiceTakView />,
      },
      {
        path: "/app/users/:callsign/services",
        element: <SoldierServicesView />,
      },
      {
        path: "/app/mtls-test",
        element: <MtlsTestView />,
      },
      {
        path: "/error",
        element: <ErrorView />,
      },
    ],
  },
]);

/*

  /login

  /enrollment

  /app sisältää palvelut



*/

export default function Router() {
  return <RouterProvider router={router} />;
}
