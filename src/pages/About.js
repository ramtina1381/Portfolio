import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About Me</h1>
      </section>

      <section className="about-content">
        <p>
          Hello! I'm <strong>Ramtin Abolfazli</strong>, a passionate <strong>Software Developer</strong> and <strong>Data Analyst</strong> based in Toronto. Currently, I am pursuing my <strong>Computer Science</strong> degree at <strong>George Brown College</strong>. With a strong background in <strong>data analysis</strong>, <strong>machine learning</strong>, and cloud technologies, I specialize in developing data-driven solutions and optimizing data pipelines.
        </p>
        <p>
          During my time at <strong>AIThink LTD</strong> as a Software Developer Intern, I gathered, cleaned, and processed large datasets using <strong>ETL/ELT</strong> processes and tools like <strong>Google Cloud Platform (GCP)</strong>, <strong>BigQuery</strong>, and <strong>PostgreSQL</strong>. I focused on improving data retrieval performance and created efficient, scalable data pipelines.
        </p>
        <p>
          As a <strong>Mobihelp Tutor</strong> at George Brown College, I help students with challenges related to programming, data analysis, and SQL. My role involves one-on-one mentoring and leading group sessions to improve students' problem-solving skills.
        </p>
        <p>
          I'm passionate about using technologies like <strong>React.js</strong>, <strong>Python</strong>, and <strong>SQL</strong> to build impactful solutions. My expertise includes working with data visualization tools like <strong>Matplotlib</strong>, and <strong>Seaborn</strong> to drive informed decision-making.
        </p>
      </section>

      <section className="about-footer">
        <p>Let's connect and build something amazing together!</p>
        <a href="https://www.linkedin.com/in/ramtinabolfazli/" target="_blank" rel="noopener noreferrer">
          <button className="linkedin-button">Visit my LinkedIn</button>
        </a>
      </section>
    </div>
  );
};

export default About;
