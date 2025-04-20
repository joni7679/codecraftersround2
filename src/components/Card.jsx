import React, { useEffect, useRef } from 'react';
import CardsData from './cardsData';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Card() {
    let cards = useRef([]);
    let text = useRef([])
    let smtext = useRef([])
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: cards.current,
                start: 'top 80%',
                end: 'bottom 40%',
                scrub: true,
                markers: true,
            }
        });
        tl.from(cards.current, {
            height: 0,
            opacity: 0,
            duration: 0.5,
            ease: "circ.inOut",
        }, "cards");
        tl.from(text.current, {
            scale: 1.2,
            opacity: 0,
            duration: 0.5,
            ease: "pwer4.out",
        }, "cards+=0.2"),
            tl.from(smtext.current, {
                scale: 1.2,
                opacity: 0,
                duration: 0.5,
                ease: "pwer4.out",
            }, "cards+=0.4")


    }, []);

    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 p-6 bg-black min-h-screen">
            {CardsData.map((val, i) => (
                <div key={i} ref={(el) => (cards.current[i] = el)} className="bg-[#FFA1A1]  card w-full max-w-[400px] h-[300px] rounded-[20px] p-6 shadow-md">
                    <h2 ref={(el) => (text.current[i] = el)} className="text-[24px] font-bold text-[#d43838] mb-4">{val.title}</h2>
                    <p ref={(el) => (smtext.current[i] = el)} className="text-[16px] text-[#814141] mb-6">{val.description}</p>
                    <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full text-white text-xl hover:bg-white/30 transition-all cursor-pointer">
                        {val.button}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;
