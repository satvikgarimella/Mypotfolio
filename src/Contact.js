import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for valid email and non-empty fields
    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(""); // Clear any previous errors

    // Format the message for the mailto link
    const formattedMessage = encodeURIComponent(message);
    const mailtoLink = `mailto:satvikgarimella2@gmail.com?subject=Message from ${name}&body=${formattedMessage}%0D%0A%0D%0AReply to: ${email}`;
    
    // Open default mail client with mailto link
    window.location.href = mailtoLink;

    // Reset the form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>You can reach me via email or phone using the form below.</p>

      {/* Display error message if any */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            required
          ></textarea>
        </div>
        <button type="submit" className="cta">
          Send Message
        </button>
      </form>

      <div className="contact-options">
        <p>
          Or, you can call me directly at:{" "}
          <a href="tel:+16478044968">647-804-4968</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
