import React, { useEffect, useRef } from "react";
import  VanillaTilt  from "vanilla-tilt";
import { ServicesData } from "../constants/ServicesData";

function Services() {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (card) {
        VanillaTilt.init(card, {
          max: 25,
          speed: 400,
          glare: true,
          "max-glare": 0.2,
        });
      }
    });
  }, []);

  return (
    <section id="services" className="text-center p-6 bg-black text-white">
      <h3 className="text-3xl font-bold mb-8">OUR SERVICES</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {ServicesData.map((service, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className="p-6 rounded-xl shadow-lg border-2 border-white text-white font-[Helvetica-Oblique]"
          >
            <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
            <ul className="flex items-center gap-6 flex-col">
              {service.points.map((point, j) => (
                <li className="text-left" key={j}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
