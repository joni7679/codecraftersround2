import React from 'react';

const ServicesHero = () => {
    return (
        <section className="w-full h-screen flex items-center justify-center text-center relative overflow-hidden bg-black">
          <div className="bg-overly left-[-10%]  w-[300px] h-[300px] rounded-full absolute"></div>
          <div className="bg-overly sec-overly w-[300px] h-[300px] rounded-full absolute"></div>
            {/* Content */}
            <div className="relative z-10 px-4 max-w-3xl">
                <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4">
                    Empowering Businesses with <br />
                    <span className="text-white">Creative Web Solutions.</span>
                </h1>
                <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto mb-6">
                    We craft stunning, responsive, and user-friendly websites to help your business grow online.
                    From eye-catching design to powerful development, our expert team delivers custom web solutions tailored to your needs.
                    Whether you're a startup, small business, or personal brand — we turn your vision into a digital reality.
                </p>
               
            </div>
        </section>
    );
};

export default ServicesHero;
