import React, { useState } from 'react'
import star from "../assets/images/icon-star.svg"
import minus_icon from "../assets/images/icon-minus.svg"
import plus_icon from "../assets/images//icon-plus.svg"
const Faq = () => {
    const [openAccordionId, setOpenAccordionId] = useState("")

    const handleClick = (accordionId) => {
        setOpenAccordionId(openAccordionId === accordionId ? "" : accordionId)
    }

    return (
        <div className='flex w-[20m] lg:w-[33em] border-2  lg:h-[30em] h-[40em] mx-4 lg:mx-auto relative bottom-40 rounded-md bg-white shadow-md'>
            <div>
                <h1 className='text-4xl pl-10 pt-10 font-medium flex mt-4'>
                    <span className=''><img className=' w-7 pt-1 mr-5' src={star} alt="" /></span>
                    FAQs
                </h1>

                <div className='mt-10  lg:ml-10 ml-4'>
                    <div onClick={() => handleClick("1")}>
                        <div
                            className='text-[1.1em] font-medium mb-5 flex justify-between cursor-pointer hover:underline'>
                            what i Frontend Mentor, and how will help me?
                            <span>
                                <img className='w-5 mt-[5px] lg:mr-0 mr-[17px] lg:ml-[70px]' src={openAccordionId === "1" ? minus_icon : plus_icon} alt="" />
                            </span>
                        </div>
                        <div id='1' className={` ${openAccordionId === "1" ? "text-md text-gray-400 lg:w-[29em] w-[20em] mb-2" : "hidden"} `}>
                            Frontend mentor offers realistic coding challenges to help developers improve their fronted coding skills with project in html,css and javascript it's suitable for all levels and ideal for portfolio building
                        </div>
                    </div>

                    <div onClick={() => handleClick("2")}>
                        <div className='text-[1.1em] font-medium mb-5 flex justify-between cursor-pointer hover:underline'>
                            is Frontend Mentor free?
                            <span>
                                <img className='w-5 mt-[5px] mr-[12px] lg:mr-0 ml-[20px] ' src={openAccordionId === "2" ? minus_icon : plus_icon} alt="" />
                            </span>
                        </div>
                        <div id='2' className={` ${openAccordionId === "2" ? "text-md text-gray-400 lg:w-[29em] w-[20em] mb-2 " : "hidden"}`}>
                            Frontend mentor offers realistic coding challenges to help developers improve their fronted coding skills with project in html,css and javascript it's suitable for all levels and ideal for portfolio building
                        </div>
                    </div>

                    <div onClick={() => handleClick("3")}>
                        <div className='text-[1.1em] font-medium mb-5 flex justify-between cursor-pointer hover:underline'>
                            can i use Frontend mentor project im my portfolio?
                            <span>
                                <img className='w-5 mt-[5px] lg:mr-0 mr-[20px] lg:ml-[20px]' src={openAccordionId === "3" ? minus_icon : plus_icon} alt="" />
                            </span>
                        </div>
                        <div id='3' className={` ${openAccordionId === "3" ? "text-md text-gray-400 lg:w-[29em] w-[20em] mb-2" : "hidden"} `}>
                            Frontend mentor offers realistic coding challenges to help developers improve their fronted coding skills with project in html,css and javascript it's suitable for all levels and ideal for portfolio building
                        </div>
                    </div>

                    <div onClick={() => handleClick("4")}>
                        <div className='text-[1.1em] font-medium flex justify-between cursor-pointer hover:underline'>how can i get if i'm stuck on a challenge?
                            <span>
                                <img className='w-5 mt-[5px] lg:mr-0 mr-[10px] lg:ml-[20px]' src={openAccordionId === "4" ? minus_icon : plus_icon} alt="" />
                            </span>
                        </div>
                        <div id='4' className={` ${openAccordionId === "4" ? "text-md text-gray-400 lg:w-[29em] w-[20em] mb-2" : "hidden"} `}>
                            Frontend mentor offers realistic coding challenges to help developers improve their fronted coding skills with project in html,css and javascript it's suitable for all levels and ideal for portfolio building
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Faq