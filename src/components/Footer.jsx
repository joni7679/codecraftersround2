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
            <ContactCTA />
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
                <div className="w-[300px] bg-[#111111] p-4">
                    <h2 className="text-lg font-semibold mb-4">Logo</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="bg-[#111111] p-4 space-y-2 ">
                    <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
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

            <p className="text-lg text-center">Made with ❤️ by Team Code Crafters</p>
            <p className="text-[1.1rem] font-semibold mt-5 text-center">© 2025 Team Code Crafters. Crafted with ❤️, Coded with Passion. All rights reserved</p>
        </footer>
    );
};

export default Footer;
