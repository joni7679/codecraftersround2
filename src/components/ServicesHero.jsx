import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesHero = () => {
    const section = useRef(null);
    const headingRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section.current,
                start: 'top 85%',
                toggleActions: 'play none none reverse', // Smooth entry, not scrub
            },
        });

        tl.fromTo(
            headingRef.current,
            { y: 40, opacity: 0, scale: 1.2 },
            { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }
        ).fromTo(
            textRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
            '-=0.6' // overlap timing
        );
    }, []);

    return (
        <section
            ref={section}
            className="w-full font-[NeueMachina-Light] h-screen flex items-center justify-center text-center relative overflow-hidden bg-black"
        >
            {/* Blurred background blobs */}
            <div className="bg-overly left-[-10%] w-[300px] h-[300px] rounded-full absolute"></div>
            <div className="bg-overly sec-overly w-[300px] h-[300px] rounded-full absolute"></div>

            {/* Content */}
            <div className="relative z-10 px-4 max-w-3xl">
                <h1
                    ref={headingRef}
                    className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4"
                >
                    Empowering Businesses with <br />
                    <span className="text-white">Creative Web Solutions.</span>
                </h1>
                <p
                    ref={textRef}
                    className="text-gray-300 text-lg md:text-base max-w-xl mx-auto mb-6"
                >
                    We craft stunning, responsive, and user-friendly websites to help your business grow online.
                    From eye-catching design to powerful development, our expert team delivers custom web solutions tailored to your needs.
                    Whether you're a startup, small business, or personal brand — we turn your vision into a digital reality.
                </p>
            </div>
        </section>
    );
};

export default ServicesHero;
