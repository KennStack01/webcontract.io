import React from 'react'
import { Link } from 'gatsby'

const Main = () => {
    return (
        <div className="mt-5 relative">
            <div>
                <h1 className="font-semibold text-2xl md:text-3xl md:mt-10">
                    ⛳ What We have built  <br /> 
                </h1>
                <p className="font-semibold text-lg md:text-2xl mt-6 md:mt-10">
                    We design, we build, we ship🎊
                </p>
            </div>

            <div>
                
            </div>
            <h1 className="my-10 md:px-4 px-2 py-3 bg-turbo-500 md:mx-40 mx-14 text-md md:text-2xl font-semibold">Interested? Contact <span className="border-transparent border-b-2 border-turbo-900"> <Link to="/contact">webcontract</Link></span>.  We’re available 24h/7😎</h1>

            <div className="mt-5 mb-20">
                <Link to="/contact" className="bg-gun-powder-600 text-white font-bold py-4 md:py-2 px-6 text-2xl my-10 hover:text-turbo-400">Let's Talk 😃</Link>
            </div>
        </div>
    )
}

export default Main
