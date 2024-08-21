import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { FaArrowLeftLong } from "react-icons/fa6"

import VanType from "../../components/VanType"

export default function VanDetails() {
  const params = useParams()
  const [van, setVan] = useState({})

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.van))
  }, [params.id])

  return (
    <main className="main main--van-details">
      <div className="van-details">
        <Link to="/vans" className="van-details__back-link">
          <FaArrowLeftLong />
          Back to all vans
        </Link>
        <img src={van.imageUrl} alt="" className="vantile__img" />
        <div className="van-details__content-wrapper">
          <VanType type={van.type} />
          <h2 className="van-details__name">{van.name}</h2>
          <p className="van-details__price">
            <span>${van.price}</span>/day
          </p>
          <p className="van-details__description">{van.description}</p>
          <button className="van-details__button">Rent this van</button>
        </div>
      </div>
    </main>
  )
}
