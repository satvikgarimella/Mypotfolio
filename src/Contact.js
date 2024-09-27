:root {
  --main-bg-color: #2c2f33;
  --header-bg-color: #23272a;
  --accent-color: #7289da;
  --text-color: #fff;
  --subtext-color: #99aab5;
  --card-bg-color: #23272a;
}

/* Universal styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: var(--main-bg-color);
  color: var(--text-color);
  line-height: 1.6;
  transition: all 0.3s ease;
  text-align: center;
}

img {
  max-width: 100%;
  height: auto;
}

/* Header styling */
.header {
  background-color: var(--header-bg-color);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 24px;
  color: var(--accent-color);
  transition: color 0.3s ease;
}

.header ul {
  display: flex;
  list-style: none;
}

.header li {
  margin-left: 20px;
}

.header a {
  color: var(--text-color);
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;
}

.header a:hover {
  color: var(--accent-color);
}

/* Hero section styling */
.hero {
  position: relative;
  text-align: center;
  padding: 100px 20px;
  background: linear-gradient(
    135deg,
    var(--accent-color),
    var(--subtext-color)
  );
  overflow: hidden;
}

.hero h2 {
  font-size: 40px;
  margin-bottom: 20px;
  animation: fadeIn 2s ease-in-out;
}

.hero p {
  font-size: 18px;
  margin-bottom: 30px;
  animation: fadeIn 2.5s ease-in-out;
}

.cta {
  background-color: var(--accent-color);
  color: var(--text-color);
  border: none;
  padding: 15px 30px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.cta:hover {
  background-color: var(--subtext-color);
  transform: translateY(-5px);
}

/* WorkExperience Section */
.work-experience,
.projects,
.certificates {
  padding: 60px 20px;
  background-color: var(--main-bg-color);
}

.work-experience h2,
.projects h2,
.certificates h2 {
  font-size: 36px;
  margin-bottom: 30px;
  color: var(--accent-color);
}

.work-experience-list,
.project-list,
.cert-list {
  display: flex;
  justify-content: space-around;
  gap: 30px;
  flex-wrap: wrap;
}

.work-experience-card,
.project-card,
.cert-card {
  background-color: var(--card-bg-color);
  padding: 40px;
  width: 100%; /* Set to 100% width on mobile */
  max-width: 400px; /* Max width for larger screens */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.work-experience-card:hover,
.project-card:hover,
.cert-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.work-experience-card h3,
.project-card h3,
.cert-card h3 {
  color: var(--accent-color);
  margin-bottom: 10px;
}

/* Contact Section Styling */
.contact-section {
  padding: 80px 20px; /* Increased padding for better spacing */
  background-color: var(--main-bg-color);
  color: var(--text-color);
  text-align: center;
}

.contact-section h2 {
  font-size: 36px;
  font-weight: bold;
  color: var(--accent-color);
  margin-bottom: 20px;
}

.contact-section p {
  font-size: 18px;
  color: var(--subtext-color);
  margin-bottom: 40px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  background-color: var(--card-bg-color); /* Add card background */
  padding: 40px;
  border-radius: 12px; /* Smooth corners */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Soft shadow */
}

.contact-form div {
  width: 100%;
  margin-bottom: 20px;
}

.contact-form label {
  font-size: 16px;
  font-weight: 500;
  color: var(--text-color);
  display: block;
  margin-bottom: 8px;
  text-align: left;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 15px;
  border-radius: 8px;
  border: 2px solid var(--subtext-color);
  background-color: var(--header-bg-color);
  color: var(--text-color);
  font-size: 16px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: var(--accent-color);
  box-shadow: 0 0 8px rgba(114, 137, 218, 0.5);
  outline: none;
}

.contact-form textarea {
  height: 150px;
  resize: vertical;
}

.contact-form button {
  background-color: var(--accent-color);
  color: var(--text-color);
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;
}

.contact-form button:hover {
  background-color: var(--subtext-color);
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.contact-options {
  margin-top: 30px;
}

.contact-options a {
  color: var(--accent-color);
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-options a:hover {
  color: var(--text-color);
}

/* Footer Styling */
.footer {
  text-align: center;
  padding: 20px;
  background-color: var(--header-bg-color);
  color: var(--subtext-color);
  margin-top: 40px;
}

.footer p {
  margin: 0;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero::before {
  content: "";
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  top: -50px;
  left: -50px;
  animation: float 6s ease-in-out infinite;
}

.hero::after {
  content: "";
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  bottom: -100px;
  right: -100px;
  animation: float 8s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
}

/* Responsive Design - Media Queries for Mobile
