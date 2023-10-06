import { Header } from "./Header";
import { Outlet } from "react-router-dom";




export function Layout() {
  return (
    <div className="h-screen">
      <Header />
      <main className="p-3 relative">
        <Outlet />
      </main>
    </div>
  )
}