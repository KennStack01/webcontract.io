import React from "react"
import { Link } from "gatsby"
import WhatWeDo from "./WhatWeDo"
import WhatWeDoPicture1 from "../../assets/what-we-do-1.svg"
import WhatWeDoPicture2 from "../../assets/what-we-do-2.svg"
import { StaticImage } from "gatsby-plugin-image"
import Package from "./Package"

const Main = () => {
  return (
    <div className="mt-20 relative">
      <h1 className="md:my-14 my-4 text-center text-xl md:text-3xl font-bold">
        We use the JAMStack Accessories
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-4 justify-between mx-1 md:mx-3 my-8 md:my-10">
        <StaticImage
          src="../../images/contentful.png"
          styles={{ width: "auto", height: "auto" }}
          quality={95}
          placeholder="blurred"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Contentful Logo"
          className="mx-1"
        />
        <StaticImage
          src="../../images/prismic.jpg"
          styles={{ width: "auto", height: "auto" }}
          quality={95}
          placeholder="blurred"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Technlogy Logo"
        />
        <StaticImage
          src="../../images/shopify.png"
          styles={{ width: "auto", height: "auto" }}
          quality={95}
          placeholder="blurred"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Technlogy Logo"
          className="mx-1"
        />
        <StaticImage
          src="../../images/graphcms.jpg"
          styles={{ width: "auto", height: "auto" }}
          quality={95}
          placeholder="blurred"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Technlogy Logo"
          className="mx-1"
        />
        <StaticImage
          src="../../images/sanity.png"
          styles={{ width: "auto", height: "auto" }}
          quality={95}
          placeholder="blurred"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Technlogy Logo"
          className="mx-1"
        />
        <StaticImage
          src="../../images/storyblok.png"
          styles={{ width: "auto", height: "auto" }}
          quality={95}
          placeholder="blurred"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Technlogy Logo"
          className="mx-1"
        />
        <StaticImage
          src="../../images/datocms.jpg"
          styles={{ width: "auto", height: "auto" }}
          quality={95}
          placeholder="blurred"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Technlogy Logo"
          className="mx-1"
        />
        <StaticImage
          src="../../images/gatsby.png"
          styles={{ width: "auto", height: "auto" }}
          quality={95}
          placeholder="blurred"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Technlogy Logo"
          className="mx-1"
        />
        <StaticImage
          src="../../images/next.png"
          styles={{ width: "auto", height: "auto" }}
          quality={95}
          placeholder="blurred"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Technlogy Logo"
          className="mx-1"
        />
        <StaticImage
          src="../../images/tailwind.png"
          styles={{ width: "auto", height: "auto" }}
          quality={95}
          placeholder="blurred"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Technlogy Logo"
          className="mx-1"
        />
        <StaticImage
          src="../../images/netlify.png"
          styles={{ width: "auto", height: "auto" }}
          quality={95}
          placeholder="blurred"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Technlogy Logo"
          className="mx-1"
        />
        <StaticImage
          src="../../images/vercel.png"
          styles={{ width: "auto", height: "auto" }}
          quality={95}
          placeholder="blurred"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Technlogy Logo"
          className="mx-1"
        />
      </div>

      <h1 className="font-semibold text-2xl md:text-3xl md:mt-10 md:mb-6">
        One Mission 🎯 <br />
        Growing your Business Quality with Modern Tools
      </h1>

      <div className="my-4 md:my-8">
        <WhatWeDo
          Picture={WhatWeDoPicture1}
          smallText={"We don’t only Code your beautiful website,"}
          bigText={"We make your Business more"}
          specialWord={"Successful"}
        />
        <WhatWeDo
          Picture={WhatWeDoPicture2}
          smallText={"We don’t only build your product,"}
          bigText={"We bring ongoing support to"}
          specialWord={"your Business"}
        />
      </div>

      <h1 className="my-8 md:my-10 text-2xl font-bold">
        Check Our Available Packages 👇
      </h1>
      <div className="md:grid grid-cols-3 justify-center my-4 md:my-8">
        <Package
          title="Package 1"
          description={[
            "Business Landing Page",
            "Contact Form",
            "One Web Page",
            "Basic Business Info",
            "Static Content",
            "Free and Secure Hosting",
          ]}
          lowestPrice="$500"
          btnText="Get Started"
        />
        <Package
          title="Package 2"
          description={[
            "Marketing Website",
            "Three Features",
            "Four Web Pages",
            "Dynamic Content",
            "Headless Content Management System",
            "Free and Secure Hosting",
          ]}
          lowestPrice="$1530"
          btnText="Get your modern Website"
        />
        <Package
          title="Package 3"
          description={[
            "Business Website",
            "Five Features",
            "Eight Web Pages",
            "Dynamic Content",
            "Headless Content Management System",
            "Full Access and Ownership",
            "Free and Secure Hosting",
          ]}
          lowestPrice="$4000"
          btnText="Get your Long-term Support"
        />
      </div>
      <div className="md:mx-96">
        <Package
          title="Business Contract 🤝"
          description={[
            "We'll working together on your Product over time and keep building and improving your Customers Experience",
            "You'll benefit from an Ongoing Support and Solutions",
            "This is what you really need for the Greatest Achievement",
          ]}
          lowestPrice="$2350 per month"
          btnText="Get your Long-term Support"
          className=""
        />
      </div>

      <div className="my-20">
        <Link
          to="/services"
          className="bg-gun-powder-600 text-white font-bold p-3 px-6 text-md hover:text-turbo-400"
        >
          Discover our Services now!
        </Link>
      </div>
    </div>
  )
}

export default Main
