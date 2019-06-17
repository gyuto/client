import React from "react"
import MenuItem from "./components/menu-item"

const Menu = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: 30,
      }}
    >
      <MenuItem name="Home" link="/" />
      <MenuItem name="About" link="/about-gyuto" />
      <MenuItem name="History" link="/history" />
      <MenuItem
        name="Calendar"
        link="https://calendar.google.com/calendar/embed?src=gyuto.us@gmail.com&ctz=America/Chicago"
      />
    </div>
  )
}

export default Menu
