import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import logo from "../images/gyuto-logo.png"

const HeaderText = styled.section`
  text-align: left;
  @media (max-width: 799px) {
    text-align: center;
  }
`
const HeaderDiv = styled.section`
  margin-bottom: 1.45rem;
  border-bottom: 2px solid gold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 799px) {
    padding-bottom: 10px;
  }
`
const Logo = styled.section`
  width: 150px;
  margin-right: 20px;
  height: 150jpx;
  @media (max-width: 799px) {
    margin-right: 0;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderDiv className="bg-scarlet" style={{}}>
    <Logo>
      <img
        style={{
          height: 130,
          marginTop: 10,
        }}
        src={logo}
        alt="Gyuto Wheel of Dharma Monastery"
      />
    </Logo>

    <HeaderText>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            lineHeight: 1.5,
          }}
        >
          རྒྱུད་སྟོད་ཆོས་འཁོར་དགོན་།
        </Link>
      </h1>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            lineHeight: 1.5,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </HeaderText>
  </HeaderDiv>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
