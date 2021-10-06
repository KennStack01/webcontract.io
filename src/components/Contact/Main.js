import React from "react"
import Form from "./Form"

const Main = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl md:text-4xl font-semibold text-center my-2 md:my-4">
          🤝 Let's <span className="bg-turbo-500">Work Together</span>!
        </h1>
        <p className="text-md md:text-xl font-semibold text-center my-5 mx-5 md:mx-auto">
          From the Phone/Video Call to the Product💬
        </p>
      </div>

      <Form />
    </div>
  )
}

export default Main
