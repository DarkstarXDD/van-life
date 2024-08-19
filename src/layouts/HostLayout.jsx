import { Outlet } from "react-router-dom"
import HostNavbar from "../components/HostNavbar"

export default function HostLayout() {
  return (
    <main className="main main--host">
      <HostNavbar />
      <Outlet />
    </main>
  )
}
