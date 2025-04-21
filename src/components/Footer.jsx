import React from "react";
import { contactInfo } from "../constants/contactInfo";
import { quickLinks } from "../constants/quickLinks";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";





const Footer = () => {
    return (
        <footer className="bg-[#0b0b0b] text-white px-6 py-10 md:py-12 relative">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

                <div>
                    <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-sm">
                        {quickLinks.map((item, index) => (
                            <li key={index} className="cursor-pointer hover:text-green-500 transition duration-300">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-4">Contact</h2>
                    <p className="text-sm leading-6">
                        {contactInfo.addressLine1} <br />
                        {contactInfo.addressLine2} <br />
                        <FaPhoneAlt className="inline-block text-xl" /> {contactInfo.phoneNumber}
                        {contactInfo.phone} <br />
                        <MdEmail className="inline-block text-xl" />  {contactInfo.email} <br />
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="flex gap-4 flex-wrap">

                    </div>

                </div>
            </div>

            <p className="text-lg text-center">Made with ❤️ by Team Code Crafters</p>
            <p className="text-[1.1rem] font-semibold mt-5 text-center">© 2025 Team Code Crafters. Crafted with ❤️, Coded with Passion. All rights reserved</p>
        </footer>
    );
};

export default Footer;
