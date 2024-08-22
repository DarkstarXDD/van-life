import { Link } from "react-router-dom"
import Navbar from "./Navbar"

export default function Header() {
  const navLinks = [
    { label: "Host", path: "/host" },
    { label: "About", path: "/about" },
    { label: "Vans", path: "/vans" },
  ]

  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src="/assets/images/logo.svg" alt="Vanlife" />
      </Link>
      <Navbar navLinks={navLinks} />
    </header>
  )
}
