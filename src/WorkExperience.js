import React from 'react';

const WorkExperience = () => {
  return (
    <section id="work-experience" className="WorkExperience">
      <h2>Work Experience</h2>
      <div className="WorkExperience-list">
        {/* Work Experience Card 1 */}
        <div className="WorkExperience-card">
          <h3>Full Stack Developer @ SaiDham Food Bank</h3>
          <p>
            As a Full Stack Developer for a leading food bank initiative, I designed a responsive, user-friendly website using React JS and CSS. 
            The backend, implemented using Node.js and Django, ensured seamless integration, scalability, and security. My work optimized user 
            experience and maintained high availability across devices.
          </p>
        </div>

        {/* Work Experience Card 2 */}
        <div className="WorkExperience-card">
          <h3>Co-Lead @ Fx Hackathons</h3>
          <p>
            As Co-Lead of a student-based club, I organized hackathons aimed at exposing students with less programming experience to diverse 
            challenges. I facilitated meetings, prepared agendas, and developed communication channels between teams, improving collaboration 
            across multiple projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
