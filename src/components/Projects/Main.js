import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import BuiltProject from "./BuiltProject"

const Main = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsProject(sort: { order: DESC, fields: dateOfLaunch }) {
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

  const allProjects = data.allDatoCmsProject.edges.map(({ node }) => node)

  return (
    <div className="mt-5 relative">
      <div>
        <h1 className="text-xl md:text-3xl">
          We become Partners by Working Together
        </h1>
      </div>
      <div className="my-8">
        <h1 className="font-semibold text-2xl md:text-3xl md:mt-10">
          ⛳ What We have built <br />
        </h1>
        <p className="font-medium text-lg md:text-2xl mt-6 md:mt-10">
          We Design, Build and Ship🎊
        </p>
      </div>

      {allProjects.map(project => (
        <div className="md:my-8 my-4">
          <BuiltProject
            imageSource={project.generalPreviewPicture.fluid.src}
            key={project.projectName}
            title={project.projectName}
            description={project.projectDescription}
            demoLink={project.demoProjetLink}
            slug={project.slug}
          />
        </div>
      ))}
      <h1 className="my-15 md:px-4 px-2 py-3 bg-turbo-500 mx-8 md:mx-40 text-md md:text-2xl font-semibold">
        Interested? Contact{" "}
        <span className="border-transparent border-b-2 border-turbo-900">
          {" "}
          <Link to="/contact">webcontract</Link>
        </span>
        . We’re available
      </h1>

      <div className="mt-5 mb-20">
        <Link
          to="/contact"
          className="bg-gun-powder-600 text-white font-bold py-4 md:py-2 px-6 text-2xl my-10 hover:text-turbo-400"
        >
          Let's Talk 😃
        </Link>
      </div>
    </div>
  )
}

export default Main
