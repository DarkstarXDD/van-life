export default function VanType({ type }) {
  let color = ""
  if (type === "simple") {
    color = "orange"
  } else if (type === "luxury") {
    color = "black"
  } else {
    color = "green"
  }

  return (
    <p className={`vantype vantype--bg-${color}`}>
      {type && type.charAt(0).toUpperCase() + type.slice(1)}
    </p>
  )
}
