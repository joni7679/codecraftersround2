
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "../constants/TestimonialData";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

function TestimonialCard() {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    useGSAP(() => {
        const container = containerRef.current;
        const sections = gsap.utils.toArray(".testimonial-card");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: () => "+=" + container.offsetWidth,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                snap: 1 / (sections.length - 1),
            },
        });
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-screen bg-[#121212] overflow-hidden">
            <h3 className="font-[Helvetica-Oblique] text-white text-4xl text-center uppercase pt-10 mb-10">
                Testimonials
            </h3>
            <div
                ref={containerRef}
                className="flex w-max h-full gap-10 px-10">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="testimonial-card flex-none w-[25rem] h-[20rem] bg-white p-5 rounded-3xl shadow-xl">
                        <div className="relative z-10 space-y-2">
                            <div className="flex items-center gap-3">
                                <img
                                    src={testimonial.avatar}
                                    className="w-10 h-10 rounded-full"
                                    alt={testimonial.name}
                                />
                                <div>
                                    <h4 className="font-bold">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                                </div>
                            </div>
                            <FaQuoteLeft className="inline-block text-green-300 absolute left-[-5%]" />
                            <p className="text-gray-700 text-lg italic">{testimonial.feedback}</p>
                            
                            <p className="text-sm text-gray-400 mt-2">{testimonial.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TestimonialCard;
