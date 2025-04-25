import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { timelineData } from "../constants/timelineData";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
    const lineRef = useRef(null);
    const textRefs = useRef([]);
    const containerRef = useRef(null);

    useEffect(() => {
        const line = lineRef.current;
        const length = line.getTotalLength();

        gsap.set(line, {
            strokeDasharray: length,
            strokeDashoffset: length,
        });

        gsap.to(line, {
            strokeDashoffset: 0,
            duration: 2,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "bottom center",
                scrub: 0.6,
                onUpdate: (self) => {
                    const progress = self.progress;
                    line.style.strokeDashoffset = length - length * progress;
                },
            },
        });

        textRefs.current.forEach((el, i) => {
            gsap.fromTo(
                el,
                {
                    x: i % 2 === 0 ? -50 : 50,
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        end: "top 60%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);

    return (
        <section className="px-4 sm:px-6 py-20 bg-black relative" ref={containerRef}>
            <h2 className="text-center text-white text-3xl font-bold mb-12">OUR STORY</h2>

            <div className="relative max-w-6xl mx-auto">
                <svg
                    className="absolute left-1/2 -translate-x-1/2 h-full hidden md:block"
                    width="4"
                    height="100%"
                    viewBox="0 0 4 1000"
                    preserveAspectRatio="none"
                >
                    <path
                        ref={lineRef}
                        d="M2 0 V1000"
                        stroke="#00FF00"
                        strokeWidth="4"
                        fill="none"
                        className="path-drawing"
                    />
                </svg>

                <div className="space-y-24">
                    {timelineData.map((item, i) => (
                        <div
                            key={i}
                            className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                }`}
                        >
                            <div className="absolute left-1/2 -translate-x-1/2 top-0">
                                <div className="w-5 h-5 rounded-full bg-green-400 border-4 border-black shadow-lg shadow-green-400/50"></div>
                            </div>

                            <div
                                ref={(el) => (textRefs.current[i] = el)}
                                className={`w-full max-w-xl px-4 text-center md:text-left ${i % 2 === 0
                                        ? "md:pr-12 md:text-right md:mr-auto"
                                        : "md:pl-12 md:text-left md:ml-auto"
                                    }`}
                            >
                                <h3 className="text-green-400 text-lg md:text-xl font-semibold mb-3">
                                    {item.year} — {item.title}
                                </h3>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
