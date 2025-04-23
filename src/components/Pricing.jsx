import React from 'react'
import { plans } from '../constants/PricingData'
import { div } from 'motion/react-client'

function Pricing() {
    return (
        <>
            <section id="plans" className="p-6 text-center font-[Helvetica-Oblique] bg-black text-white">
                <h3 className="text-3xl font-bold mb-8">PRICING</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
                    {plans.map((plan, i) => (
                        
                        <div key={i} className="bg-[#ff9191] max-w-sm h-[350px] text-black p-6 rounded-2xl shadow-xl">
                            <div className='w-[80px] h-[80px] bg-white rounded-full text-center m-auto mb-5'></div>
                            <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                            <ul className="text-left mb-4">
                                {plan.features.map((f, j) => (
                                    <li key={j}>•{f}</li>
                                ))}
                            </ul>
                            <p className="text-2xl font-bold mb-4">{plan.price}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Pricing