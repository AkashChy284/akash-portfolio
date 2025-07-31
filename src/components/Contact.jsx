import React from "react";

function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white/70 backdrop-blur rounded-xl p-6 shadow text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: <a href="mailto:youremail@example.com" className="text-blue-500 hover:underline">youremail@example.com</a></p>
        <p>LinkedIn: <a href="#" className="text-blue-500 hover:underline">Your LinkedIn</a></p>
      </div>
    </section>
  );
}

export default Contact;
