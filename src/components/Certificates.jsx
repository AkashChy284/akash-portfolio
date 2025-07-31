import React from "react";

function Certificates() {
  return (
    <section id="certificates" className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white/70 backdrop-blur rounded-xl p-6 shadow">
        <h2 className="text-2xl font-semibold mb-4">Certificates</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <img src="/certificate1.jpg" alt="Certificate 1" className="rounded mb-2"/>
            <h3 className="font-semibold">Web Development Certificate</h3>
            <p>Issued by XYZ Academy</p>
          </div>
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <img src="/Certificate2.jpg" alt="Certificate 2" className="rounded mb-2"/>
            <h3 className="font-semibold">React Specialist Certificate</h3>
            <p>Issued by ABC Institute</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
