import React from 'react'
import { services } from '../constants/ServicesData'

function Services() {
  return (
    <>
      <section id="services" className="text-center p-6 bg-black text-white">
        <h3 className="text-3xl font-bold mb-8">OUR SERVICES</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <div key={i} className=" p-6 rounded-xl shadow-lg border">
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-gray-100">{service.details}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Services