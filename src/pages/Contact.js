import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <section className="contact-header">
        <h1>Contact Me</h1>
        <p>Feel free to reach out to me through any of the contact methods below!</p>
      </section>

      <section className="contact-info">
        <div className="contact-item">
          <strong>Email:</strong> <a href="mailto:ramtin.abz7@gmail.com">ramtin.abz7@gmail.com</a>
        </div>
        <div className="contact-item">
          <strong>Phone:</strong> <a href="tel:+19058085946">+1 (905) 808-5946</a>
        </div>
        <div className="contact-item">
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ramtinabolfazli/" target="_blank" rel="noopener noreferrer">Visit my LinkedIn</a>
        </div>
        <div className="contact-item">
          <strong>GitHub:</strong> <a href="https://github.com/ramtina1381" target="_blank" rel="noopener noreferrer">Visit my GitHub</a>
        </div>
        <div className="contact-item">
          <strong>Address:</strong> Toronto, ON
        </div>
      </section>
    </div>
  );
};

export default Contact;
