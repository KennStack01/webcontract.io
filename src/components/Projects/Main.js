import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import BuiltProject from './BuiltProject'
import { 
    SiShopify, 
    SiNetlify, 
    SiReact, 
    SiGatsby, 
    SiNextDotJs,
    SiTailwindcss,
    SiFigma,
    SiVisualstudiocode

} from 'react-icons/si'

import { IoLogoVercel } from 'react-icons/io' 

const Main = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsProject(sort: {order: DESC, fields: dateOfLaunch}) {
                edges {
                    node {
                        generalPreviewPicture {
                            fluid {
                                src
                            }
                        }
                        projectName
                        projectDescription
                        demoProjetLink
                        slug
                    }
                }
            }    
        }
    `)

    const allProjects = data.allDatoCmsProject.edges.map(({node}) => node)

    return (
        <div className="mt-5 relative">
            <div className="my-6">
                <h1 className="font-semibold text-2xl md:text-3xl md:mt-10">
                    🎮 What's inside our Toolbox  <br /> 
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-3 place-items-center font-medium text-5xl md:text-7xl text-turbo-900 mt-6 md:mt-10 bg-gray-300 w-full h-auto">
                    <div className="m-3 flex flex-row">
                        <SiShopify />
                        <h1 className="text-sm md:text-xl my-auto font-medium">Headless Shopify </h1>
                    </div>
                    <div className="m-3 flex flex-row">
                        <SiNetlify className="mr-4" />
                        <h1 className="text-sm md:text-xl my-auto font-medium"> Netlify </h1>
                    </div>
                    <div className="m-3 flex flex-row">
                        <SiReact className="mr-4"/>
                        <h1 className="text-sm md:text-xl my-auto font-medium"> React JS </h1>
                    </div>
                    <div className="m-3 flex flex-row">
                        <SiGatsby className="mr-4"/>
                        <h1 className="text-sm md:text-xl my-auto font-medium"> Gatsby JS </h1>
                    </div>
                    <div className="m-3 flex flex-row">
                        <SiNextDotJs className="mr-4"/>
                        <h1 className="text-sm md:text-xl my-auto font-medium"> Next JS </h1>
                    </div>
                    <div className="m-3 flex flex-row">
                        <SiTailwindcss className="mr-4"/>
                        <h1 className="text-sm md:text-xl my-auto font-medium"> Tailwind CSS </h1>
                    </div>
                    <div className="m-3 flex flex-row">
                        <SiFigma className="mr-4"/>
                        <h1 className="text-sm md:text-xl my-auto font-medium"> Figma </h1>
                    </div>
                    <div className="m-3 flex flex-row">
                        <SiVisualstudiocode className="mr-4"/>
                        <h1 className="text-sm md:text-xl my-auto font-medium"> VS Code </h1>
                    </div>
                    <div className="m-3 mx-auto">
                        {/* <SiVisualstudiocode className="mr-4"/> */}
                        <h1 className="text-xl font-semibold"> + Headless CMS for Your Data </h1>
                    </div>
                </div>
            </div>


            <div className="my-8">
                <h1 className="font-semibold text-2xl md:text-3xl md:mt-10">
                    ⛳ What We have built  <br /> 
                </h1>
                <p className="font-medium text-lg md:text-2xl mt-6 md:mt-10">
                    We Design, Build and Ship🎊
                </p>
            </div>

            {allProjects.map((project) => (
                <div>
                    <BuiltProject 
                        ImageSource={ project.generalPreviewPicture.fluid.src } 
                        title={ project.projectName } 
                        description={ project.projectDescription } 
                        demoLink={ project.demoProjetLink } 
                        slug={  project.slug } 
                    />
                </div>
            ))}
            <h1 className="my-15 md:px-4 px-2 py-3 bg-turbo-500 mx-8 md:mx-40 text-md md:text-2xl font-semibold">Interested? Contact <span className="border-transparent border-b-2 border-turbo-900"> <Link to="/contact">webcontract</Link></span>.  We’re available 24h/7😎</h1>

            <div className="mt-5 mb-20">
                <Link to="/contact" className="bg-gun-powder-600 text-white font-bold py-4 md:py-2 px-6 text-2xl my-10 hover:text-turbo-400">Let's Talk 😃</Link>
            </div>
        </div>
    )
}

export default Main