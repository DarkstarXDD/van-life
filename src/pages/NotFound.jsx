import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <main className="main main--notfound">
      <h1 className="notfound__heading">
        Sorry, the page you were looking for was not found.
      </h1>
      <Link to="/" className="notfound__button">
        Return to home
      </Link>
    </main>
  )
}
