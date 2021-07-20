import React from 'react'
import Layout from '../components/layout'
import Main from '../components/Projects/Main'
import Seo from "../components/seo"



const projects = () => {
    return (
        <Layout>
            <Seo title="Projects" description="Built by WebContract" />
            <Main/>
        </Layout>
    )
}

export default projects
