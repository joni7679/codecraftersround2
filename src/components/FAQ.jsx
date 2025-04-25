import { RiArrowDownSLine } from "react-icons/ri";
import { faqData } from "../constants/faqData";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const faqRefs = useRef([]);
    const heading = useRef(null);

    faqRefs.current = [];
    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: faqRefs.current,
                start: "top 90%",
                end: "bottom 20%",
                scrub: 2,
                // markers: true,
            },
            defaults: {
                ease: "power2.out",
                duration: 1.2,
            }
        })
        // Animate Heading
        tl.fromTo(heading.current, {
            y: 60,
            opacity: 0,
            scale: 1.4,
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
        }, "+=0.8")
    
    // Animate FAQ Items
    faqRefs.current.forEach((el, index) => {
        tl.fromTo(el, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            scale: 1.2,
            ease: "power3.out",
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 0.8,
            scale: 1,
            ease: "power3.out",
        }, "+=0.6")

    })

}, [])


return (
    <section id="faq" className="py-16 px-6 text-center bg-black text-white">
        <h3 ref={heading} className="text-3xl font-bold mb-6">FAQ</h3>
        <div className="max-w-3xl mx-auto text-left space-y-4">
            {faqData.map((faq, i) => (
                <div
                    key={i}
                    onClick={() => toggle(i)}
                    ref={(el) => faqRefs.current[i] = el}
                    className={` relative border-2 border-white  rounded-lg px-5 py-4 cursor-pointer overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? "scale-105" : "scale-100"
                        }`}
                >
                    <summary className="font-semibold text-white list-none">
                        {faq.question}
                    </summary>

                    <RiArrowDownSLine className="text-2xl absolute right-2 top-4" />
                    <div
                        className={`transition-all duration-500 ease-in-out ${openIndex === i
                            ? "max-h-40 opacity-100 scale-y-100 mt-2"
                            : "max-h-0 opacity-0 scale-y-0"
                            } transform origin-top`}  >
                        <p className="text-gray-400">{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);
};
