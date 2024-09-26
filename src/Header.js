import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Satvik's Portfolio</h1>
      <nav>
        <ul>
          <li>
            <a href="#about-me">About Me</a>
          </li>{" "}
          {/* Corrected href to match section id */}
          <li>
            <a href="#work-experience">Work Experience</a>
          </li>{" "}
          {/* Corrected href */}
          <li>
            <a href="#projects">Projects</a>
          </li>{" "}
          {/* Corrected href */}
          <li>
            <a href="#certificates">Certificates</a>
          </li>{" "}
          {/* Corrected href */}
          <li>
            <a href="#contact">Contact</a>
          </li>{" "}
          {/* Corrected href */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
