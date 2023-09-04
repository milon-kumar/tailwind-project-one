import React, { Fragment, useState } from 'react'
import { packages } from '../../service/DataService';

const Priching = () => {
    const [isYearly, setIsYearly] = useState(false);
    return (
        <Fragment>
            <div className="md:px-14 p-4 max-w-screen-2xl ms-auto py-10" id='priching'>
                <div className="text-center">
                    <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">Here are all our plans</h2>
                    <p className="text-tartiary md:w-1/3 mx-auto px-4 ">A simple paragraph is comprised of three major components. The which is often a declarative sentence.</p>
                    {/* Toggle Priching */}
                    <div className="mt-16">
                        <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                            <span className="mr-8 text-2xl font-semibold">Monthly</span>
                            <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
                                <div className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${isYearly ? "bg-primary ml-8" : "bg-gray-500"}`}></div>
                            </div>
                            <span className="ml-8 text-2xl font-semibold">Yearly</span>
                        </label>
                        <input type="checkbox"
                            id="toggle"
                            className="hidden"
                            checked={isYearly}
                            onChange={() => setIsYearly(!isYearly)}
                        />
                    </div>
                </div>
                {/* Priching Card */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:11/12 mx-auto">
                    {
                        packages.map((item, i) => (
                            <div className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl" key={i}>
                                <h3 className="text-3xl font-bold text-center text-primary">{item.name}</h3>
                                <p className="text-tartiary text-center my-5">{item.description}</p>
                                <p className="mt-5 text-center text-4xl text-secondery font-bold">
                                    {isYearly ? `$${item.yearlyPrice}` : `$${item.monthlyPrice}`}<span className="text-base text-tartiary font-medium">/{isYearly ? "year" : "month"}</span>
                                </p>
                                <ul className="mt-4 space-y-3 px-4">
                                    <li className="flex gap-3 items-center">
                                        <img src={item.green} alt="" className="w-4 h-4" />
                                        Videos of Lessons
                                    </li>
                                    <li className="flex gap-3 items-center">
                                        <img src={item.green} alt="" className="w-4 h-4" />
                                        Homework check
                                    </li>
                                    <li className="flex gap-3 items-center">
                                        <img src={item.green} alt="" className="w-4 h-4" />
                                        Additional practical task
                                    </li>
                                    <li className="flex gap-3 items-center">
                                        <img src={item.red} alt="" className="w-4 h-4" />
                                        Monthly conferences
                                    </li>
                                    <li className="flex gap-3 items-center">
                                        <img src={item.red} alt="" className="w-4 h-4" />
                                        Personal advice from teachers
                                    </li>
                                </ul>
                                <div className="w-full mx-auto mt-8 flex items-center justify-center">
                                    <button className=""></button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default Priching