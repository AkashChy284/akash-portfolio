import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaFigma } from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a]">
      <div className="max-w-5xl mx-auto">
        <h2 
          className="text-3xl font-bold text-white text-center mb-8 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-purple-500 after:mx-auto after:mt-2"
          data-aos="fade-up"
        >
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Programming Languages */}
          <div 
            className="bg-[#1f1f30] rounded-xl p-6 border border-[#262635] hover:border-purple-500 
                      hover:shadow-purple-500/30 hover:shadow-md transition-all duration-300 ease-in-out"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold mb-2 text-purple-400">Programming Languages</h3>
            <div className="flex gap-4 text-2xl text-gray-300">
              <FaJs title="JavaScript" />
              <span className="text-sm">TypeScript, C++</span>
            </div>
          </div>

          {/* Frontend */}
          <div 
            className="bg-[#1f1f30] rounded-xl p-6 border border-[#262635] hover:border-purple-500 
                      hover:shadow-purple-500/30 hover:shadow-md transition-all duration-300 ease-in-out"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold mb-2 text-purple-400">Frontend</h3>
            <div className="flex gap-4 text-2xl text-gray-300">
              <FaReact title="React" />
              <FaHtml5 title="HTML5" />
              <FaCss3Alt title="CSS3" />
              <span className="text-sm">Tailwind CSS</span>
            </div>
          </div>

          {/* Backend */}
          <div 
            className="bg-[#1f1f30] rounded-xl p-6 border border-[#262635] hover:border-purple-500 
                      hover:shadow-purple-500/30 hover:shadow-md transition-all duration-300 ease-in-out"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold mb-2 text-purple-400">Backend</h3>
            <div className="flex gap-4 text-2xl text-gray-300">
              <FaNodeJs title="Node.js" />
              <FaDatabase title="MongoDB" />
              <span className="text-sm">Express.js</span>
            </div>
          </div>

          {/* Tools & Workflow */}
          <div 
            className="bg-[#1f1f30] rounded-xl p-6 border border-[#262635] hover:border-purple-500 
                      hover:shadow-purple-500/30 hover:shadow-md transition-all duration-300 ease-in-out"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold mb-2 text-purple-400">Tools & Workflow</h3>
            <div className="flex gap-4 text-2xl text-gray-300">
              <FaGitAlt title="Git" />
              <FaFigma title="Figma" />
              <span className="text-sm">VS Code, Deployment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
