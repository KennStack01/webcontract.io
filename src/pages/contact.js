import React from "react"
import Main from "../components/Contact/Main"
import Layout from "../components/layout"
import Seo from "../components/seo"

const contact = () => {
  return (
    <Layout>
      <Seo
        title="Contact"
        description="Scalable and Secure Marketing Business Websites for Your Business, Company, Startup. Freelance Web Development"
      />
      <Main />
    </Layout>
  )
}

export default contact
