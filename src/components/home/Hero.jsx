import React, { Fragment } from 'react'
import BannerImage from "../../assets/images/banner.png"
import Banner from './Banner'
const Hero = () => {
  return (
    <Fragment>
      <div className="" id='home'>
        <Banner bannerImage={BannerImage} headding={'Develop your skills without diligence'} subHeadding={'A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in China.'}/>
      </div>
    </Fragment>
  )
}

export default Hero