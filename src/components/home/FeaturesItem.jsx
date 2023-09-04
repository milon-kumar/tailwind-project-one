import React, { Fragment } from 'react'

const FeaturesItem = ({feturedImage}) => {
    return (
        <Fragment>
            <div className="bg-[rgba(255,255,255,0.9)] rounded-[35px] h-96 shadow-3xl p-8 flex items-center justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                <div className="">
                    <img src={feturedImage} alt="" />
                    <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Conventien study schedul</h5>
                </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.9)] rounded-[35px] h-96 shadow-3xl p-8 flex items-center justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer mt-16">
                <div className="">
                    <img src={feturedImage} alt="" />
                    <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Conventien study schedul</h5>
                </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.9)] rounded-[35px] h-96 shadow-3xl p-8 flex items-center justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                <div className="">
                    <img src={feturedImage} alt="" />
                    <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Conventien study schedul</h5>
                </div>
            </div>
        </Fragment>
    )
}

export default FeaturesItem