import {useState}  from 'react';
import './css/projects.css';

function ProjectCard({title, description, img, projectLink, githubLink}) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <img src={img} alt={title + " photo"} />
      <p>{description}</p>
      <a href={projectLink}>View Project</a>
      <a href={githubLink}>View Code</a>
    </article>
  );
}

function Projects() {
  //variable that holds set of projects, each has title, description, and link
  const projects = [
    {title: "Project 1", description: "This is a description of project 1", img: "src/assets/peasel.png", projectLink: "https://www.google.com", githubLink: "https://www.google.com"},
    {title: "Project 2", description: "This is a description of project 2", img: "src/assets/peasel.png", projectLink: "https://www.google.com", projectLink: "https://www.google.com", githubLink: "https://www.google.com"},
    {title: "Project 3", description: "This is a description of project 3", img: "src/assets/peasel.png", projectLink: "https://www.google.com", projectLink: "https://www.google.com", githubLink: "https://www.google.com"},
    {title: "Project 4", description: "This is a description of project 4", img: "src/assets/peasel.png", projectLink: "https://www.google.com", projectLink: "https://www.google.com", githubLink: "https://www.google.com"},
  ]

    return (
      <div className="projects-container">
        <h3>Projects</h3>
        <div className="projects-wrapper">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    );
  }

export default Projects;