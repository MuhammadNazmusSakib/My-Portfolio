import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const ProjectsSection = () => {

    const [projects, setProjects] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('data.json')
        .then(res => setProjects(res.data))
    }, [])
    

    return (
        <section className="bg-gray-900 text-white py-10 px-4" id="work">
            <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-5">
                {/* Introduction */}
                <div className="text-center mb-10">
                    <h1 className="text-6xl font-bold pb-12">PROJECTS</h1>
                    <p className="text-lg mt-3">
                        Explore some of my best work that showcases my skills in web
                        development.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-800 rounded-lg shadow-lg p-5 hover:scale-105 transform transition flex flex-col justify-between"
                        >
                            {/* Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="rounded-lg mb-4 w-96 h-56"
                            />

                            {/* Title */}
                            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>

                            {/* Description */}
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            

                            {/* View Details Button */}
                            <button
                                className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
                                onClick={() => navigate(`/projects/${project.id}`, { state: project })}
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
