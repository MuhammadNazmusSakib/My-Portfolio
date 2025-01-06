import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate()

    const handleScrollAndNavigate = (route, targetId) => {
        // Navigate to the desired route
        navigate(route, { replace: false });

        // Delay to allow route to render, then scroll to the target ID
        setTimeout(() => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }, 100); // Adjust delay as necessary
    };

    return (
        <nav className="bg-blue-950 text-white sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo or Title */}
                    <Link to='/'>
                        <div className="flex-shrink-0 text-2xl font-bold">
                            <h2>MERN Stack Developer</h2>
                        </div>
                    </Link>
                    {/* Menu for large screens */}
                    <div className="hidden md:flex items-center space-x-6">
                        <div onClick={() => handleScrollAndNavigate("/", "about")} className="hover:text-gray-300 cursor-pointer">
                            About
                        </div>
                        <div onClick={() => handleScrollAndNavigate("/", "skill")} className="hover:text-gray-300 cursor-pointer">
                            Skill
                        </div>
                        <div onClick={() => handleScrollAndNavigate("/", "work")} className="hover:text-gray-300 cursor-pointer">
                            Project
                        </div>
                        <div onClick={() => handleScrollAndNavigate("/", "contact")} className="hover:text-gray-300 cursor-pointer">
                            Contact
                        </div>
                        <a
                            href="https://drive.google.com/file/d/1VUIP_6YJxBfr8osvAAnXIEXIiDq56bsL/view?usp=drive_link"
                            className="px-4 py-2 font-bold bg-indigo-500 hover:bg-indigo-600 rounded-md text-sm"
                        >
                            Resume
                        </a>
                    </div>

                    {/* Hamburger menu for small screens */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white mt-2 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden flex flex-col space-y-2 mt-2">
                        <div onClick={() => handleScrollAndNavigate("/", "about")} className="hover:text-gray-300">
                            About
                        </div>
                        <div onClick={() => handleScrollAndNavigate("/", "skill")} className="hover:text-gray-300">
                            Skill
                        </div>
                        <div onClick={() => handleScrollAndNavigate("/", "work")} className="hover:text-gray-300">
                            Project
                        </div>
                        <div onClick={() => handleScrollAndNavigate("/", "contact")} className="hover:text-gray-300">
                            Contact
                        </div>
                        <a
                            href="https://drive.google.com/file/d/1VUIP_6YJxBfr8osvAAnXIEXIiDq56bsL/view?usp=drive_link"
                            className="hover:text-gray-300 font-bold pb-3"
                        >
                            Resume
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar