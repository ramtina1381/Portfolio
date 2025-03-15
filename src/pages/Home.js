import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profileImg.jpeg'; // Ensure this image exists
import '../styles/Home.css'; // Import the external CSS file

const Home = () => {
  return (
    <div className="home-container">
      {/* Profile Section */}
      <motion.div
        className="profile-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={profileImage}
          alt="Profile"
          className="profile-image"
        />
        <h1 className="profile-name">Ramtin Abolfazli</h1>
        <p className="profile-title">Data Analyst/Software Developer</p>
      </motion.div>

      {/* Introduction Section */}
      <motion.div
        className="intro-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <p className="intro-text">
          Welcome to my portfolio! I am Ramtin Abolfazli, a passionate Data Analyst and Software Developer. 
          Feel free to explore my work and reach out for collaborations or inquiries.
        </p>
      </motion.div>

      {/* Call to Action Section (Grid Layout) */}
      <motion.div
        className="cta-section"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="cta-grid">
          <a href="/projects" className="cta-button">
            View My Projects
          </a>

          <a
            href="/RamtinAbolfazli_resume.pdf" 
            className="cta-button resume-button" 
            download="RamtinAbolfazli_resume.pdf"
          >
            View My Resume
          </a>

          <a
            href="/RamtinAbolfazli_CoverLetter.pdf" 
            className="cta-button cover-letter-button" 
            download="RamtinAbolfazli_CoverLetter.pdf"
          >
            View My Cover Letter
          </a>


          <a href="/certifications" className="cta-button certifications-button">
            View My Certifications
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
