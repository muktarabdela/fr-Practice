import React, { useState } from 'react'
import star from "../assets/images/icon-star.svg"
import minus_icon from "../assets/images/icon-minus.svg"
import plus_icon from "../assets/images//icon-plus.svg"
const Faq = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [clickId, setClickId] = useState("")

    const handleClick = () => {
        if (isOpen === false) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }
    return (
        <div className='flex w-[33em] border-2  h-[30em] mx-auto relative bottom-40 rounded-md bg-white shadow-md'>
            <div>
                <h1 className='text-4xl pl-10 pt-10 font-medium flex mt-10'>
                    <span className=''><img className=' w-7 pt-1 mr-5' src={star} alt="" /></span>
                    FAQs
                </h1>

                <div className='mt-10 ml-10'>
                    <div onClick={handleClick}>
                        <div
                            className='text-[1.1em] font-medium mb-5 flex justify-between'>
                            what i Frontend Mentor, and how will help me?
                            <span>
                                <img className='w-5 mt-[5px] ml-[70px]' src={isOpen ? minus_icon : plus_icon} alt="" />
                            </span>
                        </div>
                        <div id='1' className={` ${isOpen ? "text-md text-gray-400 w-[29em] mb-2" : "hidden"} text-md text-gray-400 w-[29em] mb-2`}>
                            Frontend mentor offers realistic coding challenges to help developers improve their fronted coding skills with project in html,css and javascript it's suitable for all levels and ideal for portfolio building
                        </div>
                    </div>

                    <div onClick={handleClick}>
                        <div className='text-[1.1em] font-medium mb-5 flex justify-between'>
                            is Frontend Mentor free?
                            <span>
                                <img className='w-5 mt-[5px] ml-[20px] ' src={isOpen ? minus_icon : plus_icon} alt="" />
                            </span>
                        </div>
                        <div id='2' className={` ${isOpen ? "text-md text-gray-400 w-[29em] mb-2" : "hidden"} text-md text-gray-400 w-[29em] mb-2`}>
                            Frontend mentor offers realistic coding challenges to help developers improve their fronted coding skills with project in html,css and javascript it's suitable for all levels and ideal for portfolio building
                        </div>
                    </div>

                    <div onClick={handleClick}>
                        <div className='text-[1.1em] font-medium mb-5 flex justify-between'>
                            can i use Frontend mentor project im my portfolio?
                            <span>
                                <img className='w-5 mt-[5px] ml-[20px]' src={isOpen ? minus_icon : plus_icon} alt="" />
                            </span>
                        </div>
                        <div id='3' className={` ${isOpen ? "text-md text-gray-400 w-[29em] mb-2" : "hidden"} text-md text-gray-400 w-[29em] mb-2`}>
                            Frontend mentor offers realistic coding challenges to help developers improve their fronted coding skills with project in html,css and javascript it's suitable for all levels and ideal for portfolio building
                        </div>
                    </div>

                    <div onClick={handleClick}>
                        <div className='text-[1.1em] font-medium flex justify-between'>how can i get if i'm stuck on a challenge?
                            <span>
                                <img className='w-5 mt-[5px] ml-[20px]' src={isOpen ? minus_icon : plus_icon} alt="" />
                            </span>
                        </div>
                        <div id='4' className={` ${isOpen ? "text-md text-gray-400 w-[29em] mb-2" : "hidden"} text-md text-gray-400 w-[29em] mb-2`}>
                            Frontend mentor offers realistic coding challenges to help developers improve their fronted coding skills with project in html,css and javascript it's suitable for all levels and ideal for portfolio building
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Faq