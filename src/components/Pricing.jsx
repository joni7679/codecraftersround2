import React, { useEffect, useRef } from 'react';
import { plans } from '../constants/PricingData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OverlappingButtons from './OverlappingButtons';

gsap.registerPlugin(ScrollTrigger);

function Pricing() {
    const planSection = useRef(null);
    const overly = useRef([]);
    const title = useRef([]);
    const price = useRef([]);
    const features = useRef([]);

    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: planSection.current,
                start: "top bottom",
                end: "bottom 70%",
                scrub: 2,
                // markers: true,
            },
        });

        // Animate overlays
        overly.current.forEach((el, i) => {
            tl.fromTo(el,
                { scaleY: 0, opacity: 0, transformOrigin: "bottom" },
                { scaleY: 1, opacity: 1, duration: 0.8, ease: "power3.out" },

            );
        });

        // Animate titles
        title.current.forEach((el, i) => {
            tl.fromTo(el,
                { y: 20, opacity: 0, scale: 1.1 },
                { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" },
                "+=0.1"
            );
        });

        // Animate features
        features.current.forEach((ul, i) => {
            const items = ul.querySelectorAll('li');
            tl.fromTo(items,
                { y: 15, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power4.out" },
                "+=0.3"
            );
        });

        // Animate prices
        price.current.forEach((el, i) => {
            tl.fromTo(el,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
                "+=0.1"
            );
        });
    }, []);

    return (
        <section ref={planSection} id="plans" className="p-6 text-center font-[Helvetica-Oblique] bg-black text-white">
            <h3 className="text-3xl font-bold mb-8">PRICING</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
                {plans.map((plan, i) => (
                    <div key={i} className="max-w-sm h-[380px] text-black p-6 rounded-2xl shadow-xl relative overflow-hidden">
                        <div
                            ref={(el) => overly.current[i] = el}
                            className="overly absolute top-0 left-0 w-full h-full opacity-0 scale-y-0 origin-bottom bg-[#FFA1A1] p-6 rounded-[20px]"
                        >
                            <div className="w-[80px] h-[80px] bg-white rounded-full text-center m-auto mb-5"></div>
                            <h4 ref={(el) => title.current[i] = el} className="text-xl font-bold mb-2">{plan.name}</h4>
                            <ul ref={(el) => features.current[i] = el} className="text-left mb-4">
                                {plan.features.map((f, j) => (
                                    <li key={j}>• {f}</li>
                                ))}
                            </ul>
                            <p ref={(el) => price.current[i] = el} className="text-2xl font-bold mb-4">{plan.price}</p>
                            <div className="flex items-center justify-center gap-4">
                            <OverlappingButtons  title="Bulid Now" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Pricing;
