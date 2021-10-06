import React from "react"
import { Link } from "gatsby"

const Package = ({ title, description = [], lowestPrice, btnText }) => {
  return (
    <div className="flex flex-col mx-5 bg-gray-50 shadow-sm md:shadow rounded p-4 my-4">
      <h1 className="text-lg md:text-xl font-bold">{title}</h1>
      <div className="my-1 md:my-3 text-left">
        {description.map(item => (
          <p className="text-sm md:text-md my-1 md:my-2 font-medium md:font-semibold">
            {" "}
            • {item}
          </p>
        ))}
      </div>
      {/* <p> {description} </p> */}
      <Link
        to="/contact"
        className="bg-gun-powder-600 rounded text-white font-bold p-2 mx-5 text-md my-2 hover:text-turbo-400"
      >
        {btnText}
      </Link>
      <p className="text-sm text-gray-600 text-center"> From {lowestPrice}</p>
    </div>
  )
}

export default Package
