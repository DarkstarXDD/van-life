import { useOutletContext } from "react-router-dom"

export default function HostVanPricing() {
  const hostVanDetails = useOutletContext()

  return (
    <p className="hostvaninfo__pricing">
      ${hostVanDetails.price}.00
      <span>/day</span>{" "}
    </p>
  )
}
