// src/Projects.js

import React from 'react';
import youtubeImage from './Youtube.png'; // Adjust path if necessary

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>This Website</h3>
          <p>I built this personal portfolio to showcase my skills and projects...</p>
        </div>
        <div className="project-card">
          <h3>Youtube Clone</h3>
          <p>This YouTube Clone project features a React frontend and a Node.js/Express backend...</p>
          <img src={youtubeImage} alt="YouTube Clone" style={{ width: 'auto', height: 'auto' }} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
