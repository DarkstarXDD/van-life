import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
  const hostVanDetails = useOutletContext()

  function firstLetterUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <div className="hostvaninfo__wrapper">
      <p className="hostvaninfo__item">
        Name: <span>{hostVanDetails.name}</span>
      </p>
      <p className="hostvaninfo__item">
        Category:{" "}
        <span>
          {hostVanDetails.type && firstLetterUpperCase(hostVanDetails.type)}
        </span>
      </p>
      <p className="hostvaninfo__item">
        Description: <span>{hostVanDetails.description}</span>
      </p>
      <p className="hostvaninfo__item">
        Visibility: <span>Public</span>
      </p>
    </div>
  )
}
