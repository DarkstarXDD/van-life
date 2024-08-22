import Navbar from "./Navbar"

export default function HostNavbar() {
  const navLinks = [
    { label: "Dashboard", path: "/host", end: true },
    { label: "Income", path: "/host/income" },
    { label: "Vans", path: "/host/vans" },
    { label: "Reviews", path: "/host/reviews" },
  ]
  return <Navbar navLinks={navLinks} />
}
