import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Events from "../components/events"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`Gyuto`, `Gyuto Minnesota`, `Gyuto Foundation`]}
    />
    <Events />
  </Layout>
)

export default IndexPage
