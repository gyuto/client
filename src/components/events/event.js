import React from "react"
import styled from "styled-components"

const Img = styled.section`
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`

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
        <Img>
          <img src={event.pic} alt={event.name} />
        </Img>
      </div>
      <h2
        style={{
          margin: "20px 0",
          lineHeight: 1.3,
        }}
      >
        {event.name}
      </h2>
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
