import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
import { ServiceTakQuickstartView } from "./views/servicetak/quickstartguide/ServiceTakQuickstartView";
import { TakQuickstartAndroid1 } from "./views/servicetak/quickstartguide/android/TakQuickstartAndroid1";
import { TakQuickstartAndroid2 } from "./views/servicetak/quickstartguide/android/TakQuickstartAndroid2";
import { TakQuickstartAndroid3 } from "./views/servicetak/quickstartguide/android/TakQuickstartAndroid3";
import { TakQuickstartAndroid4 } from "./views/servicetak/quickstartguide/android/TakQuickstartAndroid4";
import { TakQuickstartAndroid5 } from "./views/servicetak/quickstartguide/android/TakQuickstartAndroid5";
import { TakQuickstartIos1 } from "./views/servicetak/quickstartguide/ios/TakQuickstartIos1";
import { TakQuickstartIos2 } from "./views/servicetak/quickstartguide/ios/TakQuickstartIos2";
import { TakQuickstartIos3 } from "./views/servicetak/quickstartguide/ios/TakQuickstartIos3";
import { TakQuickstartIos4 } from "./views/servicetak/quickstartguide/ios/TakQuickstartIos4";
import { TakQuickstartWin1 } from "./views/servicetak/quickstartguide/wintak/TakQuickstartWin1";
import { TakQuickstartWin2 } from "./views/servicetak/quickstartguide/wintak/TakQuickstartWin2";
import { TakQuickstartWin3 } from "./views/servicetak/quickstartguide/wintak/TakQuickstartWin3";
import { TakQuickstartWin4 } from "./views/servicetak/quickstartguide/wintak/TakQuickstartWin4";





function Root() {
  return (
    <>
      <div>Root</div>
      <Outlet />
    </>
  );
}

function Team() {
  return <div>Team</div>;
}

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
      {/*As of 1.0 directly integrated to RM UI, instead of html fragment design*/}, 
            {
              path: "/app/services/tak/quickstart",
              element: <ServiceTakQuickstartView />,
            },
            {/*Android quickstart guide views*/},
                {
                  path: "/app/services/tak/quickstart/android1",
                  element: <TakQuickstartAndroid1 />,
                },
                {
                  path: "/app/services/tak/quickstart/android2",
                  element: <TakQuickstartAndroid2 />,
                },
                {
                  path: "/app/services/tak/quickstart/android3",
                  element: <TakQuickstartAndroid3 />,
                },
                {
                  path: "/app/services/tak/quickstart/android4",
                  element: <TakQuickstartAndroid4 />,
                },
                {
                  path: "/app/services/tak/quickstart/android5",
                  element: <TakQuickstartAndroid5 />,
                },
            {/*iTAK quickstart guide views*/},
                {
                  path: "/app/services/tak/quickstart/ios1",
                  element: <TakQuickstartIos1 />,
                },
                {
                  path: "/app/services/tak/quickstart/ios2",
                  element: <TakQuickstartIos2 />,
                },
                {
                  path: "/app/services/tak/quickstart/ios3",
                  element: <TakQuickstartIos3 />,
                },
                {
                  path: "/app/services/tak/quickstart/ios4",
                  element: <TakQuickstartIos4 />,
                },
            {/*WinTAK quickstart guide views*/},
              {
                path: "/app/services/tak/quickstart/win1",
                element: <TakQuickstartWin1 />,
              },
              {
                path: "/app/services/tak/quickstart/win2",
                element: <TakQuickstartWin2 />,
              },
              {
                path: "/app/services/tak/quickstart/win3",
                element: <TakQuickstartWin3 />,
              },
              {
                path: "/app/services/tak/quickstart/win4",
                element: <TakQuickstartWin4 />,
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
