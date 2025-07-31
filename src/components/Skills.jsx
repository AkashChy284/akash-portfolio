import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from "react-icons/fa";

function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white/70 backdrop-blur rounded-xl p-6 shadow text-center">
        <h2 className="text-2xl font-semibold mb-4">My Skills</h2>
        <div className="flex justify-center flex-wrap gap-6 text-4xl text-blue-600">
          <FaReact title="React" />
          <FaNodeJs title="Node.js" />
          <FaJs title="JavaScript" />
          <FaHtml5 title="HTML5" />
          <FaCss3Alt title="CSS3" />
          <FaDatabase title="MongoDB" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
