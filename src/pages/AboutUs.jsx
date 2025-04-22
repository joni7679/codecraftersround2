import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { aboutData } from "../constants/AboutData";
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
    const headingRef = useRef(null);
    const subheadingRef = useRef(null);
    const cards = useRef([]);
    const userImg = useRef([]);
    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: headingRef.current,
                start: "top 70%",
                end: "top 30%",
                scrub: 3,
                // markers: true,
            },
        });
        tl.fromTo(
            headingRef.current,
            {
                y: 50,
                scale: 1.5,
                opacity: 0,
                duration: 1.5,
                ease: "power2.out",
            },
            {
                y: 0,
                scale: 1,
                opacity: 1,
            }
        );
        tl.fromTo(cards.current, {
            // scaleX: 100,
            scaleY: 0.5,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",

        }
            , {
                // scaleX: 1,
                scaleY: 1,
                opacity: 1,
                stagger: 0.2,
            }, '+=0.5');

        tl.fromTo(subheadingRef.current, {
            y: -50,
            scale: 1.5,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
        },
            {
                y: 0,
                scale: 1,
                opacity: 1,
            }, '+=0.5'
        );
        tl.fromTo(userImg.current, {
            scale: 0.5,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
        }, {
            scale: 1,
            opacity: 1,
            stagger: 0.2,
        }, '+=0.5'
        )






    }, []);




    return (
        <div className="min-h-screen font-[Helvetica-Oblique] bg-[#121212] text-white flex items-center justify-center px-4 relative">
            <div className="bg-overly left-[-10%]  w-[300px] h-[300px] rounded-full absolute"></div>
            <div className="bg-overly sec-overly w-[300px] h-[300px] rounded-full absolute"></div>
            <div className="max-w-6xl w-full text-center space-y-12">
                <div>
                    <h2 ref={headingRef} className="text-2xl font-semibold tracking-widest about-text"> About Our Mission</h2>
                    <p ref={subheadingRef} className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                        We’re a team of passionate web creators who believe in turning ideas into interactive realities.
                        From elegant UI designs to powerful backend solutions, we craft websites that don’t just look good — they work beautifully.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    {aboutData.map((card, index) => (
                        <div
                            key={index} ref={(el) => (cards.current[index] = el)}
                            className={`relative rounded-2xl p-6 shadow-lg text-black ${card.icon ? "w-[300px]" : "w-[250px]"
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
                                                <div ref={userImg}
                                                    key={i}
                                                    className="w-9 h-9 mr-[-15px] rounded-full bg-gray-300 overflow-hidden">
                                                    <img
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
                                    <p className="text-sm text-gray-700 mt-4">{card.description}</p>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
