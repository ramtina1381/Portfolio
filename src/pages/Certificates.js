import React from 'react';
import '../styles/Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      title: 'Data Quality: Core Concepts',
      issuedBy: 'LinkedIn',
      link: '/Certs/DataQuality.pdf', // Local file path
    },
    {
      title: 'Machine Learning Specialization',
      issuedBy: 'DeepLearning.AI, Stanford University',
      link: '/Certs/Machine_Learning_Coursera.pdf', // Local file path
    },
    {
      title: 'Machine Learning and AI',
      issuedBy: 'University of Toronto',
    },
    {
      title: 'Databases and SQL for Data Science with Python',
      issuedBy: 'IBM',
      link: '/Certs/DataBaseSqlIBM.pdf', // Local file path
    },
    {
      title: 'Machine Learning with Python',
      issuedBy: 'IBM',
      link: '/Certs/MachineLearningIBM.pdf', // Local file path
    },
    {
      title: 'Data Analysis with Python',
      issuedBy: 'IBM',
      link: '/Certs/DataAnalysisIBM.pdf', // Local file path
    }
  ];

  return (
    <div className="certificates-container">
      <h1 className="certificates-title">Certifications</h1>
      <ul className="certificates-list">
        {certificates.map((cert, index) => (
          <li key={index} className="certificate-item">
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-link"
              download={cert.title} // Add download functionality
            >
              <div className="certificate-title">{cert.title}</div>
              <div className="certificate-issued-by">{cert.issuedBy}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certificates;
