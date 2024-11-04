// src/App.js

import React from 'react';
import './App.css'; // Importing App.css for component-specific styling

import Header from './Header';
import Hero from './Hero';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import Certificates from './Certificates';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <WorkExperience />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
