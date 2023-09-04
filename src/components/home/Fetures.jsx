import React, { Fragment } from 'react'
import feturedImage from "../../assets/images/feature.png"
import FeaturesItem from './FeaturesItem'
const Fetures = () => {
    return (
        <Fragment>
            <div className="my-24 md:px-14 max-w-screen-2xl mx-auto" id='feature'>
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                    <div className="lg:w-1/4">
                        <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">
                            Why we are better then others
                        </h3>
                        <p className="text-base text-tartiary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias blanditiis dolorum maiores cumque voluptatibus libero vel, </p>
                    </div>
                    {/* Featured card */}
                    <div className="w-full lg:w-3/4">
                        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-2 gap-8">
                            <FeaturesItem feturedImage={feturedImage}/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Fetures