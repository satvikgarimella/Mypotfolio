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
            <p>I built this personal portfolio to showcase my skills and projects, highlighting my experience in development and design. The website was created using React JS for a dynamic, responsive user interface. It reflects my passion for clean design, attention to detail, and modern web development technologies.</p>
        </div>
        <div className="project-card">
          <h3>Youtube Clone</h3>
            <p>This YouTube Clone project features a React frontend and a Node.js/Express backend. It displays a list of predefined videos using YouTube embeds and allows users to search for additional videos through the YouTube Data API. The backend handles search requests and communicates with the YouTube API to fetch dynamic results. While the predefined videos are fully functional, the search feature is still being improved to ensure seamless communication between the frontend and backend.Link to Repo: https://github.com/satvikgarimella/YouTube_Clone</p>
          <img src={youtubeImage} alt="YouTube Clone" style={{ width: 'auto', height: 'auto' }} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
