import React from "react"
import { Link } from "gatsby"
// import Img from 'gatsby-image'

const BuiltProject = ({ imageSource, title, description, demoLink, slug }) => {
  return (
    <div className="flex flex-col md:flex-row mx-3 md:mx-40 rounded-sm shadow hover:shadow-lg my-8 py-1">
      <div className="h-auto md:w-1/2 ml-3">
        <Link to={`/projects/${slug}`}>
          <img src={imageSource} placeholder="blur" />
        </Link>
      </div>
      <div className="flex flex-col mx-3 md:mx-5 my-auto">
        <h1 className="text-lg font-semibold mx-auto"> {title} </h1>
        <p className="text-sm font-normal md:font-medium my-4 text-justify">
          {" "}
          {description}{" "}
        </p>
        <div className="flex flex-row justify-center my-6">
          <a
            href={demoLink}
            target="_blank"
            rel="noreferrer"
            className="font-semibold p-2 bg-turbo-900 hover:text-turbo text-white mx-2"
          >
            {" "}
            Visit Website{" "}
          </a>
          <Link
            to={`/projects/${slug}`}
            className="font-semibold hover:underline bg-white shadow-sm p-2 mx-2"
          >
            {" "}
            Read More{" "}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BuiltProject
