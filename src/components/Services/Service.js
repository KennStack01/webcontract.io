import React from 'react'

const Service = ({title, details}) => {
    return (
        <div className="shadow rounded mx-6 my-8 md:mx-20 p-5 hover:shadow-lg">
            <h1 className="text-xl font-semibold my-3"> {title} </h1>
            <p className="text-md font-normal my-6 text-justify"> {details} </p>
        </div>
    )
}

export default Service
