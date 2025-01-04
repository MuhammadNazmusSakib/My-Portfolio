import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Column 2 */}
                    <div>
                        <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link to="about" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="skill" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
                                    Skill
                                </Link>
                            </li>
                            <li>
                                <Link to="work" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
                                    Project
                                </Link>
                            </li>
                            <li>
                                <Link to="contact" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h2 className="text-xl font-bold text-white mb-4">Contact</h2>
                        <ul className="space-y-2">
                            <li>Email: sakib21feb@gmail.com</li>
                            <li>Phone: +8801521328038</li>
                            <li>Location: Chittagong, Bangladesh</li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h2 className="text-xl font-bold text-white mb-4">Social Media</h2>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/in/muhammad-nazmus-sakib/"><FaLinkedin className="text-5xl" /></a>
                            <a href="https://github.com/MuhammadNazmusSakib"><FaGithub className="text-5xl" /></a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-6"></div>

                {/* Bottom Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
                    <p>© 2025 Muhammad Nazmus Sakib. All rights reserved.</p>
                    <p>
                        Built with <span className="text-indigo-400">React</span> and{" "}
                        <span className="text-indigo-400">Tailwind CSS</span>.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
