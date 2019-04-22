import React from "react"
import styled from "styled-components"

const LinkStyle = styled.button`
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`

const MenuItem = ({ name, link }) => {
  return (
    <div
      style={{
        margin: "0 10px",
      }}
    >
      <LinkStyle as="a" href={link}>
        {name}
      </LinkStyle>
    </div>
  )
}

export default MenuItem
