import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Satvik's Portfolio</h1>
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
