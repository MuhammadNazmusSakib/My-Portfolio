import React from "react";
import tailwind from '../../../assets/img/tailwind.png'
import html5 from '../../../assets/img/html5.png'
import css3 from '../../../assets/img/css3.png'
import express from '../../../assets/img/express.png'
import github from '../../../assets/img/github.png'
import javascript from '../../../assets/img/javascript.png'
import node from '../../../assets/img/node.png'
import react from '../../../assets/img/react.png'
import mongodb from '../../../assets/img/mongodb.png'
import nextjs from '../../../assets/img/nextjs.png'
import typescript from '../../../assets/img/typescript.png'


const skills = [
  
  { name: "Next JS", icon: `${nextjs}` },
  { name: "React JS", icon: `${react}` },
  { name: "JavaScript", icon: `${javascript}` },
  { name: "TypeScript", icon: `${typescript}` },
  { name: "Node JS", icon: `${node}` },
  { name: "Express JS", icon: `${express}` },
  { name: "MongoDB", icon: `${mongodb}` },
  { name: "HTML 5", icon: `${html5}` },
  { name: "Tailwind CSS", icon: `${tailwind}` },
  { name: "CSS 3", icon: `${css3}` },
  { name: "GitHub", icon: `${github}` },
];

function SkillsSection() {
  return (
    <section className="bg-gray-900 text-white pb-12" id="skill">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-1">
        {/* Title */}
        <h2 className="text-6xl font-bold text-center py-12">
          SKILLS
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-20 h-20 mb-4"
              />
              <p className="text-center text-gray-300">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
