import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import HeroSection from "../components/Home/HeroSection"
import Main from "../components/Home/Main"

const IndexPage = () => (
  <Layout>
    <Seo
      title="Welcome"
      description="Scalable and Secure Marketing Business Websites for Your Business, Company, Startup. Freelance Web Development"
    />
    <HeroSection />
    <Main />
  </Layout>
)

export default IndexPage
