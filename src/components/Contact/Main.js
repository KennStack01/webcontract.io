import React from 'react'
import Form from './Form'

const Main = () => {
    return (
        <div>
            <div>
                <h1 className="text-2xl md:text-4xl font-semibold text-center my-4 md:my-8"> 
                    🤝 Let's <span className="bg-turbo-500">Work Together</span> and Solve your Business Problem 
                </h1>
                <p className="text-md md:text-xl font-semibold text-center my-10 mx-5 md:mx-auto">
                    From the Phone/Video Call to the Product, we stay close and you enjoy an ongoing support💬
                </p>
            </div>

            <Form/>
        </div>
    )
}

export default Main
