import React from 'react';
import { FaTwitter, FaGoogle, FaFacebookF, FaInstagram } from 'react-icons/fa';

const AgencyCard = ({ name, addressLine1, addressLine2, email }) => {
    return (
        <div className="bg-[#111111] text-white p-6 rounded-xl w-full max-w-sm">
            <h3 className="text-green-500 text-lg font-semibold mb-2">{name}</h3>
            <p className="text-sm">{addressLine1}</p>
            <p className="text-sm">{addressLine2}</p>
            <p className="text-sm mt-2 mb-4">{email}</p>

            <div className="flex items-center gap-4 text-green-500 text-xl">
                <a href="#" className="hover:text-green-400"><FaTwitter /></a>
                <a href="#" className="hover:text-green-400"><FaGoogle /></a>
                <a href="#" className="hover:text-green-400"><FaFacebookF /></a>
                <a href="#" className="hover:text-green-400"><FaInstagram /></a>
            </div>
        </div>
    );
};

export default AgencyCard;
