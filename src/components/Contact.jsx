import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a]">
      <div className="max-w-3xl mx-auto bg-[#1f1f30] rounded-xl p-8 border border-[#262635]
                      hover:border-purple-500 hover:shadow-purple-500/30 hover:shadow-md
                      transition-all duration-300 ease-in-out"
           data-aos="fade-up">
        
        <h2 
          className="text-3xl font-bold text-white text-center mb-4 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-purple-500 after:mx-auto after:mt-2"
        >
          Contact
        </h2>

        <p className="text-gray-400 text-center mb-4">
          Feel free to reach out via email or connect on LinkedIn:
        </p>

        <div className="text-center">
          <a 
            href="mailto:youremail@example.com"
            className="text-purple-400 hover:text-purple-300 block mb-2"
          >
            youremail@example.com
          </a>
          <a 
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300"
          >
            Your LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
