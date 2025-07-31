import React from "react";

function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white/70 backdrop-blur rounded-xl p-6 shadow">
      <img src="/profile.jpg" alt="My Photo" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md" />
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          Hi! I'm Akash, a passionate full-stack developer specializing in React, Node.js & MongoDB. 
          I love turning ideas into functional web apps and always ready for new challenges!
        </p>
      </div>
    </section>
  );
}

export default About;
