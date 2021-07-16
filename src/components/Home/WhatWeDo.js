import React from 'react'


const WhatWeDo = ({Picture, smallText, bigText, specialWord}) => {
    return (
        <div className="flex flex-col md:flex-row md:justify-around mt-10 rounded shadow mx-14 md:mx-40 my-5">
            <div>
                <Picture width="auto" height="auto" styles={ { width: 'auto', height: 'auto' } } className="md:w-full"/>
            </div>

            <div className="bg-gray-100 w-full">
                <div className="py-3 px-2 md:w-full my-auto text-lg">
                    <div  className="md:mt-16 my-3">
                        <p className="font-medium italic">{smallText}</p>
                        <h1 className="font-semibold text-2xl mt-3"> {bigText} <span className="bg-turbo-500"> {specialWord} </span>  
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo
