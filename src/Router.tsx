import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { AppView } from "./views/AppView";
import { LoginView } from "./views/LoginView";
import { MassEnrollmentView } from "./views/MassEnrollmentView";
import { SoldierView } from "./views/SoldierView";


function Root() {
  return ( 
    <>
      <div>Root</div>
      <Outlet />
    </>
  )
}

function Team() {
  return <div>Team</div>;
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "team",
        element: <Team />,
      },
    ],
  },
  {
    path: "/soldier",
    element: <SoldierView />,
  },
  {
    path: "/login",
    element: <LoginView />,
  },
  {
    path: "/app",
    element: <AppView />,
  },
  {
    path: "/enrollment",
    element: <MassEnrollmentView />,
  }
]);


/*

  /login 

  /enrollment

  /app sisältää palvelut



*/


export default function Router() {
  return <RouterProvider router={router} />;
}