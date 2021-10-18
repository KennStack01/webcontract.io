import React from "react"
import { Link } from "gatsby"

const SpecialPackage = ({ title, description = [], lowestPrice, btnText }) => {
  return (
    <div className="flex flex-col mx-5 bg-gun-powder-600 text-white shadow-sm md:shadow rounded p-4 my-4">
      <h1 className="text-lg md:text-xl font-bold font-sans my-3">{title}</h1>
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
        className="bg-blue-600 hover:bg-blue-700 rounded text-white font-bold p-2 mx-5 text-md my-2"
      >
        {btnText}
      </Link>
      <p className="text-sm text-gray-100 text-center"> From {lowestPrice}</p>
    </div>
  )
}

export default SpecialPackage
