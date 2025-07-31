// src/components/Header.jsx
import React from "react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-semibold">Your Name</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#certificates" className="hover:underline">Certificates</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
}
