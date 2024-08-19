import { Link } from "react-router-dom"

export default function About() {
  return (
    <>
      <main className="main main--about">
        <img
          src="/assets/images/about-img.webp"
          alt="Person sitting on top of a van, looking up at the night sky"
        />
        <div className="about__content-wrapper">
          <h1 className="about__heading">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
          <div className="about__section">
            <p className="about__section-text">Your destination is waiting.</p>
            <p className="about__section-text">Your van is ready.</p>
            <Link className="about__button" to="/vans">
              Explore our vans
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
