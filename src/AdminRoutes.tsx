import { AdminHomeView } from "./views/AdminHomeView";
import { UserManagementView } from "./views/usermgmt/UserManagementView";
import { QrCodeView } from "./views/users/invite/QrCodeView";
import { EnrollCodeListView } from "./views/users/invite/EnrollCodeListView";
import { EnrollApprovalView } from "./views/users/invite/EnrollApprovalView";
import { ManageUsersView } from "./views/usermgmt/ManageUsersView";

export const AdminRoutes = [
  {
    path: "",
    element: <AdminHomeView />,
  },
  {
    path: "manageusers",
    element: <ManageUsersView />,
  },
  {
    path: "user-management",
    element: <UserManagementView />,
  },
  {
    path: "user-management/code-list",
    element: <EnrollCodeListView />,
  },
  {
    path: "user-management/code-list/:inviteCode",
    element: <QrCodeView />,
  },
  {
    path: "user-management/approval",
    element: <EnrollApprovalView />,
  },
];
