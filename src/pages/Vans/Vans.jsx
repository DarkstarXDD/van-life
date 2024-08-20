import { useState, useEffect } from "react"

import VanTile from "../../components/VanTile"

export default function Vans() {
  const [vans, setVans] = useState([])

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
  }, [])

  const vanElements = vans.map((van) => {
    return (
      <VanTile
        key={van.id}
        id={van.id}
        name={van.name}
        price={van.price}
        imageUrl={van.imageUrl}
        type={van.type}
      />
    )
  })

  return (
    <>
      <main className="main main--vans">
        <h1 className="vans__heading">Explore Our Van Options</h1>
        <div className="vans__wrapper">{vanElements}</div>
      </main>
    </>
  )
}
