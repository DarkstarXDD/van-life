import { Link, NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src="/assets/images/logo.svg" alt="Vanlife" />
      </Link>
      <nav>
        <ul className="header__navbar">
          <li>
            <NavLink className="header__nav-element" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="header__nav-element" to="/vans">
              Vans
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
