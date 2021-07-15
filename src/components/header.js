import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const Header = () => (
  <header>
    <div className="bg-turbo-500 w-full">
      <h1>
        <Link
          to="/"
        >
          {/* Logo */}
          <StaticImage
            src="../images/webcontract-logo.png"
            width={200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="WebContract Logo"
          />
        </Link>
      </h1>
      <p>24/7 Available for Video Call 😉</p>
    </div>
  </header>
)

export default Header
