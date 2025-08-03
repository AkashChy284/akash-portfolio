import React from "react";

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a]">
      <h2 
        className="text-3xl font-semibold text-center mb-8 relative inline-block 
                   after:content-[''] after:block after:w-16 after:h-1 after:bg-purple-500 after:mx-auto after:mt-2"
        data-aos="fade-up"
      >
        Projects
      </h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="bg-[#1f1f30] rounded-xl p-4 border border-[#262635] 
                        hover:border-purple-500 hover:shadow-purple-500/30 hover:shadow-md 
                        transition-all duration-300 ease-in-out">
          <h3 className="text-xl font-semibold mb-2">Scrapyard Project</h3>
          <p className="text-gray-400 mb-2">Scrap product marketplace built with the MERN stack.</p>
          <a
            href="https://github.com/yourusername/scrapyard"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300"
          >
            View on GitHub
          </a>
        </div>

        <div className="bg-[#1f1f30] rounded-xl p-4 border border-[#262635] 
                        hover:border-purple-500 hover:shadow-purple-500/30 hover:shadow-md 
                        transition-all duration-300 ease-in-out"
                        data-aos="fade-up" >
                        
          <h3 className="text-xl font-semibold mb-2">Chess Possible Moves Calculator</h3>
          <p className="text-gray-400 mb-2">Unity & C# tool to calculate legal chess moves.</p>
          <a
            href="https://github.com/yourusername/chess-calculator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
