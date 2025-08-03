import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e]">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl font-bold text-white text-center mb-8 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-purple-500 after:mx-auto after:mt-2"
          data-aos="fade-up"
        >
          About Me
        </h2>

        {/* Info grid only (no photo) */}
        <div className="grid sm:grid-cols-2 gap-6" data-aos="fade-left">
          <div className="bg-[#1f1f30] rounded-xl p-6 border border-[#262635] hover:border-purple-500 hover:shadow-purple-500/30 hover:shadow-md transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-semibold mb-2 text-purple-400">My Professional Story</h3>
            <p className="text-gray-400 text-sm">
              I’m Akash, a full-stack developer with strong experience in React, Node.js & MongoDB.
              I enjoy solving real-world problems through web apps and constantly learning new technologies.
            </p>
          </div>

          <div className="bg-[#1f1f30] rounded-xl p-6 border border-[#262635] hover:border-purple-500 hover:shadow-purple-500/30 hover:shadow-md transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-semibold mb-2 text-purple-400">Education</h3>
            <p className="text-gray-400 text-sm">
              B.Tech in Computer Science Engineering (graduating 2025). Focused on web development, data structures & cloud computing.
            </p>
          </div>

          <div className="bg-[#1f1f30] rounded-xl p-6 border border-[#262635] hover:border-purple-500 hover:shadow-purple-500/30 hover:shadow-md transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-semibold mb-2 text-purple-400">Career Goals</h3>
            <p className="text-gray-400 text-sm">
              To work as a MERN stack developer, build scalable apps, and eventually lead projects that make a real impact.
            </p>
          </div>

          <div className="bg-[#1f1f30] rounded-xl p-6 border border-[#262635] hover:border-purple-500 hover:shadow-purple-500/30 hover:shadow-md transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-semibold mb-2 text-purple-400">Tools & Interests</h3>
            <p className="text-gray-400 text-sm">
              Git, VS Code, Figma, and exploring design systems & UI animations to make apps more engaging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
