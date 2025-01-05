import React from "react";

function AboutMe() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-5xl font-bold mb-10 text-center">ABOUT ME</h2>

        {/* Description */}
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          Hello! I am Muhammad Nazmus Sakib, a passionate web developer with a strong foundation in
          mathematics and programming. With expertise in MERN stack development, I specialize in
          building efficient and scalable web applications. My love for problem-solving and learning
          has guided me through a journey of academic excellence and hands-on experience in the
          software development world.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          During my undergraduate studies, I developed a keen interest in data science, particularly focusing on high-dimensional data, blending my love for coding and mathematical statistics. Over time, my interests shifted towards web development, where I aim to build a fulfilling career. Coding has always been a joy for me, and exploring new technologies in web development keeps my passion alive.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          Currently, I am focusing on mastering an object-oriented programming language like C#, while further advancing my skills in MERN stack technologies. My goal is to continually grow as a developer, creating innovative solutions and contributing to impactful projects.
        </p>

        {/* Educational Information */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Master of Science (M.S.)</h3>
            <p className="text-gray-300">
              In Applied Mathematics from the <span className="font-semibold">University of Chittagong, Bangladesh</span>.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Bachelor of Science (B.Sc. Honours)</h3>
            <p className="text-gray-300">
              In Mathematics from the <span className="font-semibold">University of Chittagong, Bangladesh</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
