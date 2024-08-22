import { useState, useEffect } from "react"
import { Link, useParams, Outlet, NavLink } from "react-router-dom"
import { FaArrowLeftLong } from "react-icons/fa6"

import VanType from "../../components/VanType"

export default function HostVanDetails() {
  const params = useParams()

  const [hostVanDetails, setHostVanDetails] = useState({})

  useEffect(() => {
    fetch(`/api/vans/hostvans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setHostVanDetails(data.van))
  }, [params.id])

  return (
    <div className="hostvandetails">
      <Link to="/host/vans" className="van-details__back-link">
        <FaArrowLeftLong />
        Back to all vans
      </Link>
      <div className="hostvandetails__wrapper">
        <div className="hostvandetails__content-wrapper">
          <img
            src={hostVanDetails.imageUrl}
            alt=""
            className="hostvandetails__img"
          />
          <VanType type={hostVanDetails.type} />
          <h2 className="hostvandetails__name">{hostVanDetails.name}</h2>
          <p className="hostvandetails__price">${hostVanDetails.price}/day</p>
        </div>
        <nav>
          <ul className="hostvandetails__navbar">
            <li>
              <NavLink
                to={`/host/vans/${params.id}`}
                end
                className={({ isActive }) =>
                  isActive
                    ? "header__nav-element--active"
                    : "header__nav-element"
                }
              >
                Details
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/host/vans/${params.id}/pricing`}
                className={({ isActive }) =>
                  isActive
                    ? "header__nav-element--active"
                    : "header__nav-element"
                }
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/host/vans/${params.id}/photos`}
                className={({ isActive }) =>
                  isActive
                    ? "header__nav-element--active"
                    : "header__nav-element"
                }
              >
                Photos
              </NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </div>
  )
}
