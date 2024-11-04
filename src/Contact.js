// src/ContactForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      e.target, 
      'YOUR_USER_ID'     // Replace with your EmailJS user ID
    )
    .then((result) => {
      alert('Message sent successfully!');
    }, (error) => {
      alert('Failed to send message, please try again later.');
    });

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={sendEmail} className="contact-form">
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" className="cta">Send Message</button>
    </form>
  );
};

export default ContactForm;
