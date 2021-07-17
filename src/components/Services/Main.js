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
                    details={`Blogging, Literature, and Bookstore App. This Project is a Built 
                        Platform where readers can read articles, poems and buy books. 
                        The main task was to redesign the entire website, bring 
                        Responsive features, and add modern functionalities like 
                        Reading-only, sharing options, online shopping, and so on. 
                        It's a CI/CD-based project and is still being improved.`
                    } 
                />
                <Service 
                    title={"🎊 Website Design Improvement"} 
                    details={`Blogging, Literature, and Bookstore App. This Project is a Built 
                        Platform where readers can read articles, poems and buy books. 
                        The main task was to redesign the entire website, bring 
                        Responsive features, and add modern functionalities like 
                        Reading-only, sharing options, online shopping, and so on. 
                        It's a CI/CD-based project and is still being improved.`
                    } 
                />
                <Service 
                    title={"👔 Ongoing Assistance and Support"} 
                    details={`Blogging, Literature, and Bookstore App. This Project is a Built 
                        Platform where readers can read articles, poems and buy books. 
                        The main task was to redesign the entire website, bring 
                        Responsive features, and add modern functionalities like 
                        Reading-only, sharing options, online shopping, and so on. 
                        It's a CI/CD-based project and is still being improved.`
                    } 
                />
                <Service 
                    title={"🌍 Search Engine Optimization"} 
                    details={`Blogging, Literature, and Bookstore App. This Project is a Built 
                        Platform where readers can read articles, poems and buy books. 
                        The main task was to redesign the entire website, bring 
                        Responsive features, and add modern functionalities like 
                        Reading-only, sharing options, online shopping, and so on. 
                        It's a CI/CD-based project and is still being improved.`
                    } 
                />
                <Service 
                    title={"📈 Business Growth Strategy"} 
                    details={`Blogging, Literature, and Bookstore App. This Project is a Built 
                        Platform where readers can read articles, poems and buy books. 
                        The main task was to redesign the entire website, bring 
                        Responsive features, and add modern functionalities like 
                        Reading-only, sharing options, online shopping, and so on. 
                        It's a CI/CD-based project and is still being improved.`
                    } 
                />
            </div>

            <h1 className="my-10 md:px-4 px-2 py-3 bg-turbo-500 md:mx-40 mx-14 text-md md:text-2xl font-semibold">Interested? Contact <span className="border-transparent border-b-2 border-turbo-900"> <Link to="/contact">webcontract</Link></span>.  We’re available 24h/7😎</h1>

            <div className="mt-5 mb-20">
                <Link to="/contact" className="bg-gun-powder-600 text-white font-bold py-4 md:py-2 px-6 text-2xl my-10 hover:text-turbo-400">Let's Talk 😃</Link>
            </div>
        </div>
    )
}

export default Main
