import React from 'react'
import Layout from '../components/layout'
import Seo from "../components/seo"
import Main from '../components/Services/Main'


const services = () => {
    return (
        <Layout>
            <Seo title="Services" description="Discover our Services"/>
            <Main/>
        </Layout>
    )
}

export default services
