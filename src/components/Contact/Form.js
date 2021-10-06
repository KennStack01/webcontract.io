import React from "react"

const Form = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mt-3">
        <span className="bg-turbo-500">Here we Gooooo! </span> 🚀
      </h1>
      <div className="flex items-center w-full">
        <div class="w-full bg-gray-100 rounded shadow p-8 m-4 md:max-w-sm md:mx-auto">
          <form
            class="mb-4 md:flex md:flex-wrap md:justify-between"
            method="post"
            action={`https://getform.io/f/09c7f2c7-1e46-443f-baf0-bb394a33cb78`}
          >
            <div class="flex flex-col mb-4 md:w-full">
              <label
                className="mb-2 tracking-wide font-bold text-lg text-grey-darkest"
                for="first_name"
              >
                Full Name
              </label>
              <input
                className="border py-2 px-3 text-grey-darkest focus:outline-none focus:ring-2 focus:ring-turbo-600 focus:ring-opacity-50"
                type="text"
                name="first_name"
                id="first_name"
                placeholder="Kenn Stack"
                required
              />
            </div>
            <div class="flex flex-col mb-4 md:w-full">
              <label
                className="mb-2 font-bold text-lg text-grey-darkest"
                for="email"
              >
                Email
              </label>
              <input
                className="border py-2 px-3 text-grey-darkest focus:outline-none focus:ring-2 focus:ring-turbo-600 focus:ring-opacity-50"
                type="email"
                name="email"
                id="email"
                placeholder="kennstack@gmail.com"
                required
              />
            </div>
            <div class="flex flex-col mb-4 md:w-full">
              <label
                className="mb-2 tracking-wide font-bold text-lg text-grey-darkest"
                for="business_name"
              >
                Business Name
              </label>
              <input
                className="border py-2 px-3 text-grey-darkest focus:outline-none focus:ring-2 focus:ring-turbo-600 focus:ring-opacity-50"
                type="text"
                name="business_name"
                id="business_name"
                placeholder="Modern Shop Company"
              />
            </div>
            <div class="flex flex-col mb-4 mx-auto md:w-full">
              <div class="mt-4">
                <span class="mb-2 font-bold text-lg text-grey-darkest">
                  Project Type
                </span>
                <div class="mt-2 grid grid-cols-2 text-sm font-normal">
                  <label class="inline-flex items-center ml-1">
                    <input
                      type="radio"
                      className="form-radio cursor-pointer"
                      name="accountType"
                      value="E-Commerce"
                    />
                    <span className="ml-2 cursor-pointer">E-Commerce</span>
                  </label>
                  <label class="inline-flex items-center ml-1">
                    <input
                      type="radio"
                      className="form-radio cursor-pointer"
                      name="accountType"
                      value="Marketing"
                    />
                    <span className="ml-2 cursor-pointer">Marketing</span>
                  </label>
                  <label class="inline-flex items-center ml-1">
                    <input
                      type="radio"
                      className="form-radio cursor-pointer"
                      name="accountType"
                      value="Business"
                    />
                    <span className="ml-2 cursor-pointer">Business</span>
                  </label>
                  <label class="inline-flex items-center ml-1">
                    <input
                      type="radio"
                      className="form-radio cursor-pointer"
                      name="accountType"
                      value="Product"
                    />
                    <span className="ml-2 cursor-pointer">Product</span>
                  </label>
                  <label class="inline-flex items-center ml-1">
                    <input
                      type="radio"
                      className="form-radio cursor-pointer"
                      name="accountType"
                      value="Landing"
                    />
                    <span className="ml-2 cursor-pointer">Landing Page</span>
                  </label>
                  <label class="inline-flex items-center ml-1">
                    <input
                      type="radio"
                      className="form-radio cursor-pointer"
                      name="accountType"
                      value="Other"
                    />
                    <span className="ml-2 cursor-pointer">Other Type</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-6 md:w-full">
              <label
                className="mb-2 font-bold text-lg text-grey-darkest"
                for="message"
              >
                How can we help?
              </label>
              <textarea
                name="message"
                id="message"
                className="resize-none p-2 h-36 border rounded focus:outline-none focus:ring-2 focus:ring-turbo-600 focus:ring-opacity-50"
                placeholder="We are here to help you with your project. Please describe your project in small detail."
                rows="4"
                required
              ></textarea>
            </div>

            <div className="mt-10 mx-auto">
              <button
                type="submit"
                className="bg-gun-powder-600 text-white font-bold py-4 md:py-2 px-6 text-xl hover:text-turbo-400"
              >
                Let's Go🚀
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
