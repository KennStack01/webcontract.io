import React from 'react'
import WhatWeDo from './WhatWeDo'
import WhatWeDoPicture1 from '../../assets/what-we-do-1.svg'
import WhatWeDoPicture2 from '../../assets/what-we-do-2.svg'


const Main = () => {
    return (
        <div className="mt-20 relative">
            <h1 className="font-semibold text-2xl md:text-3xl md:mt-10">
                One Mission 🎯 <br />
                Helping your Business to get more Customers! 
            </h1>

            <div>
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
        </div>
    )
}

export default Main
