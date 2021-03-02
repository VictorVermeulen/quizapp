import React from "react"
import { Link as ReachLink } from "gatsby"
import { Link } from "@chakra-ui/core"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MainQuiz from "../components/mainquiz"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainQuiz />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link as={ReachLink} to="/page-2/" color="teal.500">
      Go to page 2
    </Link>
  </Layout>
)

export default IndexPage
