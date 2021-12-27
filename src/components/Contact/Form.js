import React from "react"

const Form = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mt-3">
        <span className="bg-turbo-500">Here we Gooooo! </span> 🚀
      </h1>
      <div className="flex items-center w-full">
        <div class="w-full bg-gray-100 rounded shadow py-8 px-2 m-4 md:max-w-sm md:mx-auto">
          <form
            class="mb-4 md:flex md:flex-wrap md:justify-between"
            action="https://getform.io/f/77973005-19c5-4317-a7d2-e188e55a8fe6"
            method="POST"
          >
            <div class="flex flex-col mb-4 md:w-full">
              <label
                className="mb-2 tracking-wide font-bold text-lg text-grey-darkest"
                for="name"
              >
                Your Name
              </label>
              <input
                className="border py-2 px-3 text-grey-darkest focus:outline-none focus:ring-2 focus:ring-turbo-600 focus:ring-opacity-50"
                type="text"
                name="name"
                id="name"
                placeholder="Kenn Stack"
                required
              />
            </div>
            <div class="flex flex-col mb-4 md:w-full">
              <label
                className="mb-2 font-bold text-lg text-grey-darkest"
                for="email"
              >
                Email Address
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
            {/* <div class="flex flex-col mb-4 md:w-full">
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
            </div> */}

            <label for="package" className="my-3 text-sm mx-auto">
              <select
                name="Package"
                id="Package"
                className="block bg-white border border-black-400 px-2 py-1 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-turbo-600 focus:ring-opacity-50 rounded cursor-pointer"
              >
                <option className="cursor-pointer">I choose Package 1</option>
                <option className="cursor-pointer">I choose Package 2</option>
                <option className="cursor-pointer">I choose Package 3</option>
                <option className="cursor-pointer">Business Contract</option>
                <option className="cursor-pointer">
                  SPECIAL Business Website + PWA
                </option>
              </select>
            </label>

            <div className="flex flex-col mt-3 md:w-full">
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
                placeholder="We are here to help you with your project. Please describe your project in small details."
                rows="4"
                required
              ></textarea>
            </div>
            <div
              className="g-recaptcha my-3 md:my-5 mx-auto"
              data-sitekey="6LdswdAdAAAAADUsguDB7MYQkYpmlmlB3wYNsKUk"
            ></div>

            <div className="mt-10 mx-auto">
              <button
                type="submit"
                className="bg-gun-powder-600 text-white font-bold py-4 md:py-2 px-6 text-xl hover:text-turbo-400"
              >
                Send🚀
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
