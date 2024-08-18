import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <main className="main main--home">
        <div className="home__content-wrapper">
          <h1 className="home__heading">
            You got the travel plans, we got the travel vans.
          </h1>
          <p className="home__text">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
        </div>
        <Link to="/vans" className="home__button">
          Find your van
        </Link>
      </main>
    </>
  )
}
