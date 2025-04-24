import React from "react";
import { contactInfo } from "../constants/contactInfo";
import { quickLinks } from "../constants/quickLinks";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import ContactCTA from "./ContactCTA";
import AgencyCard from "./AgencyCard";
const Footer = () => {


    
    return (
        <footer className="bg-[#0b0b0b] text-white px-6 py-10 md:py-12 relative">
            <div className="container mx-auto">
                <ContactCTA />
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
                    <div className="w-[300px] bg-[#111111] p-6 rounded-xl">
                        <h2 className="text-lg font-semibold mb-4 text-green-500">CodeCrafters</h2>
                        <p className="text-left text-lg text-white ">
                            Bringing your ideas to life with creativity and precision. Let's collaborate.
                        </p>
                    </div>
                    <div className="bg-[#111111]  space-y-2 p-6 rounded-xl">
                        <h2 className="text-lg font-semibold mb-4 text-green-500">Quick Links</h2>
                        <ul className="text-sm">
                            {quickLinks.map((item, index) => (
                                <li key={index} className="cursor-pointer hover:text-green-500 transition duration-300">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <div className="flex gap-4 flex-wrap">
                            <AgencyCard name="Contact Us"
                                addressLine1=" West Bengal,"
                                addressLine2=", 85130xx Indian"
                                email="info@Exampel.Com" />
                        </div>
                    </div>
                </div>
                <p className="text-lg text-center mt-2">Made with ❤️ by Team Code Crafters</p>
                <p className="text-[1.1rem] font-semibold mt-5 text-center">© 2025 Team Code Crafters. Crafted with ❤️ Coded with Passion. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
