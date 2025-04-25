import React, { useEffect, useRef } from 'react';
import { webIdentityData } from '../constants/webIdentityData';
import { BsArrowUpRight } from 'react-icons/bs';
import img from '../assets/images/gril.webp';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Web() {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const statsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(headingRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 80%',
                },
            });

            statsRef.current.forEach((el, i) => {
                gsap.from(el, {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    delay: i * 0.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                    },
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-[#111] font-[NeueMachina-Light] flex items-center justify-center p-6"
        >
            <div className="container mx-auto">
                <div className="max-w-7xl w-full border rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-11 items-center">
                    {/* Image Box with Framer Motion */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="bg-[#9C8BFF] h-[30rem] rounded-3xl p-6">
                            <img
                                src={img}
                                className="w-full h-full object-contain"
                                alt="illustration"
                            />
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <div className="flex flex-col justify-center text-white space-y-6">
                        <h1
                            ref={headingRef}
                            className="text-4xl md:text-5xl font-extrabold leading-tight"
                        >
                            {webIdentityData.title}
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-gray-300"
                        >
                            {webIdentityData.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4"
                        >
                            <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
                                <BsArrowUpRight size={20} />
                                {webIdentityData.buttonText}
                            </button>
                        </motion.div>

                        <div className="flex gap-6 mt-6">
                            {webIdentityData.stats.map((stat, index) => (
                                <div
                                    key={index}
                                    ref={(el) => (statsRef.current[index] = el)}
                                    className="bg-green-400 text-black px-8 py-4 rounded-2xl text-center"
                                >
                                    <h2 className="text-3xl font-bold">{stat.value}</h2>
                                    <p className="text-sm">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Web;
