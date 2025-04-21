import React from 'react'
import { techs } from '../constants/techs'

function TechMarquee() {
    return (
        <>
            <section className='w-full p-6 min-h-screen bg-[#121212] '>
                <h2 className="text-3xl font-bold text-center mb-2 text-white font-[Helvetica-Oblique]">
                    Technologies We Master
                </h2>
                <p className="text-center text-gray-400 text-lg mt-5  max-w-xl mx-auto font-[helvetica-rounded-bold]">
                    From powerful frontend frameworks like React and Next.js to robust backend tech like Node.js and MongoDB — we also integrate modern AI tools to deliver smart, scalable, and future-ready digital solutions.
                </p>

                <div className="overflow-hidden whitespace-nowrap">
                    {techs.map((tech, index) => {

                    })}
                </div>
            </section>


        </>
    )
}

export default TechMarquee