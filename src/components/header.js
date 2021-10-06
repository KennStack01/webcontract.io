import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header className=" font-sans">
    <div className="bg-turbo-500 w-full py-1">
      <h1>
        <Link to="/">
          {/* Logo */}
          <StaticImage
            src="../images/webcontract-logo.png"
            width={150}
            quality={95}
            placeholder="blurred"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="WebContract Logo"
          />
        </Link>
      </h1>
      <p className="text-xs">
        {" "}
        Available for{" "}
        <Link
          to="/contact"
          className="border-blue-20 border-b-2 hover:border-turbo-900"
        >
          Direct Call{" "}
        </Link>{" "}
        😉
      </p>
    </div>
  </header>
)

export default Header
