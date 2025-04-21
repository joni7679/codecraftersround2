import React, { useEffect, useRef, useState } from 'react';
import CardsData from '../constants/CardsData';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { title } from 'motion/react-client';


gsap.registerPlugin(ScrollTrigger);

function Card() {
    const section = useRef(null);
    const cards = useRef([]);
    const description = useRef([]);
    const title = useRef([]);
    const textelem = useRef(null)
    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: section.current,
                start: "top 80%",
                end: "bottom top",
                scrub: 3,
                markers: true,
            },
        });
        tl.to(cards.current, {
            scaleY: 1,
            duration: 1,
            opacity: 1,
            ease: "expo.inOut",
        }, 'section');

        tl.from(description.current, {
            scale: 1.3,
            opacity: 1,
            duration: 1.5,
            stagger: 0.2,
            ease: "power3.out",
        });


        // tl.fromTo(textelem.current,
        //     { opacity: 0, y: 30, filter: "blur(10px)" },
        //     {
        //         opacity: 1,
        //         y: 0,
        //         filter: "blur(0px)",
        //         stagger: 0.04,
        //         duration: 0.6,
        //         ease: "power2.out",

        //     }
        // );



    }, []);

    ;

    return (
        <section ref={section} className='create-section bg-black h-screen p-6 relative'>
            <div className="bg-overly left-[-10%]  w-[300px] h-[300px] rounded-full absolute"></div>
            <div className="bg-overly sec-overly w-[300px] h-[300px] rounded-full absolute"></div>
            <div className='container mx-auto'>
                <h1 className='text-white text-2xl uppercase text-center'>Create</h1>
                <div className="sub-heading w-[24rem] text-left mt-4 mb-6 ">
                    <p ref={textelem} className='text-white font-[NeueMachina-Light] font-extrabold text-4xl z-10'>
                        Take your brand’s online presence to the next level
                    </p>
                </div>
                <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 p-6">
                    {CardsData.map((val, i) => (
                        <div
                            key={i}
                            className="z-10  card w-full max-w-[400px] h-[300px] rounded-[20px] p-6 shadow-md relative overflow-hidden">
                            <div
                                ref={(el) => (cards.current[i] = el)}
                                className="overflow-hidden scale-y-0 origin-bottom transform overly absolute top-0 left-0 w-full opacity-0 h-full bg-[#FFA1A1] p-6 rounded-[20px]">
                                <h2 ref={(el) => (title.current[i] = el)} className="text-[24px] font-bold text-[#d43838] mb-4 opacity-0">
                                    {val.title}
                                </h2>
                                <p ref={(el) => (description.current[i] = el)} className="text-[16px] text-[#814141] mb-6">
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
