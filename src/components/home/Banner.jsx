import React, { Fragment } from 'react'
const Banner = ({bannerImage,headding,subHeadding}) => {
  return (
    <Fragment>
        <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20">
          <div className="hero-bg rounded-xl rounded-br-[80px] px-4 py-9 md:p-9">
            <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
            <div className="">
                <img src={bannerImage} className="lg:h-[386px]" alt="" />
              </div>
              <div className="md:w-3/5">
                <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">{headding}</h2>
                <p className="text-[#ebebeb] text-2xl  mb-8">{subHeadding}</p>
                <div className="space-x-5 space-y-4">
                  <button className="btn-primary">Get Started</button>
                  <button className="btn-primary">Discount</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  )
}

export default Banner