import React from 'react'
import Main from '../components/Contact/Main'
import Layout from '../components/layout'
import Seo from "../components/seo"


const contact = () => {
    return (
        <Layout>
            <Seo title="Contact" description="Quick Contact for Business" />
            <Main/>
        </Layout>
    )
}

export default contact
