import React from "react"
import { events } from "./constants"
import Event from "./event"

export default () => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h2>Upcoming Events</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          // justifyContent: "space-evenly",
          justifyContent: "space-between",
        }}
      >
        {events.map(event => {
          return <Event event={event} key={event.name} />
        })}
      </div>
    </div>
  )
}
