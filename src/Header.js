import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <h1 className="logo">Satvik's Portfolio</h1>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
      <nav>
        <ul>
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#work-experience">Work Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
