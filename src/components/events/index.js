import React from "react"
import styled from "styled-components"
import { events } from "./constants"
import Event from "./event"

const EventContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 850px) {
    justify-content: center;
  }
`
export default () => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h2>Upcoming Events</h2>
      <EventContainer>
        {events.map(event => {
          return <Event event={event} key={event.name} />
        })}
      </EventContainer>
    </div>
  )
}
