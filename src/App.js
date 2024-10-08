import React from "react";
import "./App.css";  // Import CSS for styling

import Header from "./Header";
import Hero from "./Hero";
import WorkExperiences from "./WorkExperiences";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WorkExperiences />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
