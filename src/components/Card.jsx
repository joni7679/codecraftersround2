import React, { useEffect, useRef } from 'react';
import CardsData from '../constants/CardsData';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Card() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const descriptionsRef = useRef([]);
    const titlesRef = useRef([]);
    const headingTextRef = useRef(null);

    useGSAP(() => {
        // Animate card backgrounds on scroll
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom top",
                scrub: 3,
                // markers: true,
            },
        });

        tl.to(cardsRef.current, {
            scaleY: 1,
            opacity: 1,
            duration: 1,
            ease: "expo.inOut",
        }, 'start');

        tl.from(descriptionsRef.current, {
            scale: 1.3,
            opacity: 0,
            duration: 1.5,
            stagger: 0.2,
            ease: "power3.out",
        }, 'start');

    


    }, []);

    return (
        <section ref={sectionRef} className="create-section bg-black p-6 relative">

            <div className="bg-overly absolute left-[-10%] w-[300px] h-[300px] rounded-full"></div>
            <div className="bg-overly sec-overly absolute right-[-10%] w-[300px] h-[300px] rounded-full"></div>
            <div className="container mx-auto px-6">
                <h1 className="text-white text-2xl uppercase text-center">Create</h1>
                <div className="sub-heading w-[24rem] mt-4 mb-6 text-left">
                    <p
                        ref={headingTextRef}
                        className="animated-text text-white font-[NeueMachina-Light] font-extrabold text-4xl">
                        Take your brand’s online presence to the next level
                    </p>
                </div>
                <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 p-6">
                    {CardsData.map((val, i) => (
                        <div
                            key={i}
                            className="card relative z-10 w-full max-w-[400px] h-[300px] rounded-[20px] p-6 shadow-md overflow-hidden"
                        >
                            <div
                                ref={(el) => (cardsRef.current[i] = el)}
                                className="card-overlay absolute top-0 left-0 w-full h-full opacity-0 transform scale-y-0 origin-bottom bg-[#FFA1A1] p-6 rounded-[20px]"
                            >
                                <h2
                                    ref={(el) => (titlesRef.current[i] = el)}
                                    className="text-[24px] font-bold text-[#d43838] mb-4 opacity-0"
                                >
                                    {val.title}
                                </h2>
                                <p
                                    ref={(el) => (descriptionsRef.current[i] = el)}
                                    className="text-[16px] text-[#814141] mb-6"
                                >
                                    {val.description}
                                </p>
                                <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full text-white text-xl hover:bg-white/30 transition-all cursor-pointer">
                                    {val.button}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Card;
