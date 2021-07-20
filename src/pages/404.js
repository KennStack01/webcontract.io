import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1 className="font-bold text-6xl mx-auto">404</h1>
    <p className="text-xl">You just hit a route that doesn&#39;t exist... 😃.</p>

    <div className="my-20">
      <Link to="/" className="p-4 my-10 font-semibold bg-turbo-900 text-white hover:text-turbo-900 hover:bg-turbo">Go to Home Page 🏡</Link>
    </div>
  </Layout>
)

export default NotFoundPage
