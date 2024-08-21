import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
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
        <img
          src={hostVanDetails.imageUrl}
          alt=""
          className="hostvandetails__img"
        />
        <VanType type={hostVanDetails.type} />
        <h2 className="hostvandetails__name">{hostVanDetails.name}</h2>
        <p className="hostvandetails__price">${hostVanDetails.price}/day</p>
      </div>
    </div>
  )
}
