import { useState, useEffect } from "react"
import { useSearchParams, Link } from "react-router-dom"
import { FaCircleXmark } from "react-icons/fa6"

import VanTile from "../../components/VanTile"

export default function Vans() {
  const [vans, setVans] = useState([])
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
  }, [])

  const [searchParams, setSearchParams] = useSearchParams()
  const selectedTypeFilter = searchParams.get("type")

  const filteredVans = selectedTypeFilter
    ? vans.filter((van) => van.type === selectedTypeFilter)
    : vans

  const vanElements = filteredVans.map((van) => {
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
        <div className="filter-buttons">
          <Link
            to="?type=simple"
            className="filter-button filter-button-simple"
          >
            Simple
          </Link>
          <Link
            to="?type=rugged"
            className="filter-button filter-button-rugged"
          >
            Rugged
          </Link>
          <Link
            to="?type=luxury"
            className="filter-button filter-button-luxury"
          >
            Luxury
          </Link>
          {selectedTypeFilter && (
            <Link to="." className="filter-button filter-button-clear">
              <FaCircleXmark />
              Clear filters
            </Link>
          )}
        </div>
        <div className="vans__wrapper">{vanElements}</div>
      </main>
    </>
  )
}
