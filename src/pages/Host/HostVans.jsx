import { useState, useEffect } from "react"
import HostVanTile from "../../components/HostVanTile"

export default function HostVans() {
  const [hostVans, setHostVans] = useState([])

  useEffect(() => {
    fetch("/api/vans/hostvans")
      .then((res) => res.json())
      .then((data) => setHostVans(data.vans))
  }, [])

  const hostVanElements = hostVans.map((hostVan) => {
    return (
      <HostVanTile
        key={hostVan.id}
        id={hostVan.id}
        imageUrl={hostVan.imageUrl}
        name={hostVan.name}
        price={hostVan.price}
      />
    )
  })

  return (
    <div className="hostvans">
      <h1 className="hostvans__heading">Your listed vans</h1>
      <div className="hostvans__wrapper">{hostVanElements}</div>
    </div>
  )
}
