import React from "react"

import Layout from "../components/layout"
import Presentation from "../components/presentation"
import Travaux from "../components/travaux"
import SEO from "../components/seo"
import Activites from "../components/activites"
import Contact from "../components/contact"

const IndexPage = () => (
	<Layout>
		<SEO title="Kolorisol" />
		<Presentation/>
		<Travaux/>
		<Activites/>
		<Contact/>
	</Layout>
)

export default IndexPage
