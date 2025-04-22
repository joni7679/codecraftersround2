import React, { useRef, useEffect } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { testimonials } from "../constants/TestimonialData";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function TestimonialCard() {
    const overlayRef = useRef([]);
    const sectionRef = useRef(null);
    const scrollRef = useRef(null);
    useGSAP(() => {
        let cards = overlayRef.current
        const tl = gsap.timeline();

        // tl.to(cards, {
        //     xPercent: -100 * (cards.length - 1),
        //     duration: 1.5,
        //     scrollTrigger: {
        //         trigger: scrollRef.current,
        //         pin: true,
        //         scrub: 3,
        //         snap: 1 / (cards.length - 1),
        //         end: () => `+=${scrollRef.current.offsetWidth}`,
        //       },
        // })



    }, []);

    return (
        <section
            ref={sectionRef}
            className="testimonial-section h-screen w-full px-6 py-10 bg-[#121212]"
        >
            <h3 className="font-[Helvetica-Oblique] text-white text-4xl text-center uppercase mb-10">
                testimonials
            </h3>

            <div ref={scrollRef} className="flex items-start gap-6  px-4">
                {testimonials.map((testimonial, index) => {
                    return (
                        <div
                            key={index}
                            className="relative w-[25rem] h-[20rem] bg-white p-5 rounded-3xl shrink-0 shadow-xl "
                        >
                            <div
                                ref={(el) => (overlayRef.current[index] = el)}
                                className="absolute inset-0  scale-y-1 origin-bottom rounded-3xl z-0"
                            />
                            <div className="relative z-10 space-y-2">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={testimonial.avatar}
                                        className="w-10 h-10 rounded-full"
                                        alt={testimonial.name}
                                    />
                                    <div>
                                        <h4 className="font-bold">{testimonial.name}</h4>

                                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                                    </div>
                                </div>
                                <FaQuoteLeft className="inline-block text-green-300  absolute left-[-5%]" />
                                <p className="text-gray-700 text-lg italic">{testimonial.feedback}</p>
                                <FaQuoteRight className="inline-block text-green-300 absolute right-[56%] top-[67%] " />

                                <p className="text-sm text-gray-400 mt-2">{testimonial.date}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default TestimonialCard;
