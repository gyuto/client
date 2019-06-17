<<<<<<< HEAD
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Events from '../components/events'
import alterPic from '../images/alter-close-medium.jpg'
import flyer from '../images/amitayus-flyer.jpeg'

const TextStyle = styled.div`
	color: white;
	position: absolute;
	bottom: 30px;
	padding: 30px;
`
const HiddenOnMobile = styled.section`
	@media (max-width: 499px) {
		display: none;
	}
`

const IndexPage = () => (
	<Layout>
		<SEO
			title='Home'
			keywords={[`Gyuto`, `Gyuto Minnesota`, `Gyuto Foundation`]}
		/>
		<div
			style={{
				marginBottom: 30,
				position: 'relative',
			}}
		>
			<TextStyle>
				Gyuto Wheel of Dharma Monastery was created with the guidance
				and blessing of His Holiness the Fourteenth Dalai Lama of Tibet
				to share the wisdom teachings of Tibetan Buddhism.
				<HiddenOnMobile>
					His Holiness bestowed the Monastery's mission and its name
					"Cho-Kor-Gon", Wheel of Dharma. We are located in Northeast
					Minneapolis, and all are welcome at our public events and
					weekly teachings.
				</HiddenOnMobile>
			</TextStyle>
			<img
				style={{
					minWidth: '100%',
					minHeight: '100%',
				}}
				src={alterPic}
				alt='Alter'
			/>
		</div>

		<Events />
		<div
			style={{
				textAlign: 'center',
			}}
		>
			<img src={flyer} alt='Upcoming events' />
		</div>
	</Layout>
=======
import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Events from "../components/events"
import alterPic from "../images/alter-close-medium.jpg"

const TextStyle = styled.div`
  color: white;
  position: absolute;
  bottom: 30px;
  padding: 30px;
`
const HiddenOnMobile = styled.section`
  @media (max-width: 499px) {
    display: none;
  }
`

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
      <TextStyle>
        Gyuto Wheel of Dharma Monastery was created with the guidance and
        blessing of His Holiness the Fourteenth Dalai Lama of Tibet to share the
        wisdom teachings of Tibetan Buddhism.
        <HiddenOnMobile>
          His Holiness bestowed the Monastery's mission and its name
          "Cho-Kor-Gon", Wheel of Dharma. We are located in Northeast
          Minneapolis, and all are welcome at our public events and weekly
          teachings.
        </HiddenOnMobile>
      </TextStyle>
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
>>>>>>> 60c8fefbafd41b329c1315d15bdba518e9c738bb
)

export default IndexPage
