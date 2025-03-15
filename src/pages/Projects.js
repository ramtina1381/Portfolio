import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import projects from '../data/project.js'; // ✅ Import projects array

import '../styles/Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={project.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={project.thumbnail} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-tech"><strong>Technologies:</strong> {project.technologies}</p>
            <Link to={project.link} className="project-link">Learn More</Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
