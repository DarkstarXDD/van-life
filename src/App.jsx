import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainLayout from "./layouts/MainLayout"
import HostLayout from "./layouts/HostLayout"

import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"

import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import HostVans from "./pages/Host/HostVans"
import Reviews from "./pages/Host/Reviews"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
