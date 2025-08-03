import React from "react";

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e]">
      <div className="max-w-5xl mx-auto">
        <h2 
          className="text-3xl font-bold text-white text-center mb-8 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-purple-500 after:mx-auto after:mt-2"
          data-aos="fade-up"
        >
          Certificates
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Certificate 1 */}
          <div 
            className="bg-[#1f1f30] rounded-xl p-6 border border-[#262635] 
                        hover:border-purple-500 hover:shadow-purple-500/30 hover:shadow-md 
                        transition-all duration-300 ease-in-out"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold mb-2">Java Development Intern</h3>
            <p className="text-gray-400 mb-2">Internship at Next24tech, July–Sep 2024</p>
            <a 
              href="https://example.com/certificate1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              View Certificate
            </a>
          </div>

          {/* Certificate 2 */}
          <div 
            className="bg-[#1f1f30] rounded-xl p-6 border border-[#262635] 
                        hover:border-purple-500 hover:shadow-purple-500/30 hover:shadow-md 
                        transition-all duration-300 ease-in-out"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold mb-2">XYZ Academy</h3>
            <p className="text-gray-400 mb-2">Certificate in Advanced Frontend Development</p>
            <a 
              href="https://example.com/certificate2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
