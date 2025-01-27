import React from "react";
import img from '../../../assets/img/my_img.jpg'
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Banner() {
    return (
        <section className="bg-gray-900 text-white py-12 px-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-10 flex-col md:flex-row items-center justify-between">
                {/* Left Side - Text Content */}
                <div className=" md:text-left md:w-2/3">
                    <h1 className="text-5xl font-bold py-8">
                        Hi, I'm Muhammad Nazmus Sakib
                    </h1>
                    <p className="text-lg text-gray-300 mb-4">
                        I'm a passionate MERN Stack Developer with expertise in building dynamic, scalable, and efficient web applications. I specialize in creating seamless user experiences using MongoDB, Express.js, React.js, and Node.js.
                    </p>
                    <p className="text-lg text-gray-300">
                        While I'm proficient in front-end development, I’m currently expanding my knowledge of back-end technologies to create even more robust and secure applications. My focus is on crafting intuitive and responsive interfaces while building strong server-side functionality to support modern web applications.
                    </p>


                    <div className="mt-8">
                        <a  target="_blank"
                            href="https://drive.google.com/file/d/1tcX8ifE3kZpH-Whk3GzAztK4he7ujly7/view?usp=drive_link"
                            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full text-white font-medium"
                        >
                            View Resume
                        </a>
                    </div>
                    {/* Social Media Icons Section */}
                    <div className="mt-10 items-center">
                        <h3 className="text-xl font-semibold mb-4">Find Me On</h3>
                        <div className="flex gap-4">
                            <a target="_blank" href="https://www.linkedin.com/in/muhammad-nazmus-sakib/"><FaLinkedin className="text-5xl" /></a>
                            <a target="_blank" href="https://github.com/MuhammadNazmusSakib"><FaGithub className="text-5xl" /></a>
                        </div>
                    </div>
                </div>

                {/* Right Side - Profile Image */}
                <div className="mt-8 md:mt-0">
                    <img
                        src={img}
                        alt="Your Name"
                        className="w-56 h-56 md:w-56 md:h-56 rounded-full mx-auto md:mx-0"
                    />
                </div>
            </div>
        </section>
    );
}

export default Banner;
