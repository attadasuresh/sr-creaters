import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio showcasing my skills, projects, and contact details.",
      link: "https://example.com/portfolio",
      image: "https://via.placeholder.com/300x200?text=Portfolio+Website",
    },
    {
      title: "E-commerce Store",
      description: "An online store with dynamic product pages and a secure checkout system.",
      link: "https://example.com/ecommerce",
      image: "https://via.placeholder.com/300x200?text=E-commerce+Store",
    },
    {
      title: "Social Media App",
      description: "A social media platform to connect and share updates with friends.",
      link: "https://example.com/socialmedia",
      image: "https://via.placeholder.com/300x200?text=Social+Media+App",
    },
    {
      title: "Blog Website",
      description: "A fully responsive blog platform with user authentication.",
      link: "https://example.com/blog",
      image: "https://via.placeholder.com/300x200?text=Blog+Website",
    },
  ];

  return (
    <div className="projects-page">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
