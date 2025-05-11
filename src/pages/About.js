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
          Hi! I'm <strong>Ramtin Abolfazli</strong>, a passionate <strong>Software Developer</strong> and <strong>Data Enthusiast</strong> based in Toronto. I'm a recent graduate with a <strong>Computer Science</strong> degree from <strong>George Brown College</strong>, with a strong focus on <strong>machine learning</strong>, <strong>data analytics</strong>, and <strong>full-stack development</strong>.
        </p>

        <p>
          My goal is to build impactful software that combines thoughtful design with data-driven insights. Whether it's developing scalable backend systems, creating responsive front-end applications, or uncovering trends through data visualization, I enjoy solving complex problems that make a real difference.
        </p>

        <p>
          During my internship at <strong>AIThink LTD</strong>, I worked extensively with <strong>ETL/ELT pipelines</strong> using tools like <strong>Google Cloud Platform (GCP)</strong>, <strong>BigQuery</strong>, and <strong>PostgreSQL</strong>. I focused on optimizing data retrieval and building efficient, scalable pipelines for analytics workflows.
        </p>

        <p>
          I also worked as a <strong>Mobihelp Tutor</strong> at George Brown College, mentoring students in <strong>Python</strong>, <strong>SQL</strong>, <strong>data analysis</strong>, and <strong>problem-solving techniques</strong>. Helping others succeed has strengthened my own technical understanding and communication skills.
        </p>

        <p>
          Outside of work, I enjoy playing competitive basketball, reading books, and exploring Toronto’s diverse neighborhoods. I believe in continuous learning, ethical innovation, and collaborating with passionate people to build meaningful technology.
        </p>

        <p>
          I’m currently looking for opportunities where I can contribute as a software developer or data analyst and continue growing alongside a great team.
        </p>
      </section>

      <section className="about-footer">
        <p>Let’s connect and build something impactful together!</p>
        <a href="https://www.linkedin.com/in/ramtinabolfazli/" target="_blank" rel="noopener noreferrer">
          <button className="linkedin-button">Visit my LinkedIn</button>
        </a>
      </section>
    </div>
  );
};

export default About;
