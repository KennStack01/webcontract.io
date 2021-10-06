import React from "react"
import Layout from "../components/layout"
import Main from "../components/Projects/Main"
import Seo from "../components/seo"

const projects = () => {
  return (
    <Layout>
      <Seo
        title="Projects"
        description="Scalable and Secure Marketing Business Websites for Your Business, Company, Startup. Freelance Web Development"
      />
      <Main />
    </Layout>
  )
}

export default projects
