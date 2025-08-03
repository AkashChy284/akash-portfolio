import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f1a] border-t border-[#262635] text-center text-gray-500 py-6">
      <div className="flex justify-center space-x-4 mb-2">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
      © 2025 Akash Choudhary. All rights reserved.
    </footer>
  );
}
