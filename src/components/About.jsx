import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { FaAsterisk, FaStar } from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { aboutData } from "../constants/AboutData";
import OverlappingButtons from "./OverlappingButtons";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const aboutsection = useRef(null);
    const headingRef = useRef(null);
    const subheadingRef = useRef(null);
    const cards = useRef([]);
    const img = useRef([]);
    const description = useRef([]);
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: aboutsection.current,
                    start: "top bottom",
                    end: "top top",
                    scrub: 2,
                    markers: true,
                },
                defaults: {
                    ease: "power2.out",
                    duration: 1.2,
                },
            });

            tl.fromTo(
                headingRef.current,
                { y: 60, opacity: 0, scale: 1.4 },
                { y: 0, opacity: 1, scale: 1 }
            );

            tl.fromTo(
                subheadingRef.current,
                { y: -60, opacity: 0, scale: 1.2 },
                { y: 0, opacity: 1, scale: 1 },
                "+=0.8"
            );

            tl.fromTo(
                cards.current,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.2 },
                "+=0.6"
            );

            tl.fromTo(
                description.current,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                },
                "+=0.5"
            );

           
            img.current.forEach((el) => {
                gsap.fromTo(
                    el,
                    { scale: 1.2, opacity: 0 },
                    {
                        scale: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power3.out",
                    }
                );
            });
        }, aboutsection); 
        return () => ctx.revert(); 
    }, []);


    return (
        <section ref={aboutsection} className=" min-h-screen font-[Helvetica-Oblique] bg-[#121212] text-white  px-6 relative">
            <div className="bg-overly left-[-10%]  w-[300px] h-[300px] rounded-full absolute"></div>
            <div className="bg-overly sec-overly w-[300px] h-[300px] rounded-full absolute"></div>
            <div className="w-full text-center space-y-12 container mx-auto">
                <div>
                    <h2 ref={headingRef} className="text-2xl font-semibold tracking-widest about-text"> About Our Mission</h2>
                    <p ref={subheadingRef} className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                        We’re a team of passionate web creators who believe in turning ideas into interactive realities.
                        From elegant UI designs to powerful backend solutions, we craft websites that don’t just look good — they work beautifully.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-around gap-6">
                    {aboutData.map((card, index) => (
                        <div
                            key={index} ref={(el) => (cards.current[index] = el)}
                            className={`relative rounded-2xl p-6 shadow-lg text-black overflow-hidden ${card.icon ? "w-[300px]" : "w-[250px]"
                                }`}
                            style={{ backgroundColor: card.bgColor }}
                        >
                            <div className="transform origin-bottom w-full h-full">
                            </div>
                            {card.icon && (
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-[#ff5656] rounded-full flex items-center justify-center text-white font-bold text-sm">
                                    <FaStar />
                                </div>
                            )}

                            {!card.icon && (
                                <>
                                    <p className="text-xl font-bold">{card.title}</p>
                                    <p className="text-sm text-gray-700 font-[NeueMachina-Light]">{card.description}</p>
                                    <div className="flex items-center mt-4 gap-5">
                                        <div className="flex items-center justify-center">
                                            {card.users.map((userImg, i) => (
                                                <div
                                                    key={i}
                                                    className="w-9 h-9 mr-[-15px] rounded-full overflow-hidden">
                                                    <img rref={(el) => el && img.current.push(el)}
                                                        className="w-full h-full object-cover"
                                                        src={userImg}
                                                        alt={`user-${i}`}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        <span className="text-black ml-2">
                                            <FaStar className="inline-block" /> {card.rating}
                                        </span>
                                    </div>
                                    <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                                        →
                                    </button>
                                </>
                            )}

                            {card.icon && (
                                <>
                                    <h3 className="text-lg font-bold mt-10 font-[NeueMachina-Light]">{card.title}</h3>
                                    <p ref={(el) => el && description.current.push(el)} className="text-sm text-gray-700 mt-4">{card.description}</p>
                                </>
                            )}
                        </div>
                    ))}
                    <div className="flex items-center justify-center mt-10 md:mt-0 flex-col relative">
                        <div className="h-[50px] w-[50px] right-[-26%] top-[1%] bg-red-300 rounded-full absolute flex items-center justify-center text-white font-bold text-sm z-10">
                            <FaAsterisk />
                        </div>
                        <div className="h-[50px] w-[50px] left-[-4%] top-[56%] border-[1px] border-white rounded-full absolute flex items-center justify-center text-white font-bold text-sm z-10">
                            <FaAsterisk />
                        </div>

                        <OverlappingButtons title="Our Team" />
                        <OverlappingButtons
                            style={{
                                marginRight: "-80px",
                            }}
                            title="AWARDS"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
