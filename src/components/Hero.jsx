import React from "react";
import { ReactTyped } from "react-typed";
import myPhoto from "../assets/myphoto.jpg";

export default function Hero() {
  return (
    <section className="relative bg-[#0f0f1a] text-white py-20 overflow-hidden">
      {/* Background geometric lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute right-0 top-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 400"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6 relative z-10">
        {/* Left Text Section */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2">
            Hi, I am
          </h1>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-purple-500 mb-4">
            Akash Choudhary
          </h1>

          <h2 className="text-xl md:text-2xl font-bold mb-6">
            I am a{" "}
            <ReactTyped
              strings={["Competitive Programmer", "Full-stack Developer"]}
              typeSpeed={50}
              backSpeed={30}
              backDelay={1500}
              loop
              className="text-purple-400"
            />
          </h2>

          <p className="text-gray-300 mb-8 leading-relaxed">
            Computer Science enthusiast with professional experience in building
            high-performance web applications. Skilled in React, Node.js, Express, 
            and MongoDB. Passionate about creating scalable solutions that solve 
            real-world problems with technical excellence.
          </p>

          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition"
          >
            Contact Me
          </a>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 flex justify-center md:justify-end relative">
          {/* Glow Effect */}
          <div className="absolute w-56 h-56 md:w-64 md:h-64 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
          
          <img
            src={myPhoto}
            alt="Akash Choudhary"
            className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-2 border-purple-500 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
