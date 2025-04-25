import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { navLinks } from "../constants/navLinks";


const Navbar = () => {
    const navbarRef = useRef(null);

    useEffect(() => {
        let lastScroll = 0;
        let tl = gsap.timeline();
        tl.from(navbarRef.current, {
            duration: 0.5,
            y: -100,
            stagger: 0.5,
            ease: "power2.out",
            paused: true
        });

        const handleScroll = (e) => {
            if (e.deltaY > 0) {
                gsap.to(navbarRef.current, {
                    duration: 0.5,
                    y: -100,
                    ease: "power4.out"
                });
            } else {
                gsap.to(navbarRef.current, {
                    duration: 0.5,
                    y: 0,
                    ease: "power2.out"
                });
            }
        };

        window.addEventListener("wheel", handleScroll);

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);

    return (
        <nav ref={navbarRef} className="navbar fixed w-full top-0 left-0 z-50 bg-black text-white shadow-md">
            <div className="flex justify-between items-center px-6 py-4">
                <div className="text-lg font-bold">
                <div className="text-lg font-bold">
                    <span className="text-white">Code</span>
                    <span className="text-green-400">Crafters</span>
                </div>
                </div>
                <ul className="hidden md:flex space-x-6 text-sm font-semibold">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path} className="nav-link">{link.name}</Link>
                        </li>
                    ))}
                </ul>
                <div>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
                        alt="icon"
                        className="w-4 h-4 filter invert"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
