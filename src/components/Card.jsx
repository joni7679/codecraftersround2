import React, { useRef } from 'react';
import CardsData from '../constants/CardsData';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Card() {
    const section = useRef(null);
    const cards = useRef([]);
    const text = useRef([]);
    const smtext = useRef([]);
    const heading = useRef(null);
    cards.current = [];
    text.current = [];
    smtext.current = [];

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section.current,
                start: 'top 80%',
                end: 'bottom 40%',
                pin: true,
                scrub: 3,
                markers: true,
            }
        });

        
    }, [])





    return (
        <section ref={section} className='create-section bg-black h-screen p-6 relative'>
            <div className="bg-overly left-[-10%]  w-[300px] h-[300px] rounded-full absolute"></div>
            <div className="bg-overly sec-overly w-[300px] h-[300px] rounded-full absolute"></div>
            <div className='container mx-auto'>
                <h1 ref={heading} className='text-white text-2xl uppercase text-center'>Create</h1>

                <div className="sub-heading w-[24rem] text-left mt-4 mb-6 ">
                    <p className='text-white font-[NeueMachina-Light] font-extrabold text-4xl z-10'>
                        Take your brand’s online presence to the next level
                    </p>
                </div>

                <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 p-6">
                    {CardsData.map((val, i) => (
                        <div
                            key={i}
                            ref={(el) => (cards.current[i] = el)}
                            className="z-10 bg-[#FFA1A1] card w-full max-w-[400px] h-[300px] rounded-[20px] p-6 shadow-md"
                        >
                            <h2
                                ref={(el) => (text.current[i] = el)}
                                className="text-[24px] font-bold text-[#d43838] mb-4"
                            >
                                {val.title}
                            </h2>
                            <p
                                ref={(el) => (smtext.current[i] = el)}
                                className="text-[16px] text-[#814141] mb-6"
                            >
                                {val.description}
                            </p>
                            <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full text-white text-xl hover:bg-white/30 transition-all cursor-pointer">
                                {val.button}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Card;
