import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', senderEmail: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:ramtin.abz7@gmail.com?subject=Message from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.senderEmail}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-container">
      <section className="contact-header">
        <h1>Contact Me</h1>
        <p>Feel free to reach out to me through any of the contact methods below!</p>
      </section>

      <section className="contact-info">
        <a href="mailto:ramtin.abz7@gmail.com" className="contact-icon email">
          <FaEnvelope size={40} />
        </a>
        <a href="tel:+19058085946" className="contact-icon phone">
          <FaPhone size={40} />
        </a>
        <a href="https://www.linkedin.com/in/ramtinabolfazli/" target="_blank" rel="noopener noreferrer" className="contact-icon linkedin">
          <FaLinkedin size={40} />
        </a>
        <a href="https://github.com/ramtina1381" target="_blank" rel="noopener noreferrer" className="contact-icon github">
          <FaGithub size={40} />
        </a>
        <div className="contact-icon address">
          <FaMapMarkerAlt size={40} />
          <p>Toronto, ON</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form">
        <h2>Send Me a Message</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="senderEmail"
            placeholder="Your Email"
            value={formData.senderEmail}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="send-button">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
