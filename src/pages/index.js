import React from "react"

import Layout from "../components/layout"
import Presentation from "../components/presentation"
import Travaux from "../components/travaux"
import SEO from "../components/seo"
import Activites from "../components/activites"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Presentation/>
		<Travaux/>
		<Activites/>
	</Layout>
)

export default IndexPage
