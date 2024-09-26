import React from "react";

const Hero = () => {
  const scrollToWorkExperience = () => {
    const workExperienceSection = document.getElementById("work-experience");
    if (workExperienceSection) {
      workExperienceSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <h2>Hello, I'm Satvik</h2>
      <p>
        I’m a passionate developer with a love for business and
        entrepreneurship. As a proactive leader, I’ve successfully managed teams
        and projects, focusing on quality, communication, and problem-solving. I
        thrive on motivating others and driving projects toward common goals.
        Quick to learn and adaptable, I’m always ready to add value to any team.
      </p>
      <button className="cta" onClick={scrollToWorkExperience}>
        View My Work
      </button>
    </section>
  );
};

export default Hero;
