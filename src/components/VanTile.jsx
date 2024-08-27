import { Link } from "react-router-dom"
import VanType from "./VanType"

export default function VanTile({ imageUrl, name, price, type, id }) {
  return (
    <div className="vantile">
      <img src={imageUrl} alt="" className="vantile__img" />
      <div className="vantile__name-price-wrapper">
        <h3 className="vantile__name">
          <Link to={`${id}`} className="vantile__link">
            {name}
          </Link>
        </h3>

        <p className="vantile__price">
          <span>${price}</span>/day
        </p>
      </div>
      <VanType type={type} />
    </div>
  )
}
