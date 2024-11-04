import React from "react";
import azureImage from "./Azure.png"; // Adjust path relative to where this component is located

const App = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <section id="certificates" className="certificates">
        <h2>Certificates</h2>
        <div className="cert-list">
          <div className="cert-card">
            <h3>Azure</h3>
            {/* Display the imported image here */}
            <img
              src={azureImage}
              alt="Azure"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
