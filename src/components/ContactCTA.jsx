import React from 'react';
import { BsArrowUpRightCircle } from 'react-icons/bs';


const ContactCTA = () => {
    return (
        <section className=" text-green-400 py-16 px-6 flex items-center justify-between border-t border-green-500">
            <div className="flex items-center gap-3 text-4xl font-bold">
                <h2 className="contact-us-text  from-green-400 to-green-400 ">
                    Let’s Contact Us
                </h2>
                <BsArrowUpRightCircle size={32} />
            </div>
            <button className="bg-green-400 text-black font-semibold px-5 py-2 rounded-full hover:bg-green-300 transition duration-300">
                Get in Touch
            </button>
        </section>
    );
};

export default ContactCTA;
