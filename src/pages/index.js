import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <p>Our site is under construction. Please check back later.</p>
    <p>
      Reach us at{" "}
      <a href="mailto:info@gyutofoundation.org">info@gyutofoundation.org</a>.
    </p>
    <p>
      Visit us at{" "}
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.google.com/maps/place/2601+NE+Taylor+St,+Minneapolis,+MN+55418/@45.015186,-93.245637,17z/data=!3m1!4b1!4m5!3m4!1s0x52b32dc224fbe3cb:0x9641501349061f2c!8m2!3d45.015186!4d-93.243443"
      >
        2601 Taylor St. NE, Minneapolis, MN 55418,
      </a>
    </p>
  </Layout>
)

export default IndexPage
