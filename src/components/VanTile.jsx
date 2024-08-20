import { Link } from "react-router-dom"

export default function VanTile({ imageUrl, name, price, type, id }) {
  let color = ""
  if (type === "simple") {
    color = "orange"
  } else if (type === "luxury") {
    color = "black"
  } else {
    color = "green"
  }

  return (
    <div className="vantile">
      <img src={imageUrl} alt="" className="vantile__img" />
      <div className="vantile__name-price-wrapper">
        <h3 className="vantile__name">
          <Link to={`/vans/${id}`} className="vantile__link">
            {name}
          </Link>
        </h3>

        <p className="vantile__price">
          <span>${price}</span>/day
        </p>
      </div>
      <p className={`vantile__type vantile__type--bg-${color}`}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </p>
    </div>
  )
}
