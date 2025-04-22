import React from "react";
import { features } from "../constants/FaturesData";
import { FaLongArrowAltRight } from "react-icons/fa";
import img from '../../public/gril.webp'


const CreativeSection = () => {
    return (
        <section className="bg-black text-white py-16 px-4 md:px-20 relative">
            <div className="bg-overly left-[-10%]  w-[300px] h-[300px] rounded-full absolute"></div>
            <div className="bg-overly sec-overly w-[300px] h-[300px] rounded-full absolute"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                What Can a Creative Website <br /> Do for Your Brand?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="flex flex-col gap-6">
                    {features.slice(0, 2).map((feature, index) => (
                        <div
                            key={index}
                            className="border border-white/20 rounded-xl p-5  cursor-pointer z-10"
                        >
                            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-300 mb-4">{feature.description}</p>
                            <button className="text-white text-right  text-xl bg-green-600 px-[30px] py-[10px] rounded-2xl"><FaLongArrowAltRight className="inline-block" />
                            </button>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center z-20">
                    <div className="relative w-64 h-80 bg-gradient-to-b from-blue-500 to-black rounded-3xl overflow-hidden shadow-lg">
                        <img
                            src={img}
                            alt="Confused Girl"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 w-full text-center bg-black/50 py-3 text-white font-medium">
                            Know More
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    {features.slice(2, 4).map((feature, index) => (
                        <div
                            key={index}
                            className="border border-white/20 rounded-xl p-5 cursor-pointer">
                            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-300 mb-4">{feature.description}</p>
                            <div className="mr-9">
                                <button className="text-white text-right  text-xl bg-green-500 px-[30px] py-[10px] rounded-2xl"><FaLongArrowAltRight className="inline-block" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CreativeSection;
