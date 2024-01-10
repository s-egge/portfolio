import {useState}  from 'react';
import './css/projects.css';

function ProjectCard({title, description, img, projectLink, githubLink}) {
  return (
    <article className="project-card">
      <img src={img} alt={title + " photo"} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={projectLink}>View Project</a>
      <a href={githubLink}>View Code</a>
    </article>
  );
}

function Projects() {
  //variable that holds set of projects, each has title, description, and link
  const projects = [
    {
      title: "Peasel", 
      description: "A browser tool for creating pixel art", 
      img: "src/assets/peasel.png", 
      projectLink: "https://peasel.onrender.com/", 
      githubLink: "https://github.com/s-egge/peasel"
    },
    {
      title: "Animal Shelter Database", 
      description: "A webpage for managing data for a fictional animal shelter with an SQL database", 
      img: "src/assets/animal-database.png", 
      projectLink: "146.235.204.101:27469", 
      githubLink: "https://github.com/s-egge/animal-shelter-database"
    },
    {
      title: "Picnic Defender", 
      description: "A group project for an intro Web Developement class, this is a game where the player must defend their picnic against enroaching bugs", 
      img: "src/assets/picnic-defender.png", 
      projectLink: "https://www.google.com", 
      githubLink: "https://www.google.com"},
    {
      title: "Portfolio", 
      description: "This web page! A desktop and mobile friendly page where I showcase my projects", 
      img: "src/assets/portfolio.png", 
      projectLink: "localhost:5173/",
      githubLink: "https://github.com/s-egge/portfolio"
    },
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