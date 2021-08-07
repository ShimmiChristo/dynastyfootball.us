import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <StaticImage
      src="../images/nwo-wolfpac.jpg"
      alt="NWO"
      placeholder="blurred"
      layout="fixed"
      width={300}
      height={200}
    />
    <br />
    <br />
    <h2>Dynasty Rules</h2>
    <iframe class="iframe-dynasty-rules" src="https://docs.google.com/document/d/e/2PACX-1vRBkwLVDLSQVJBjEKXJEunRAbfKysWMQv3YxaBJKRt4LLqFwdsI8BY9vRe-jYKS-yY6mzs9fOfZruJ3/pub?embedded=true"></iframe>
  </Layout>
)

export default IndexPage
