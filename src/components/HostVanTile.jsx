import { Link } from "react-router-dom"

export default function HostVanTile({ id, imageUrl, name, price }) {
  return (
    <div className="hostvantile">
      <img src={imageUrl} alt="" className="hostvantile__img" />
      <h2 className="hostvantile__name">
        <Link to={`/host/vans/${id}`} className="hostvantile__link">
          {name}
        </Link>
      </h2>
      <p className="hostvantile__price">${price}/day</p>
    </div>
  )
}
