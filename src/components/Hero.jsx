import React, { useEffect, useRef } from 'react'
import Navbar from './Navbar'
import { FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

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
            y: 20,
            duration: 2.5,
            ease: "expo.inOut",
        }, "section+=0.8");

        tl.from(box.current, {
            opacity: 0,
            scaleX: 0.9,
            scaleY: 0,
            duration: 2.5,
            ease: "expo.out",
        }, "section+=0.5");



    }, [])

    return (
        <>
            <Navbar />
            <section className="font-[NeueMachina-Light] py-5 relative  bg-black text-white min-h-screen flex items-center justify-center px-6 ">
                <div className="overly absolute bottom-0 w-full h-[80px] bg-black z-20"></div>
                <div className="container mx-auto max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">

                    <div className="space-y-6">
                        <h1
                            ref={heroHeading}
                            className="text-4xl text-left md:text-5xl font-bold leading-tight "
                        >
                            We Help You Grow <br /> Your Business, <br />{" "}
                            <span className="text-[#FFA1A1]">Creatively.</span>
                        </h1>
                        <p ref={subHeading} className="text-gray-300">
                            We don’t just build websites — we craft digital experiences that breathe life into your ideas.
                            From pixels to performance, we turn your vision into beautifully functional reality.
                        </p>

                        <div className="flex gap-2 items-center justify-start">
                            <div className="flex gap-2 items-center justify-center">
                                <button ref={rightarrow} className="bg-white rounded-xl p-3 shadow-md">
                                    <FaExternalLinkAlt className="text-gray-600" />
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
                        <div ref={box} className="hero-right-part w-[350px] h-full relative bg-[#ffa1a1] rounded-tl-[50px] rounded-tr-[50px]">

                            <img ref={heroImg} loading='lazy' className='w-[300px] absolute bottom-0 left-4' src="https://static.vecteezy.com/system/resources/thumbnails/053/238/006/small_2x/caucasian-businessman-crossed-arms-isolated-on-transparent-background-png.png" alt="" />

                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero