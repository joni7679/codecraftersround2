import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { navLinks } from "../constants/navLinks";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const navbarRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        let tl = gsap.timeline();
        tl.from(navbarRef.current, {
            duration: 0.5,
            y: -100,
            ease: "power2.out",
            paused: true,
        });

        const handleScroll = (e) => {
            if (e.deltaY > 0) {
                gsap.to(navbarRef.current, {
                    duration: 0.5,
                    y: -100,
                    ease: "power4.out",
                });
            } else {
                gsap.to(navbarRef.current, {
                    duration: 0.5,
                    y: 0,
                    ease: "power2.out",
                });
            }
        };

        window.addEventListener("wheel", handleScroll);
        return () => window.removeEventListener("wheel", handleScroll);
    }, []);

    return (
        <nav
            ref={navbarRef}
            className="fixed w-full top-0 left-0 z-50 bg-black text-white shadow-md"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-xl font-bold">
                    <span className="text-white">Code</span>
                    <span className="text-green-400">Crafters</span>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-sm font-semibold">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path} className="hover:text-green-400 transition">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                        className="text-white text-2xl"
                    >
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-black text-white px-6 pb-4 space-y-4">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="block py-2 border-b border-white/10 hover:text-green-400"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
