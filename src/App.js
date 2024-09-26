import React from "react";
import "./App.css";

import Header from "./Header";
import Hero from "./Hero";
import WorkExpirences from "./WorkExpirences"; // Correct spelling of WorkExperience
import Project from "./Project"; // Correct spelling of Projects
import Certificates from "./Certificates"; // Ensure Certificates is imported
import Contact from "./Contact"; // Ensure Contact is imported
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WorkExpirences /> {/* Corrected spelling */}
      <Project /> {/* Corrected spelling */}
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
