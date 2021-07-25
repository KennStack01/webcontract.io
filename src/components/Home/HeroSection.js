import React from 'react'
import { Link } from "gatsby"

import HomePicture from '../../assets/home-pic.svg'
import ReactTypingEffect from 'react-typing-effect';


const HeroSection = () => {

    return (
        <div className="flex flex-col md:flex-row md:justify-around my-8 md:my-20">
            <div className="">
                <div className="text-3xl md:text-4xl mx-6 md:mt-12">
                    <h1 className="font-semibold"> 🎨 
                        <span className="bg-turbo-500 mx-0">  
                            <ReactTypingEffect
                                text={["E-Commerce", "Business", "Marketing", "SaaS"]}
                                speed={50}
                                typingDelay={20}
                                eraseSpeed={20}
                            /> 
                        </span> 
                        <span className="mx-1">
                            Website 
                        </span>
                    </h1>
                    <p className="font-semibold text-2xl mx-5 mb-10 mt-6 md:mt-10">
                        For your Startup, Business, <br /> 
                        SaaS Product, Brand!
                    </p>
                </div>
                <div className="transform transition duration-500 hover:scale-110">
                    <Link to="/contact" className="bg-gun-powder-600 text-white font-bold py-4 md:py-2 px-6 text-2xl my-10 hover:text-turbo-400">Contact us</Link>
                </div>
            </div>
            <div>
                <HomePicture width="auto" height="auto" styles={ { width: 'auto', height: 'auto' } } className="md:h-96 md:w-auto md:-m-10"/>
            </div>

        </div>
    )
}

export default HeroSection
