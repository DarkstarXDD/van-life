import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
