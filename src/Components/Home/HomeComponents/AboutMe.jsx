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
