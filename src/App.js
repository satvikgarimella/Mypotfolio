import React from 'react';
import './styles.css';

import Header from './Header';
import Hero from './Hero';
import WorkExperience from './WorkExperience'; // Corrected spelling in import
import Projects from './Projects';
import Certificates from './Certificates';
import Contact from './Contact'; // Ensure Contact is imported
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <WorkExperience /> {/* WorkExperience is now properly spelled */}
      <Projects />
      <Certificates />
      <Contact /> {/* Added Contact component to the JSX */}
      <Footer />
    </div>
  );
}

export default App;
