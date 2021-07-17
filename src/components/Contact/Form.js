import React from 'react'
import { Link } from 'gatsby'

const Form = () => {
    return (
        <div>
            <h1 className="text-2xl font-semibold"> <span className="bg-turbo-500">Here we Gooooo! </span> 🚀 </h1>
            <div className="flex items-center h-screen w-full bg-teal-lighter">
                <div class="w-full bg-gray-100 rounded shadow p-8 m-4 md:max-w-sm md:mx-auto">
                    <form class="mb-4 md:flex md:flex-wrap md:justify-between" action="/" method="post" >
                        <div class="flex flex-col mb-4 md:w-full">
                            <label className="mb-2 tracking-wide font-bold text-lg text-grey-darkest" for="first_name">Full Name</label>
                            <input className="border py-2 px-3 text-grey-darkest focus:outline-none focus:ring-2 focus:ring-turbo-600 focus:ring-opacity-50" type="text" name="first_name" id="first_name" />
                        </div>
                        <div class="flex flex-col mb-4 md:w-full">
                            <label className="mb-2 font-bold text-lg text-grey-darkest" for="email">Email</label>
                            <input className="border py-2 px-3 text-grey-darkest focus:outline-none focus:ring-2 focus:ring-turbo-600 focus:ring-opacity-50" type="email" name="email" id="email" />
                        </div>
                        <div class="flex flex-col mb-4 md:w-full">
                            <label className="mb-2 font-bold text-lg text-grey-darkest" for="email">Type of Project</label>
                            <input type="checkbox" className="appearance-none checked:bg-blue-600 checked:border-transparent" />
                        </div>
                        {/* <label class="flex items-center">
                            <input type="checkbox" class="form-checkbox" />
                            <span class="ml-2"></span>
                        </label> */}
                        <div className="flex flex-col mb-6 md:w-full">
                            <label className="mb-2 font-bold text-lg text-grey-darkest" for="password">How can we help?</label>
                            <textarea className="resize-none border rounded focus:outline-none focus:ring-2 focus:ring-turbo-600 focus:ring-opacity-50"></textarea>
                        </div>
                        <div className="my-10 mb-20 mx-auto">
                            <Link to="/services" className="bg-gun-powder-600 text-white font-bold py-4 md:py-2 px-6 text-xl hover:text-turbo-400">Let's Go🚀</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
