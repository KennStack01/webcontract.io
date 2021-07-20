import React from 'react'
import Service from './Service'
import { Link } from 'gatsby'

const Main = () => {
    return (
        <div>
            <div>
                <h1 className="text-2xl md:text-4xl font-semibold text-center my-4 md:my-8"> 
                    🎯<span className="bg-turbo-500">Solution</span> driven Business Websites 
                </h1>
                <p className="text-xl md:text-2xl font-semibold text-center my-10">
                    We build up from the ground to a Full provided Solution!
                </p>
            </div>
            <div className="mt-5 md:grid grid-cols-2">
                <Service 
                    title={"🎨 Fully Responsive Beautiful Design"} 
                    details={`Responsive Web Design is about creating web pages that look good on all devices!
                            Making your customers/users comfortable and happy while also browsing your site and
                            discovering what your Company is about.
                            Your Website will look great on Mobile, Tablets, Desktops, and even in VR 😍
                    `
                    } 
                />
                <Service 
                    title={"🎊 Website Design Improvement"} 
                    details={`Do you already have a Website and you don't like the way it looks?
                            Please, don't care. We can help you improve your Website Design.
                            Using modern design techniques, we can transform it to a beautiful design.
                            This is a great way to make your Website more user friendly and more user friendly. 

                    `
                    } 
                />
                <Service 
                    title={"👔 Ongoing Assistance and Support"} 
                    details={`After building your Product, We'll stay close and be bringing support.
                            Because It's all about caring for your users. When something isn't good enough,
                            WebContract will be there to help you. Are you ready to partner?🙂
                    `
                    } 
                />
                <Service 
                    title={"🌍 Search Engine Optimization"} 
                    details={`Webcontract use SEO Techniques in order to make your Website be ranked among the tops.
                            This is a great way to make your Website more visible and more popular.
                            We can help you with this.
                    `
                    } 
                />
                <Service 
                    title={"📈 Business Growth Strategy"} 
                    details={`We don't only have the Coding side of things. Let's work also on the Business side of your Product.
                            What decisions to make in order to attract more customers, how the users behave and how we can improve the sales.
                            Staying close to the Business stratgy while coding and building the app will help you to build a successful Product.
                    `
                    } 
                />
            </div>

            <h1 className="my-10 md:px-4 px-2 py-3 bg-turbo-500 md:mx-40 mx-8 text-md md:text-2xl font-semibold">Interested? Contact <span className="border-transparent border-b-2 border-turbo-900"> <Link to="/contact">webcontract</Link></span>.  We’re available 24h/7😎</h1>

            <div className="mt-5 mb-20">
                <Link to="/contact" className="bg-gun-powder-600 text-white font-bold py-4 md:py-2 px-6 text-2xl my-10 hover:text-turbo-400">Let's Talk 😃</Link>
            </div>
        </div>
    )
}

export default Main
