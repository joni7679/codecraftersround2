import { faqData } from "../constants/faqData";
import { useState } from "react";

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-16 px-6 text-center bg-black text-white">
            <h3 className="text-3xl font-bold mb-6">FAQ</h3>
            <div className="max-w-3xl mx-auto text-left space-y-4">
                {faqData.map((faq, i) => (
                    <div
                        key={i}
                        onClick={() => toggle(i)}
                        className={`border-2 border-white  rounded-lg px-5 py-4 cursor-pointer overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? "scale-105" : "scale-100"
                            }`}
                    >
                        <summary className="font-semibold text-white list-none">
                            {faq.question}
                        </summary>

                        <div
                            className={`transition-all duration-500 ease-in-out ${openIndex === i
                                    ? "max-h-40 opacity-100 scale-y-100 mt-2"
                                    : "max-h-0 opacity-0 scale-y-0"
                                } transform origin-top`}
                        >
                            <p className="text-gray-400">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
