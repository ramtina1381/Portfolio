import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/project.js'; // Import projects array
import '../styles/ProjectDetail.css'; // Import styles

const ProjectDetail = () => {
  const { projectId } = useParams(); // Get the project ID from URL
  const project = projects.find(p => p.id === projectId); // Find the selected project
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [currentImage, setCurrentImage] = useState(null); // State for the current image

  if (!project) {
    return <h2>Project not found</h2>;
  }

  // Open the modal with the clicked image
  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="project-detail">
      <h2 className="project-title">{project.title}</h2>

      {/* Project Description */}
      {project.description && <p className="project-description">{project.description}</p>}

      {/* Project Sections (Rendered Dynamically) */}
      {project.introduction && (
        <div className="project-section">
          <h3>Introduction</h3>
          <p>{project.introduction}</p>
        </div>
      )}

      {/* Chefster-Specific Sections */}
      {project.loginPage && (
        <div className="project-section">
          <h3>Login Page</h3>
          <p>{project.loginPage}</p>
          {project.loginImg && (
            <img
              src={project.loginImg}
              alt="Login Page"
              className="project-image"
              onClick={() => openModal(project.loginImg)}
            />
          )}
        </div>
      )}

      {project.recipeRecommender && (
        <div className="project-section">
          <h3>Recipe Recommender</h3>
          <p>{project.recipeRecommender}</p>
          {project.recipeRecommenderImg && (
            <img
              src={project.recipeRecommenderImg}
              alt="Recipe Recommender"
              className="project-image"
              onClick={() => openModal(project.recipeRecommenderImg)}
            />
          )}
        </div>
      )}

      {project.recipePage && (
        <div className="project-section">
          <h3>Recipe Page</h3>
          <p>{project.recipePage}</p>
          {project.recipeImg && (
            <img
              src={project.recipeImg}
              alt="Recipe Page"
              className="project-image"
              onClick={() => openModal(project.recipeImg)}
            />
          )}
        </div>
      )}

      {project.chatScreen && (
        <div className="project-section">
          <h3>Chat Screen</h3>
          <p>{project.chatScreen}</p>
          {project.chatImg && (
            <img
              src={project.chatImg}
              alt="Chat Screen"
              className="project-image"
              onClick={() => openModal(project.chatImg)}
            />
          )}
        </div>
      )}

      {project.chatDetail && (
        <div className="project-section">
          <h3>Chat Detail</h3>
          <p>{project.chatDetail}</p>
          {project.chatDetailImg && (
            <img
              src={project.chatDetailImg}
              alt="Chat Detail"
              className="project-image"
              onClick={() => openModal(project.chatDetailImg)}
            />
          )}
        </div>
      )}

      {/* Telus-Specific Sections */}
      {project.pipelineImage && (
        <div className="project-section">
          <h3>Data Pipeline</h3>
          <img
            src={project.pipelineImage}
            alt="Data Pipeline"
            className="project-image"
            onClick={() => openModal(project.pipelineImage)}
          />
        </div>
      )}

      {project.bigQueryDescription && (
        <div className="project-section">
          <h3>BigQuery Setup</h3>
          <p>{project.bigQueryDescription}</p>
          {project.bigQueryImage && (
            <img
              src={project.bigQueryImage}
              alt="BigQuery"
              className="project-image"
              onClick={() => openModal(project.bigQueryImage)}
            />
          )}
        </div>
      )}

      {project.insights && (
        <div className="project-section">
          <h3>Observations</h3>
          <p>{project.insights}</p>
          {project.insightsImage && (
            <img
              src={project.insightsImage}
              alt="Observations"
              className="project-image"
              onClick={() => openModal(project.insightsImage)}
            />
          )}
        </div>
      )}

      {project.chartDescription && (
        <div className="project-section">
          <h3>Charts</h3>
          <p>{project.chartDescription}</p>
          {project.chartImage && (
            <img
              src={project.chartImage}
              alt="Charts"
              className="project-image"
              onClick={() => openModal(project.chartImage)}
            />
          )}
        </div>
      )}

      {/* Travel App-Specific Sections */}
      {project.homepageDescription && (
        <div className="project-section">
          <h3>Homepage Overview</h3>
          <p>{project.homepageDescription}</p>
          {project.homepageImage && (
            <img
              src={project.homepageImage}
              alt="Homepage"
              className="project-image"
              onClick={() => openModal(project.homepageImage)}
            />
          )}
        </div>
      )}

      {project.flightListDescription && (
        <div className="project-section">
          <h3>Flight List</h3>
          <p>{project.flightListDescription}</p>
          {project.flightListImage && (
            <img
              src={project.flightListImage}
              alt="Flight List"
              className="project-image"
              onClick={() => openModal(project.flightListImage)}
            />
          )}
        </div>
      )}

      {project.flightDetailsDescription && (
        <div className="project-section">
          <h3>Flight Details</h3>
          <p>{project.flightDetailsDescription}</p>
          {project.flightDetailsImage && (
            <img
              src={project.flightDetailsImage}
              alt="Flight Details"
              className="project-image"
              onClick={() => openModal(project.flightDetailsImage)}
            />
          )}
        </div>
      )}

      {project.bookingReceiptDescription && (
        <div className="project-section">
          <h3>Booking Receipt</h3>
          <p>{project.bookingReceiptDescription}</p>
          {project.bookingReceiptImage && (
            <img
              src={project.bookingReceiptImage}
              alt="Booking Receipt"
              className="project-image"
              onClick={() => openModal(project.bookingReceiptImage)}
            />
          )}
        </div>
      )}

      {/* Spring Boot-Specific Sections */}
      {project.docker && (
        <div className="project-section">
          <h3>Docker</h3>
          <p>{project.docker}</p>
          {project.dockerImg && (
            <img
              src={project.dockerImg}
              alt="Docker"
              className="project-image"
              onClick={() => openModal(project.dockerImg)}
            />
          )}
        </div>
      )}

      {project.postman && (
        <div className="project-section">
          <h3>Postman</h3>
          <p>{project.postman}</p>
          {project.postmanImg && (
            <img
              src={project.postmanImg}
              alt="Postman"
              className="project-image"
              onClick={() => openModal(project.postmanImg)}
            />
          )}
        </div>
      )}

      {project.swagger && (
        <div className="project-section">
          <h3>Swagger</h3>
          <p>{project.swagger}</p>
          {project.swaggerImg && (
            <img
              src={project.swaggerImg}
              alt="Swagger"
              className="project-image"
              onClick={() => openModal(project.swaggerImg)}
            />
          )}
        </div>
      )}

      {/* Technologies Used */}
      {project.technologies && (
        <p className="tech-stack">
          <strong>Technologies Used:</strong> {project.technologies}
        </p>
      )}

      {/* Modal for enlarging images */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={currentImage} alt="Enlarged" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;