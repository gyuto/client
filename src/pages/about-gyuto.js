import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import center from "../images/center-interior.jpg"

const About = () => (
  <Layout>
    <SEO title="Gyuto Wheel of Dharma Monastery | About" />
    <h1>About Gyuto</h1>
    <img src={center} alt={`Center interior`} />
    <p>
      Created with the guidance and blessing of His Holiness the Fourteenth
      Dalai Lama of Tibet, the Gyuto Wheel of Dharma Monastery was established
      in Minneapolis, Minnesota, to share the wisdom teachings of Tibetan
      Buddhism while preserving Tibet's great monastic traditions and unique
      culture in exile. His Holiness bestowed the Monastery's mission and its
      name (Tibetan: Cho-Kor-Gon, or "Wheel of Dharma"). Gyuto Wheel of Dharma
      Monastery bears the distinction of being the first western branch of
      Tibet's Gyuto Monastery, an ancient institution whose monks hold a rare
      unbroken lineage of tantric Buddhist teachings. This pure Dharma wisdom
      has been handed down uninterrupted through the generations of great
      Tibetan and Indian masters, directly from the teachings of the historical
      Buddha himself. The daily life of a Gyuto monk is one of continous
      Buddhist practice of awareness, compassion and lovingkindness cultivated
      for the benefit of all sentient beings. The monks achieve this through
      joyous effort, prayer, meditation, generosity, and through the skillful
      application of the tantric arts and tantric wisdom-view. Visitors
      experience the Monastery's peaceful atmosphere as a reflection of the
      Buddha's teachings and of the monks' openhearted practice of their
      monastic vows. The Gyuto monks' meditation practices include the Buddhist
      ritual arts for which they are famous: The unique and powerful multiphonic
      chanting of prayers, elaborate butter sculptures of Buddhist images, and
      the creation of very intricate, impermanent sand mandalas. Traditionally,
      Tibetan tantric monks are believed to effect healing through their ritual
      activities. Their harmonic chanting is said to activate the body and mind
      to transcend mundane "discriminative" thought, and to bring about an
      integrated state of enlightenment. Tantric ritual practices are always
      performed as blessing ceremonies for the earth and all beings. The Gyuto
      monks are well known in Tibet and admired in the exile Tibetan community
      for their living example of spiritual ideals. In the west, the Gyuto monks
      first shared a glimpse of their sacred rituals in 1967, when, with
      permission of the elder Tibetan religious masters, they embarked on their
      first world tour. The transcendent beauty of their chants, combined with
      the dramatic power of traditional monastic dance, has inspired and
      transformed audiences all over the world. In Minnesota, the monks of Gyuto
      Wheel of Dharma share their extraordinary heritage by serving the second
      largest community of Tibetan-Americans in the U.S., as well as western
      students of Buddhism and Tibetan culture. Their days at the Monastery are
      spent in prayer, solitude and service. All are welcome at the Monastery's
      public events and weekly teachings.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
