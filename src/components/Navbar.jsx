import { NavLink } from "react-router-dom"

export default function Navbar({ navLinks }) {
  return (
    <nav>
      <ul className="navbar">
        {navLinks.map((navLink, index) => (
          <li key={index}>
            <NavLink
              to={navLink.path}
              end={navLink.end}
              className={({ isActive }) =>
                isActive ? "nav-element--active" : "nav-element"
              }
            >
              {navLink.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
