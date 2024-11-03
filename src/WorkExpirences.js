import React from "react";

const WorkExperience = () => {
  return (
    <section id="work-experience" className="WorkExperience">
      <h2>Work Experience</h2>
      <div className="WorkExperience-list">
        <div className="WorkExperience-card">
          <h3>Full Stack Developer @ SaiDham Food Bank</h3>
          <p>
            Designed a responsive, user-friendly website using React JS and CSS,
            with a backend implemented in Node.js and Django.
          </p>
        </div>
        <div className="WorkExperience-card">
          <h3>Co-Lead @ Fx Hackathons</h3>
          <p>
            Organized hackathons aimed at exposing students with less programming experience 
            to diverse challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
