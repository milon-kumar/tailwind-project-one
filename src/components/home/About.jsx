import React, { Fragment } from 'react'
import aboutImage from "../../assets/images/about.png"
import aboutImage2 from "../../assets/images/about2.png"
const About = () => {
    return (
        <Fragment>
            <div className="md:px-14 p-4 max-w-screen-2xl mx-auto space-y-10" id='about'>
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="md:w-1/2">
                        <img src={aboutImage} alt="" />
                    </div>
                    <div className="md:w-2/5">
                        <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
                            We have been improving our product <span className="text-secondery">for many years.</span>
                        </h2>
                        <p className="text-primary text-lg mb-7">
                        A good example of a paragraph contains a topic conclusion. 'There are many different kinds of animals that live in China.
                        </p>
                        <button className="btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="h-8"></div>
            <div className="md:px-14 p-4 max-w-screen-2xl mx-auto space-y-10">
                <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
                    <div className="md:w-1/2">
                        <img src={aboutImage2} alt="" />
                    </div>
                    <div className="md:w-2/5">
                        <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
                        You can Practice at<span className="text-secondery">any time convinent for you.</span>
                        </h2>
                        <p className="text-primary text-lg mb-7">A good example of a paragraph contains a topic conclusion. 'There are many different kinds of animals that live in China.</p>
                        <button className="btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About