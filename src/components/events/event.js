import React from "react"

export default ({ event }) => {
  return (
    <div
      style={{
        width: 400,
        margin: "20px 0",
      }}
    >
      <div
        style={{
          height: 250,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={event.pic} alt={event.name} />
      </div>
      <h3
        style={{
          margin: "10px 0",
        }}
      >
        {event.name}
      </h3>
      <p>
        <b>{event.date}</b>, {event.time}
        <br />
        Location:{" "}
        <a href={event.location.googleMapLink} target="_blank">
          {event.location.address}
        </a>
        <br />
        <span
          style={{
            color: "#6a6a6a",
          }}
        >
          {event.moreInfo}
        </span>
      </p>
    </div>
  )
}
