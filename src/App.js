import React from "react";
import "./App.css";

import Header from "./Header";
import Hero from "./Hero";
import WorkExperiences from "./WorkExperiences"; // Corrected spelling
import Projects from "./Projects"; // Corrected spelling
import Certificates from "./Certificates";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WorkExperiences /> {/* Corrected spelling */}
      <Projects /> {/* Corrected spelling */}
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
