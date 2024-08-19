import { NavLink } from "react-router-dom"

export default function HostNavbar() {
  return (
    <nav>
      <ul className="host__navbar">
        <li>
          <NavLink
            to="/host"
            end
            className={({ isActive }) =>
              isActive ? "header__nav-element--active" : "header__nav-element"
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/host/income"
            className={({ isActive }) =>
              isActive ? "header__nav-element--active" : "header__nav-element"
            }
          >
            Income
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/host/vans"
            className={({ isActive }) =>
              isActive ? "header__nav-element--active" : "header__nav-element"
            }
          >
            Vans
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/host/reviews"
            className={({ isActive }) =>
              isActive ? "header__nav-element--active" : "header__nav-element"
            }
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
