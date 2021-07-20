import React from 'react'
import Layout from "../layout"
import Seo from '../Seo'
import { Link, graphql } from "gatsby"


const Template = ({ data }) => {
    return (
        <Layout>
            <Seo title="Project Details" />
            {/* Content for our Project */}

            <h1 className="font-semibold text-xl mx-auto mt-8">Project: 💎 { data.datoCmsProject.projectName } </h1>

            <div className="mt-1 h-auto w-auto md:mx-40">
                <img src={ data.datoCmsProject.generalPreviewPicture.fluid.src } loading="lazy"/>
            </div>

            <div className="md:grid grid-cols-3 justify-center mx-auto md:ml-20">
                <div className="flex flex-col my-8 mx-2 p-2 md:p-4 md:w-80 h-auto shadow rounded-sm">
                    <h1 className="font-semibold bg-blue-600 text-white">Business Description</h1>
                    <p className="text-justify font-normal  my-5"> { data.datoCmsProject.projectDescription } </p>
                </div>
                <div className="flex flex-col my-8 mx-2 p-2 md:p-4 md:w-80 shadow rounded-sm">
                    <h1 className="font-semibold bg-red-700 text-white">Business Problem</h1>
                    <p className="text-justify font-normal  my-5"> { data.datoCmsProject.businessProblem } </p>
                </div>
                <div className="flex flex-col my-8 mx-2 p-2 md:p-4 md:w-80 shadow rounded-sm">
                    <h1 className="font-semibold bg-turbo">Provided Solution</h1>
                    <p className="text-justify font-normal my-5"> { data.datoCmsProject.providedSolution } </p>
                </div>
            </div>


            <div className="mx-auto mt-10 mb-14">
                <a href={ data.datoCmsProject.demoProjetLink } target="_blank" rel="noreferrer" className="font-semibold text-lg p-4 bg-turbo-900 hover:text-turbo text-white mx-2"> 👉 Visit Website </a>
            </div>
            <h1 className="my-15 md:px-4 px-2 py-3 bg-turbo-500 mx-8 md:mx-40 text-md md:text-2xl font-semibold">Interested? Contact <span className="border-transparent border-b-2 border-turbo-900"> <Link to="/contact">webcontract</Link></span>.  We’re available 24h/7😎</h1>

            <div className="mt-5 mb-20">
                <Link to="/contact" className="bg-gun-powder-600 text-white font-bold py-4 md:py-2 px-6 text-2xl my-10 hover:text-turbo-400">Let's Talk 😃</Link>
            </div>
        </Layout>
    )
}

export default Template

export const query = graphql`
    query($slug: String!) {
        datoCmsProject(slug: {eq: $slug}) {
            projectName
            projectDescription
            businessProblem
            providedSolution
            generalPreviewPicture {
                fluid {
                    src
                }
            }
            demoProjetLink
            slug
        }
    }

`
