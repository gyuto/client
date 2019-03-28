import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import logo from "../images/gyuto-logo.png"

const Header = ({ siteTitle }) => (
  <header
    className="bg-scarlet"
    style={{
      marginBottom: `1.45rem`,
      borderBottom: "2px solid gold",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
    }}
  >
    <div
      style={{
        width: 150,
        height: 150,
      }}
    >
      <img
        style={{
          height: 130,
          marginTop: 10,
        }}
        src={logo}
        alt="Gyuto Wheel of Dharma Monastery"
      />
    </div>
    <div
      style={{
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        textAlign: "center",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
