import React, { useEffect, useRef } from 'react'
import { techs } from '../constants/techs'
import gsap from 'gsap';
import { section } from 'motion/react-client';

function TechMarquee() {
    const paraRefs = useRef([]);
    const section = useRef(null);
    const heading = useRef(null);
    const textLines = [
        "From powerful frontend frameworks like React and Next.js to",
        " robust backend tech like Node.js and MongoDB — we also integrate modern AI tools to deliver ",
        "smart, scalable, and future-ready digital solutions.",

    ];

    useEffect(() => {

        paraRefs.current.forEach((para) => {
            if (!para) return;
            const words = para.textContent.split(" ");
            para.innerHTML = "";

            const wordSpans = words.map((word) => {
                const wordWrapper = document.createElement("span");
                wordWrapper.className = "inline-block overflow-hidden mr-1";
                const innerSpan = document.createElement("span");
                innerSpan.textContent = word;
                innerSpan.className = "inline-block opacity-0 translate-y-3";
                wordWrapper.appendChild(innerSpan);
                para.appendChild(wordWrapper);
                return innerSpan;
            });
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section.current,
                    start: "top 50%",
                    end: "bottom top",
                    scrub: 3,
                    // markers: true,
                },
            })

            tl.to(wordSpans, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.05,
                ease: "power2.out",
            }, 'section');
            tl.to(heading.current, {
                opacity: 0,
                y: 30,
                duration: 0.6,
                filter: "blur(10px)",
                ease: "power2.out",
            }, 'section')


        });
    }, []);
    return (
        <>
            <section ref={section} className='w-full p-6 min-h-screen bg-[#121212] '>
                <h2 ref={heading} className="text-3xl font-bold text-center mb-2 text-white font-[Helvetica-Oblique]">
                    Technologies We Master
                </h2>
                <div className="text-center text-gray-400 text-lg mt-5  max-w-xl mx-auto font-[helvetica-rounded-bold]">
                    {textLines.map((line, index) => (
                        <p
                            key={index}
                            ref={(el) => (paraRefs.current[index] = el)}
                            className="text-gray-100 text-lg  font-[helvetica-rounded-bold]"
                        >
                            {line}
                        </p>
                    ))}
                </div>

                <div className="overflow-hidden whitespace-nowrap">
                    {techs.map((tech, index) => {

                    })}
                </div>
            </section>


        </>
    )
}

export default TechMarquee