import React from 'react'
import { Fragment } from 'react'
import Banner from "./Banner"
import NewsletterImage from "../../assets/images/newsletter.png"
const Newsletter = () => {
  return (
    <Fragment>
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
            <Banner bannerImage={NewsletterImage} headding={"Each student an share their discount code for friends"} subHeadding={'A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”'}/>
        </div>
    </Fragment>
  )
}

export default Newsletter