import React from "react";

function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white/70 backdrop-blur rounded-xl p-6 shadow">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <h3 className="font-semibold">Scrapyard Project</h3>
            <p>Scrap product marketplace built with the MERN stack.</p>
            <a href="#" className="text-blue-500 hover:underline">View on GitHub</a>
          </div>
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <h3 className="font-semibold">Chess Possible Moves Calculator</h3>
            <p>Unity & C# tool to calculate legal chess moves.</p>
            <a href="#" className="text-blue-500 hover:underline">View on GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
