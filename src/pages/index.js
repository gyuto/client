import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Events from "../components/events"
import alterPic from "../images/alter-close-medium.jpg"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`Gyuto`, `Gyuto Minnesota`, `Gyuto Foundation`]}
    />
    <div
      style={{
        marginBottom: 30,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 30,
          color: "white",
          padding: 20,
        }}
      >
        Gyuto Wheel of Dharma Monastery was created with the guidance and
        blessing of His Holiness the Fourteenth Dalai Lama of Tibet to share the
        wisdom teachings of Tibetan Buddhism. His Holiness bestowed the
        Monastery's mission and its name "Cho-Kor-Gon", Wheel of Dharma. We are
        located in Northeast Minneapolis, and all are welcome at our public
        events and weekly teachings.
      </div>
      <img
        style={{
          minWidth: "100%",
          minHeight: "100%",
        }}
        src={alterPic}
        alt="Alter"
      />
    </div>
    <Events />
  </Layout>
)

export default IndexPage
