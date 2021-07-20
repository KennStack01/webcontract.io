import React from 'react'
import { Link } from 'gatsby'
// import Img from 'gatsby-image'

const BuiltProject = ({ImageSource, title, description, demoLink, slug}) => {
    return (
        <div className="flex flex-col md:flex-row md:mx-40 rounded-sm shadow-sm hover:shadow-md my-8">
            <div className="shadow">
                <img src={ImageSource} loading="lazy"/>
            </div>
            <div className="flex flex-col mx-5">
                <h1 className="text-md font-semibold mx-auto mt-4"> {title} </h1>
                <p className="text-sm font-medium my-4 text-justify"> { description } </p>
                <div className="flex flex-row justify-center my-6">
                    <a href={demoLink} target="_blank" rel="noreferrer" className="font-semibold p-2 bg-turbo-900 hover:text-turbo text-white mx-2"> Visit Website </a>
                    <Link to={`/${slug}`} className="font-semibold hover:underline bg-white shadow-sm p-2 mx-2"> Read More </Link>
                </div>
            </div>
        </div>
    )
}

export default BuiltProject
