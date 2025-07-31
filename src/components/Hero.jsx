import React from "react";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-2">Hi, I'm Akash Choudhary</h1>
      <p className="text-lg md:text-xl mb-4">Full-stack Developer | MERN | Freelance IT Services</p>
      <a
        href="#contact"
        className="inline-block bg-white text-blue-600 px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-100 transition"
      >
        Contact Me
      </a>
    </section>
  );
}

export default Hero;
