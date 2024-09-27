import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedMessage = encodeURIComponent(message);
    const mailtoLink = `mailto:satvikgarimella2@gmail.com?subject=Message from ${name}&body=${formattedMessage}%0D%0A%0D%0AReply to: ${email}`;
    
    // Open the user's default mail client with pre-filled fields
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>You can reach me via email or phone using the form below.</p>

      {/* Contact Form */}
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

      {/* Call Link */}
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
