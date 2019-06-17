import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import center from '../images/gyuto-india.jpg'

const History = () => (
	<Layout>
		<SEO title='Gyuto Wheel of Dharma Monastery | History' />
		<h1>History</h1>
		<img src={center} alt={`Center interior`} />
		<p>
			One of the two great monasteries of the Gelug-pa lineage in Tibetan
			Tantric Buddhism, Gyuto Tantric University was established in 1475
			by Jetsun Kunga Dhondup. Gyuto became one of only two major colleges
			of advanced tantric studies and philosophy. In Tibet's capital city,
			Lhasa, the Gyuto Monastery's seat was the central cathedral until
			1959 when their famous Ramoche temple was desecrated and the
			population of nine hundred monks decimated. In 1959, only about
			sixty Gyuto monks escaped to India with the Dalai Lama, bringing a
			few precious texts and their wealth of memorized scholarship with
			them. Many lost their lives on the journey into exile. Throughout
			the past fourty plus years, while enduring serious privation as
			refugees, they have preserved the ancient traditions and carefully
			rebuilt their monastic community to today's number of over four
			hundred monks in India. The older monks strive to pass on the
			teachings to the young refugee monks still pouring out of occupied
			Tibet into Nepal and India.
		</p>
		<p>
			The Gyuto monks still practice the major tantric texts of
			Guhyasamaja, Chakrasambara, the Yamantaka Tantras, and many others.
			Several elder monks from the original Ramoche cathedral have played
			an important part in the establishment of the Gyuto wheel of Dharma
			Monastery and are much loved teachers and spiritual friends to the
			community. Gyuto Wheel of Dharma Monastery is part of a larger
			cultural preservation effort whereby a new generation of young Gyuto
			monks continue the unbroken Dharma lineage and offer the promise
			that the sacred teachings will not be lost.
		</p>
		<Link to='/'>Go back to the homepage</Link>
	</Layout>
)

export default History
