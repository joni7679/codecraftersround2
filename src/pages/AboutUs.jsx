import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
    const headingRef = useRef(null);
    useGSAP(() => {
        gsap.from(headingRef.current, {
            scrollTrigger: {
                trigger: headingRef.current,
                start: "top 70%",
                end: "top 30%",
                scrub: 3,
                // markers: true,
            },
            y: 50,
            scale: 1.5,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
        });
    }, []);



    return (
        <div className="min-h-screen font-[Helvetica-Oblique] bg-[#121212] text-white flex items-center justify-center px-4 relative">
            <div className="bg-overly left-[-10%]  w-[300px] h-[300px] rounded-full absolute"></div>
            <div className="bg-overly sec-overly w-[300px] h-[300px] rounded-full absolute"></div>
            <div className="max-w-6xl w-full text-center space-y-12">
                <div>
                    <h2 ref={headingRef} className="text-2xl font-semibold tracking-widest about-text"> About Our Mission</h2>
                    <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                        We’re a team of passionate web creators who believe in turning ideas into interactive realities.
                        From elegant UI designs to powerful backend solutions, we craft websites that don’t just look good — they work beautifully.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <div className="bg-[#FFA1A1] rounded-2xl p-6 w-[250px] relative text-black shadow-lg">
                        <p className="text-xl font-bold">12.5k +</p>
                        <p className="text-sm text-gray-700 font-[NeueMachina-Light]">Active users around the world</p>
                        <div className="flex items-center mt-4 gap-5">
                            <div className="flex items-center justify-center">
                                <div className="w-9 h-9  mr-[-15px] rounded-full bg-gray-300 overflow-hidden" >
                                    <img className="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2023/08/11/04/41/woman-8182795_1280.jpg" alt="" />
                                </div>
                                <div className="w-9 h-9  mr-[-15px] rounded-full bg-gray-300 overflow-hidden" >
                                    <img className="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2019/10/23/08/03/woman-4570763_1280.jpg" alt="" />
                                </div>
                                <div className="w-9 h-9  mr-[-15px] rounded-full bg-gray-300 overflow-hidden" >
                                    <img className="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2021/10/13/11/29/girl-6706267_1280.jpg" alt="" />
                                </div>
                            </div>
                            <span className="text-black ml-2">    <FaStar className="inline-block" /> 5 stars</span>
                        </div>
                        <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">→</button>
                    </div>
                    <div className="relative bg-[#FFA1A1] rounded-2xl p-6 w-[300px] text-black shadow-lg">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-[#ff5656] rounded-full flex items-center justify-center text-white font-bold text-sm">
                            <FaStar />

                        </div>
                        <h3 className="text-lg font-bold mt-10 font-[NeueMachina-Light]">Digital Journeys We’ve Built</h3>
                        <p className="text-sm text-gray-700 mt-4">
                            Since 2013, we’ve guided millions of global users on their digital assets journey!
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
