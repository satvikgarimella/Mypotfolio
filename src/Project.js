import React from "react";
import youtubeImage from "./Youtube.png"; // Ensure path is correct

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>This Website</h3>
          <p>Personal portfolio created using React JS.</p>
        </div>
        <div className="project-card">
          <h3>Stock Forecaster</h3>
          <p>
            A stock price forecasting tool using <code>RandomForestRegressor</code>.
          </p>
        </div>
        <div className="project-card">
          <h3>YouTube Clone</h3>
          <p>React frontend and Node.js backend clone of YouTube.</p>
          <img src={youtubeImage} alt="YouTube Clone" style={{ width: "100%", maxWidth: "400px" }} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
