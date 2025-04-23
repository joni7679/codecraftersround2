// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex font-[Helvetica-Bold] items-center justify-between px-6 py-4 bg-black text-white shadow-md ">
            <div className="text-lg font-bold">
                <span className="text-white">Code</span>
                <span className="text-white">Crafters</span>
            </div>
            <ul className="flex space-x-6 text-sm font-semibold">
                <li><Link to={`/`} href="#" className="hover:text-gray-400">HOME</Link></li>
                <li><a href="#" className="hover:text-gray-400">ABOUT US</a></li>
                <li><a href="#" className="hover:text-gray-400">CREATE</a></li>
                <li><a href="#" className="hover:text-gray-400">PLANS</a></li>
                <li><Link to={`/serives`} href="#" className="hover:text-gray-400">SERVICES</Link></li>
                <li><a href="#" className="hover:text-gray-400">CONTACT</a></li>
            </ul>
            <div>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
                    alt="icon"
                    className="w-4 h-4 filter invert" />
            </div>
        </nav>
    );
};

export default Navbar;
