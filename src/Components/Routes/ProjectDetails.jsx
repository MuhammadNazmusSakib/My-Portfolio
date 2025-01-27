import React from "react";
import { useLocation } from "react-router-dom";

const ProjectDetails = () => {
    const location = useLocation();
    const project = location.state;
    console.log(project)

    // Handle the case where project data is not available
    if (!project) {
        return <p className="text-center text-white">No project data available.</p>;
    }

    const {
        image,
        title,
        view_details,
        description,
        technologies,
        futureImprove,
        liveLink,
        githubLink,
    } = project;

    return (
        <div className="bg-gray-900 text-white min-h-screen py-10 px-4">
            <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
                {/* Title */}
                <h1 className="text-4xl font-bold mb-6">{title || "Untitled Project"}</h1>

                {/* Image */}
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="rounded-lg mb-6 w-full h-64 object-cover"
                    />
                ) : (
                    <p className="text-gray-400 mb-6">No image available.</p>
                )}

                {/* Description */}
                <p className="text-lg mb-4">
                    <strong>Description:</strong> {description}
                </p>

                {/* View Details */}
                <p className="text-lg mb-4">
                    <strong></strong> {view_details}
                </p>

                {/* Technologies Used */}
                <p className="text-lg mb-4">
                    <strong>Technologies Used:</strong>{" "}
                    {technologies ? technologies.join(", ") : "Not specified."}
                </p>

                {/* Future Improvements */}
                <p className="text-lg mb-4">
                    <strong>Future Improvements:</strong> {futureImprove}
                </p>

                {/* Links */}
                <div className="mt-4 py-5">
                    <a  target="_blank"
                        href={liveLink}
                        className={`px-3 sm:px-6 py-3 rounded-full text-white font-medium mr-4 ${
                            liveLink
                                ? "bg-blue-600 hover:bg-blue-500"
                                : "bg-gray-600 cursor-not-allowed"
                        }`}
                    >
                        Live Demo
                    </a>
                    <a  target="_blank"
                        href={githubLink}
                        className={`px-3 sm:px-6 py-3 rounded-full text-white font-medium ${
                            githubLink
                                ? "bg-blue-600 hover:bg-blue-500"
                                : "bg-gray-600 cursor-not-allowed"
                        }`}
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
