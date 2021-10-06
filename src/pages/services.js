import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Main from "../components/Services/Main"

const services = () => {
  return (
    <Layout>
      <Seo
        title="Services"
        description="Scalable and Secure Marketing Business Websites for Your Business, Company, Startup. Freelance Web Development"
      />
      <Main />
    </Layout>
  )
}

export default services
