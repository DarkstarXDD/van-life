import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
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

  function handleFilterChange(key, value) {
    setSearchParams((prevSearchParams) => {
      if (value === null) {
        prevSearchParams.delete(key)
      } else {
        prevSearchParams.set(key, value)
      }
      return prevSearchParams
    })
  }

  return (
    <>
      <main className="main main--vans">
        <h1 className="vans__heading">Explore Our Van Options</h1>
        <div className="filter-buttons">
          <button
            onClick={() => handleFilterChange("type", "simple")}
            className={`filter-button filter-button-simple ${selectedTypeFilter === "simple" ? "selected" : ""}`}
          >
            Simple
          </button>
          <button
            onClick={() => handleFilterChange("type", "rugged")}
            className={`filter-button filter-button-rugged ${selectedTypeFilter === "rugged" ? "selected" : ""}`}
          >
            Rugged
          </button>
          <button
            onClick={() => handleFilterChange("type", "luxury")}
            className={`filter-button filter-button-luxury ${selectedTypeFilter === "luxury" ? "selected" : ""}`}
          >
            Luxury
          </button>
          {selectedTypeFilter && (
            <button
              onClick={() => handleFilterChange("type", null)}
              className="filter-button filter-button-clear"
            >
              <FaCircleXmark />
              Clear filter
            </button>
          )}
        </div>
        <div className="vans__wrapper">{vanElements}</div>
      </main>
    </>
  )
}
