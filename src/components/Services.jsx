import React from 'react'
import { ServicesData } from '../constants/ServicesData'
import { PiDotsThreeCircle } from 'react-icons/pi'

function Services() {
  return (
    <>
      <section id="services" className="text-center p-6 bg-black text-white">
        <h3 className="text-3xl font-bold mb-8">OUR SERVICES</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
          {ServicesData.map((service, i) => (
            <div key={i} className=" p-6 rounded-xl shadow-lg border">
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <ul className='flex items-center gap-6 flex-col'>
                {service.points.map((point, i) => (
                  <li className='text-left' key={i}>  
                    {point}</li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Services