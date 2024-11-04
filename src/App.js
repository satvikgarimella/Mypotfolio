// src/App.js

import React from 'react';
import Header from './Header';
import Hero from './Hero';
import WorkExperience from './WorkExperience'; // Import WorkExperience correctly
import Projects from './Projects';
import Certificates from './Certificates';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <WorkExperience /> {/* WorkExperience component */}
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
