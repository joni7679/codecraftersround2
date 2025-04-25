import React, { useEffect, useRef } from 'react'
import Navbar from './Navbar'
import { FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { GoArrowUpRight } from 'react-icons/go';
import teamImg from '../assets/images/teamimg.webp'
function Hero() {
    let heroHeading = useRef(null);
    let subHeading = useRef(null);
    let rightarrow = useRef(null);
    let btn = useRef(null)
    let btntext = useRef(null)
    let heroImg = useRef(null)
    let startIcon = useRef(null)
    let box = useRef(null)

    useGSAP(() => {
        let tl = gsap.timeline();
        console.log(heroHeading.current);
        tl.from(heroHeading.current, {
            scale: 1.1,
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        }, "section")
        tl.from(subHeading.current, {
            scale: 1.2,
            opacity: 0,
            duration: 1,
            ease: "power4.out"
        }, "section+=0.3")

        tl.from(btn.current, {
            opacity: 0,
            scaleX: 0,
            duration: 1.4,
            ease: "power1.out"
        }, "section+=0.2")

        tl.from(btntext.current, {
            opacity: 0,
            y: 20,
            duration: 1.4,
            ease: "power4.out"
        }, "section+=0.4");
        tl.from(startIcon.current, {
            scale: 1.2,
            opacity: 0,
            duration: 1.4,
            ease: "power4.out"
        }, "section+=0.8");

        tl.from(rightarrow.current, {
            opacity: 0,
            y: 20,
            duration: 2.5,
            ease: "sine.out",
        }, "section+=0.4");
        tl.from(heroImg.current, {
            opacity: 0,
            y: 100,
            duration: 2.5,
            ease: "expo.inOut",
        }, "section+=0.2");

        tl.to(box.current, {
            scaleY: 1,
            duration: 1,
            ease: "expo.inOut",
        }, "section+=0.5");

    }, [])

    return (
        <>
            <Navbar />
            <section className="font-[NeueMachina-Light] py-5 relative min-h-screen  bg-black text-white  flex items-center justify-center px-6 ">
                <div className="overly absolute bottom-0 w-full h-[80px] bg-[var(--secondary-color)] z-20"></div>
                <div className="container mx-auto max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div className="space-y-6">
                        <h1
                            ref={heroHeading}
                            className="text-4xl text-left md:text-5xl font-bold leading-tight "
                        >
                            We Help You Grow <br /> Your Business, <br />{" "}
                            <span className="text-[var(--quinary-color)]">Creatively.</span>
                        </h1>
                        <p ref={subHeading} className="text-gray-300">
                            We don’t just build websites — we craft digital experiences that breathe life into your ideas.
                            From pixels to performance, we turn your vision into beautifully functional reality.
                        </p>
                        <div className="flex gap-2 items-center justify-start">
                            <div className="flex gap-2 items-center justify-center">
                                <button ref={rightarrow} className="bg-white rounded-xl p-3 shadow-md">
                                    <GoArrowUpRight className="text-gray-600" />
                                </button>
                                <button ref={startIcon} className="bg-black border border-white rounded-xl p-3 shadow-md">
                                    <FaStar className="text-white" />
                                </button>
                            </div>
                            <button ref={btn} className="bg-black text-white cursor-pointer px-[25px] py-[10px] rounded-2xl border-[1px] border-white">
                                <span ref={btntext}>Appointment</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center h-[500px]">
                        <div className="w-[350px] h-full relative rounded-tl-[216px] rounded-tr-[216px] overflow-hidden shadow-lg">
                            <div
                                ref={box}
                                className="absolute w-full h-full  bg-[var(--quinary-color)] scale-y-0 origin-bottom transform transition-all duration-500"
                            >
                                <div className="absolute bottom-[-4%] left-0 w-full h-full">
                                    <div className="w-full h-full">
                                        <img
                                            ref={heroImg}
                                            loading="lazy"
                                            src={teamImg}
                                            alt="Team"
                                            className="w-full h-full object-cover object-center rounded-2xl shadow-2xl"
                                        />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Hero;
