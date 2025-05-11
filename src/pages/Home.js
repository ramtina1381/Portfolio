import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import profileImage from "../assets/profileImg.jpeg"; // Ensure this image exists
import "../styles/Home.css"; // Import the external CSS file

const TABS = ["Experience", "Skills", "Certifications"];

const certificationsData = [
  {
    title: "CompTIA Data+ Data Mining",
    issuer: "LinkedIn",
    issueDate: "May 2025",
    credentialId:
      "1d28a8419f636ece82dccc14fb9be291beda2b204409b8de2600ebbdbba6992b9",
    credentialUrl: null, // Replace with actual URL if available,
    downloadableCert: "CompTIA.pdf",
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM",
    issueDate: "Jan 2025",
    credentialId: "4RG0XSVEcy9G",
    credentialUrl: null, // Replace with actual URL if available,
    downloadableCert: "DataAnalysisIBM.pdf",
  },
  {
    title: "Data Quality: Core Concepts",
    issuer: "LinkedIn",
    issueDate: "Jan 2025",
    credentialId:
      "c88e0505291c98e49809087210283df5b24ea62bbc1263da1c9fca1299dcc7d8",
    credentialUrl: null, // Replace with actual URL if available,
    downloadableCert: "DataQuality.pdf",
  },
  {
    title: "Machine Learning with Python (with Honors)",
    issuer: "IBM",
    issueDate: "Jan 2025",
    credentialId: "BZZ96FT5C1NU",
    credentialUrl: null, // Replace with actual URL if available
    downloadableCert: "MachineLearningIBM.pdf",
  },
  {
    title: "Databases and SQL for Data Science with Python (with Honors)",
    issuer: "IBM",
    issueDate: "Aug 2024",
    credentialId: "2KM8BNYYEJ6G",
    credentialUrl: null, // Replace with actual URL if available
    downloadableCert: "DataBaseSqlIBM.pdf",
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    issueDate: "Aug 2024",
    credentialId: "WBP07GEV7YXU",
    credentialUrl: null, // Replace with actual URL if available
    downloadableCert: "PythonForDataScienceAI.pdf",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    issueDate: "Jul 2024",
    credentialId: "G38D5QF5NP8W",
    credentialUrl: null, // Replace with actual URL if available
    downloadableCert: "Machine_Learning_Coursera.pdf",
  },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState(null);

  const renderTabContent = () => {
    if (!activeTab) {
      return (
        <div className="tab-placeholder">
          <h2>Welcome!</h2>
          <p>Click on any tab above to explore my experience and work.</p>
        </div>
      );
    }
    switch (activeTab) {
      case "Experience":
        return (
          <div className="experience-container">
            <h2 className="experience-title">Experience</h2>

            {/* Technical Assistant */}
            <div className="experience-entry">
              <h3 className="job-title">Technical Assistant</h3>
              <p className="job-info">
                Seniors & Juniors Inc - Los Angeles, USA | December 2024 -
                Present
              </p>
              <ul className="job-details">
                <li>
                  {" "}
                  Collaborated with engineers and managers to gather and
                  organize pickup materials, decommissioned items, and AT&T
                  requests.
                </li>
                <li>
                  Created and maintained comprehensive Excel sheets and CSV
                  files to track material statuses, requests, and site
                  operations.
                </li>
                <li>
                  Streamlined data management processes by writing{" "}
                  <strong>Python scripts</strong> for automating the extraction,
                  formatting, and storage of information from physical
                  paperwork.
                </li>
                <li>
                  Supported antenna and cabinet configuration tasks by
                  coordinating with senior and junior team members to ensure
                  timely delivery of materials and accurate documentation.
                </li>
              </ul>
            </div>

            {/* AIThink LTD */}
            <div className="experience-entry">
              <h3 className="job-title">Software Developer Co-op</h3>
              <p className="job-info">
                AIThink LTD — Toronto, ON | Jan 2024 – Sep 2024
              </p>
              <ul className="job-details">
                <li>
                  Developed and deployed a responsive full-stack web platform
                  using <strong>React.js</strong>, <strong>Node.js</strong>, and{" "}
                  <strong>Firebase</strong> for authentication purposes,
                  resulting in a 25% increase in newsletter signups. Deployed
                  the application via <strong>Google Cloud Run</strong> for
                  scalable hosting.
                </li>
                <li>
                  Engineered a cross-platform group diet mobile application with{" "}
                  <strong>React Native</strong> (front-end),{" "}
                  <strong>Node.js</strong> and <strong>Express.js</strong>{" "}
                  (back-end). Data was stored and managed with{" "}
                  <strong>PostgreSQL</strong> and <strong>Firestore</strong>,
                  later transitioned to <strong>Google Cloud Storage</strong>{" "}
                  buckets for scalability.
                </li>
                <li>
                  Utilized <strong>BigQuery</strong> and <strong>SQL</strong>{" "}
                  for data cleaning, transformation, and validation;
                  significantly enhanced the quality of training datasets and
                  improved downstream{" "}
                  <strong>
                    machine learning model prediction accuracy by 15%
                  </strong>
                  .
                </li>
                <li>
                  Designed and implemented backend logic in{" "}
                  <strong>JavaScript</strong>, created unit tests, and
                  collaborated with QA engineers to identify and resolve
                  critical bugs.
                </li>
              </ul>
            </div>

            {/* MobiHelp */}
            <div className="experience-entry">
              <h3 className="job-title">MobiHelp Tutor</h3>
              <p className="job-info">
                George Brown College — Toronto, ON | Sep 2024 – May 2025
              </p>
              <ul className="job-details">
                <li>
                  Provided over 100 hours of tutoring in <strong>Python</strong>
                  , <strong>SQL</strong>, and <strong>Data Structures</strong>{" "}
                  to 200+ students.
                </li>
                <li>
                  Assisted in troubleshooting software incidents and offering
                  code optimization strategies.
                </li>
                <li>
                  {" "}
                  Guided students in <strong>API development</strong> and{" "}
                  <strong>MVC architecture</strong>, while introducing
                  foundational concepts relevant to{" "}
                  <strong>machine learning pipelines</strong>,{" "}
                  <strong>LLM integration</strong>, and{" "}
                  <strong>AI agent design</strong> using secure and modular
                  coding practices.
                </li>
              </ul>
            </div>
          </div>
        );

      case "Skills":
        return (
          <div className="skills-section">
            <h2 className="section-title">Skills</h2>

            <div className="skills-category">
              <h3 className="skill-heading">Programming Languages</h3>
              <ul className="skill-list">
                <li>
                  <strong>Python</strong> – Scripting, data manipulation, ML
                  pipelines
                </li>
                <li>
                  <strong>Java</strong> – Spring Boot development
                </li>
                <li>
                  <strong>C#</strong> – ASP.NET MVC framework
                </li>
                <li>
                  <strong>JavaScript</strong>, <strong>TypeScript</strong> –
                  Modern ES6+, typed front-end/back-end dev
                </li>
              </ul>
            </div>

            <div className="skills-category">
              <h3 className="skill-heading">Web & Mobile Development</h3>
              <ul className="skill-list">
                <li>
                  <strong>React.js</strong>, <strong>Angular</strong>{" "}
                  (TypeScript), <strong>React Native</strong>
                </li>
                <li>
                  <strong>Node.js</strong>, <strong>Express.js</strong> – REST
                  APIs and server-side logic
                </li>
                <li>
                  Responsive UI development, component-based architecture,
                  animation libraries
                </li>
              </ul>
            </div>

            <div className="skills-category">
              <h3 className="skill-heading">Databases & Cloud</h3>
              <ul className="skill-list">
                <li>
                  <strong>Google Cloud Platform (GCP)</strong> – Cloud Run,
                  Firestore, Storage Buckets, BigQuery
                </li>
                <li>
                  <strong>PostgreSQL</strong>, <strong>MySQL</strong>,{" "}
                  <strong>SQL</strong> – Query optimization, schema design
                </li>
                <li>
                  <strong>Firebase</strong> – Authentication, real-time database
                </li>
              </ul>
            </div>

            <div className="skills-category">
              <h3 className="skill-heading">AI, Machine Learning & Tools</h3>
              <ul className="skill-list">
                <li>
                  <strong>Pandas</strong>, <strong>NumPy</strong>,{" "}
                  <strong>Sklearn</strong> – Data wrangling and model building
                </li>
                <li>
                  <strong>LLMs</strong>, <strong>AI Agents</strong> – Research
                  support and prototyping
                </li>
                <li>
                  <strong>VS Code</strong>, <strong>Git/GitHub</strong>,{" "}
                  <strong>Postman</strong>, <strong>Figma</strong>
                </li>
              </ul>
            </div>
          </div>
        );

      case "Certifications":
        return (
          <div className="certifications-container">
            <h2 className="certifications-title">Certifications</h2>
            {certificationsData.map((cert, index) => (
              <div key={index} className="certification-item">
                <h3>{cert.title}</h3>
                <p>
                  <strong>Issuer:</strong> {cert.issuer}
                </p>
                <p>
                  <strong>Issued:</strong> {cert.issueDate}
                </p>
                {cert.credentialId && (
                  <p>
                    <strong>Credential ID:</strong> {cert.credentialId}
                  </p>
                )}
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Show Credential
                  </a>
                )}
                {/* Download Link for PDF (stored in public/certs folder) */}
                {cert.downloadableCert && (
                  <a
                    href={`/certs/${cert.downloadableCert}`}
                    download
                    className="download-link"
                  >
                    Download Certificate
                  </a>
                )}
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };
  return (
    <div className="home-container">
      {/* Profile Section */}
      <motion.div
        className="profile-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h1 className="profile-name">Ramtin Abolfazli</h1>
        <p className="profile-title">Data Analyst / Software Developer</p>
      </motion.div>

      {/* Introduction Section */}
      <motion.div
        className="intro-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <p className="intro-text">
          Welcome to my portfolio! I am Ramtin Abolfazli, a passionate Data
          Analyst and Software Developer. Feel free to explore my work and reach
          out for collaborations or inquiries.
        </p>
      </motion.div>

      {/* Social Media Icons Section */}
      <motion.div
        className="social-media-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <a
          href="https://www.linkedin.com/in/ramtinabolfazli/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon linkedin"
        >
          <FaLinkedin size={40} />
        </a>

        <a
          href="https://github.com/ramtina1381"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon github"
        >
          <FaGithub size={40} />
        </a>
      </motion.div>

      {/* Call to Action Section (Grid Layout) */}
      {/* Tab Navigation */}
      <div className="tabs">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        className="tab-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {renderTabContent()}
      </motion.div>
    </div>
  );
};

export default Home;
