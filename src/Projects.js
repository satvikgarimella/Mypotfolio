import React from 'react';
import youtubeImage from './Youtube.png'; // Update this path if Youtube.png is elsewhere
import weatherAppImage from './IMG_371FE8A05620-1.jpeg'; // Adjusted path based on your file's location

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">

        {/* Project Card: This Website */}
        <div className="project-card">
          <h3>This Website</h3>
          <p>
            I built this personal portfolio to showcase my skills and projects, highlighting my experience in development and design.
            The website was created using React JS for a dynamic, responsive user interface. It reflects my passion for clean design, attention
            to detail, and modern web development technologies.
          </p>
        </div>

        {/* Project Card: YouTube Clone */}
        <div className="project-card">
          <h3>YouTube Clone</h3>
          <p>
            This YouTube Clone project features a React frontend and a Node.js/Express backend. It displays a list of predefined videos using
            YouTube embeds and allows users to search for additional videos through the YouTube Data API. The backend handles search requests and
            communicates with the YouTube API to fetch dynamic results. While the predefined videos are fully functional, the search feature is
            still being improved to ensure seamless communication between the frontend and backend. 
            <a href="https://github.com/satvikgarimella/YouTube_Clone">Link to Repo</a>
          </p>
          <img src={youtubeImage} alt="YouTube Clone" style={{ width: 'auto', height: 'auto' }} />
        </div>

        {/* Project Card: Stock Forecaster */}
        <div className="project-card">
          <h3>Stock Forecaster</h3>
          <p>
            This project is a stock price forecasting tool using a traditional Machine Learning model, specifically a RandomForestRegressor, to
            predict future stock prices. The project fetches historical stock price data from Yahoo Finance and uses features like moving averages
            to make short-term price predictions.
          </p>
        </div>

        {/* Project Card: Weather App Clone */}
        <div className="project-card">
          <h3>Weather App Clone</h3>
          <p>
            The Weather App Clone is a mobile application built using React Native, designed to provide users with real-time weather updates. 
            By integrating the OpenWeatherMap API, the app fetches current weather conditions and forecasts based on the user's location or 
            manually searched cities. It features a clean and responsive UI, leveraging native components for a seamless user experience.
            <a href="https://github.com/satvikgarimella/weather-app">Link to Repo</a>
          </p>
          <img src={weatherAppImage} alt="Weather App Clone" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

      </div>
    </section>
  );
};

export default Projects;
