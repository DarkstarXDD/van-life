import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
  const hostVanDetails = useOutletContext()

  return (
    <img src={hostVanDetails.imageUrl} alt="" className="hostvaninfo__image" />
  )
}
