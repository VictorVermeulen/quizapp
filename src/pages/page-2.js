import React from "react"
import { Link as ReachLink } from "gatsby"
import { Link, Text } from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Text>Hi from the second page</Text>
    <Link as={ReachLink} to="/" color="teal.500">
      Go back to the homepage
    </Link>
  </Layout>
)

export default SecondPage
