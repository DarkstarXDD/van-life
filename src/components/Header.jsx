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
            <NavLink
              to="/host"
              className={({ isActive }) =>
                isActive ? "header__nav-element--active" : "header__nav-element"
              }
            >
              Host
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "header__nav-element--active" : "header__nav-element"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/vans"
              className={({ isActive }) =>
                isActive ? "header__nav-element--active" : "header__nav-element"
              }
            >
              Vans
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
