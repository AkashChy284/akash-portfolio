import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0f0f1a]/80 backdrop-blur border-b border-[#262635]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl md:text-2xl font-semibold text-white">Akash Portfolio</h1>
        <nav className="space-x-6">
          <a href="#about" className="text-gray-200 hover:text-purple-400 transition">About</a>
          <a href="#skills" className="text-gray-200 hover:text-purple-400 transition">Skills</a>
          <a href="#certificates" className="text-gray-200 hover:text-purple-400 transition">Certificates</a>
          <a href="#contact" className="text-gray-200 hover:text-purple-400 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}
