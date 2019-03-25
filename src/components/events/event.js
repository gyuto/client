import React from "react"

export default ({ event }) => {
  return (
    <div
      style={
        {
          //  display: "inline-block"
        }
      }
    >
      <div
        style={{
          width: 400,
          height: 250,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={event.pic} alt={event.name} />
      </div>
      <h3>{event.name}</h3>
    </div>
  )
}
