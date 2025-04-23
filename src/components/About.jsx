import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
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
                    start: "top 90%",
                    end: "bottom 20%",
                    scrub: 2,
                    markers: true,
                },
                defaults: {
                    ease: "power2.out",
                    duration: 1.2,
                }
            });

            // Animate Heading
            tl.from(headingRef.current, {
                y: 60,
                opacity: 0,
                scale: 1.4,
            });

            // Animate Subheading
            tl.from(subheadingRef.current, {
                y: -60,
                opacity: 0,
                scale: 1.2,
            }, "+=0.8");

            // Animate Cards
            tl.from(cards.current, {
                scaleY: 0.6,
                opacity: 0,
                stagger: 0.2,
            }, "+=0.6");

            // Animate Descriptions
            tl.from(description.current, {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
            }, "+=0.5");

            // Animate Images
            tl.from(img.current, {
                opacity: 0,
                scale: 0.8,
                stagger: 0.1,
                duration: 0.8,
                ease: "power3.out",
            }, "+=0.6");

        }, aboutsection);

        return () => ctx.revert(); // Cleanup
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

                    <OverlappingButtons />
                </div>
            </div>
        </section>
    );
};

export default About;
