import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Welcome to the Dynasty League</h1>
    <StaticImage
      src="../images/nwo-wolfpac.jpg"
      alt="NWO"
      placeholder="blurred"
      layout="fixed"
      width={400}
      height={300}
    />
    <h2>Rules</h2>
    <iframe src="https://docs.google.com/document/d/e/2PACX-1vRBkwLVDLSQVJBjEKXJEunRAbfKysWMQv3YxaBJKRt4LLqFwdsI8BY9vRe-jYKS-yY6mzs9fOfZruJ3/pub?embedded=true"></iframe>
  </Layout>
)

export default IndexPage
