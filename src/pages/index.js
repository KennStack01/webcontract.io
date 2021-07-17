import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import HeroSection from "../components/Home/HeroSection"
import Main from "../components/Home/Main"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <Main/>
  </Layout>
)

export default IndexPage
