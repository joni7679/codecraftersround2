import React from 'react'
import { FaAsterisk, FaStar } from 'react-icons/fa'
import { marqueeTexts } from '../constants/marqueeTexts'

function Marquee() {


    return (
        <>
            <div className='w-full bg-[#49f64c] overflow-hidden font-[helvetica-rounded-bold]'>
                <div className="marquee  text-4xl  text-white h-28 p-5 flex items-center justify-center">
                    <div className="marquee__inner flex items-center justify-center whitespace-nowrap animate-marquee gap-4">
                        {marqueeTexts.map((text, index) => {
                            return (
                                <div key={index} className="flex items-center gap-2">
                                    <FaAsterisk className='text-4xl  animate-pulse' />
                                    <span className='text-4xl'>{text}</span>
                                    <FaAsterisk className='text-4xl  animate-pulse' />
                                </div>
                            )
                        })}


                    </div>
                </div>
            </div>

        </>
    )
}

export default Marquee