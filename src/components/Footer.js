import React from "react"
import { Link } from "gatsby"

import { IoLogoTwitter, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5"

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between bg-gun-powder-600 py-10 px-3 md:p-4 w-full text-white">
      {/* Logos Social Media */}
      <div className="flex flex-row justify-evenly md:justify-evenly mb-5 md:my-auto font-semibold">
        <a
          href="https://www.linkedin.com/in/kennkibadi/"
          target="__blank"
          className="flex flex-row justify-center mx-3 text-white hover:text-turbo-500"
        >
          <div className="text-2xl lg:text-3xl">
            <IoLogoLinkedin />
          </div>
          <h1 className="text-xs mt-1 mx-1 font-sans lg:text-sm">LinkedIn</h1>
        </a>
        <a
          href="https://twitter.com/KennKIBADI"
          target="__blank"
          className="flex flex-row justify-center mx-3 text-white hover:text-turbo-500"
        >
          <div className="text-2xl lg:text-3xl">
            <IoLogoTwitter />
          </div>
          <h1 className="text-xs mt-1 mx-1 font-sans lg:text-sm">Twitter</h1>
        </a>

        <a
          href="https://github.com/KennStack01"
          target="__blank"
          className="flex flex-row justify-center  mx-3 text-white hover:text-turbo-500"
        >
          <div className="text-2xl lg:text-3xl">
            <IoLogoGithub />
          </div>
          <h1 className="text-xs mt-1 mx-1 font-sans lg:text-sm">Github</h1>
        </a>
      </div>

      <div className="md:my-auto my-5">
        © {new Date().getFullYear()}, {"  "}
        <Link
          to="/services"
          className="font-medium border-b-2 hover:border-turbo-600"
        >
          {" "}
          WebContract Business Support
        </Link>
      </div>
    </footer>
  )
}

export default Footer
