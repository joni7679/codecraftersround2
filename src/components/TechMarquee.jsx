import React, { useEffect, useRef } from 'react'
import { techs } from '../constants/techs'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { section } from 'motion/react-client';
import ScrollingSkillCard from './ScrollingSkillCard';
gsap.registerPlugin(ScrollTrigger);
function TechMarquee() {
    const paraRefs = useRef();
    const section = useRef(null);
    const heading = useRef(null);

    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: section.current,
                start: "top 90%",
                end: "bottom 20%",
                scrub: 0.5,
                markers: true,
            },
        })

        const text = paraRefs.current.innerText;
        console.log("paraRefs.current.innerText", text);
        const newText = text.split("").map((char, index) =>
            `<span key=${index} class="inline-block opacity-30 text-gray-500">${char}</span>`
        ).join("");

        paraRefs.current.innerHTML = newText;
        tl.to(paraRefs.current.children, {
            opacity: 1,
            stagger: 0.2,
            color: "#fff",
        });


    }, []);
    return (
        <>
            <section ref={section} className='w-full p-6 min-h-screen bg-[#121212] '>
                <h2 ref={heading} className="text-3xl font-bold text-center mb-2 text-white font-[Helvetica-Oblique]">
                    Technologies We Master
                </h2>
                <div className="text-center text-gray-400 text-lg mt-5  max-w-xl mx-auto font-[helvetica-rounded-bold]">

                    <p ref={paraRefs} className="text-gray-100 text-lg  font-[helvetica-rounded-bold]">
                        From powerful frontend frameworks like React and Next.js to,
                        robust backend tech like Node.js and MongoDB — we also integrate modern AI tools to deliver,
                        smart, scalable, and future-ready digital solutions.,
                    </p>
                </div>
                <div className="overflow-hidden whitespace-nowrap">
                    <ScrollingSkillCard />
                </div>
            </section>
        </>
    )
}

export default TechMarquee