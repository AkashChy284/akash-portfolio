import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop"; // make sure this file exists
import Certificates from "./components/Certificates";
import Hero from "./components/Hero";
import Skills from "./components/Skills";



function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-gray-100">
      <Header />
      <Hero />         {/* New Hero section right after header */}
      <About />
      <Skills />       {/* New Skills section after about */}
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
      <BackToTop />

    </div>
  );
}

export default App;
