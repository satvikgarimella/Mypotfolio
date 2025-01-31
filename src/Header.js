import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing LinkedIn and GitHub icons

const Header = () => {
  return (
    <header className="header">
      {/* Top Section */}
      <div className="header-top">
        <h1 className="logo">Satvik's Portfolio</h1>
        <div className="social-links">
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/satvik-garimella-100049201/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          {/* GitHub Icon */}
          <a
            href="https://github.com/satvikgarimella"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Navigation Section */}
      <nav>
        <ul>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#work-experience">Work Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#certificates">Certificates</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
