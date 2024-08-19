import React from "react"

export default function HostVans() {
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => console.log(data))
  })

  return <h1>Host Vans Page</h1>
}
