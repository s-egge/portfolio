import {useState}  from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import './css/projects.css';


function ImgVideoComponent({video, img, alt}) {
  return (
    <HoverVideoPlayer
      videoSrc={video}
      pausedOverlay={
        <img
          src={img}
          alt={alt}
          style={{
            // Make the image expand to cover the video's dimensions
            width: '100%',
            height: '100%',
            aspectRatio: '16:9',
            objectFit: 'cover',
          }}
        />
      }
      loadingOverlay={
        <div className="loading-overlay">
          <div className="loading-spinner" />
        </div>
      }
    />
  );
}


function ProjectCard({title, description, img, video, alt, projectLink, githubLink}) {
  return (
    <article className="project-card">
      <ImgVideoComponent video={video} img={img} alt={alt} />
      <div className="project-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="project-links">
          {projectLink !== '' && <a href={projectLink}>View Project</a>}
          <a href={githubLink}>View Code</a>
        </div>
      </div>
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
      video: "src/assets/peasel.mp4",
      alt: "peasel website photo/video",
      projectLink: "https://peasel.onrender.com/", 
      githubLink: "https://github.com/s-egge/peasel"
    },
    {
      title: "Animal Shelter Database", 
      description: "A webpage for managing data for a fictional animal shelter with an SQL database", 
      img: "src/assets/animal-database.png", 
      video: "src/assets/animal-database.mp4",
      alt: "animal shelter database website photo/video",
      projectLink: "", 
      githubLink: "https://github.com/s-egge/animal-shelter-database"
    },
    {
      title: "Picnic Defender", 
      description: "A group project for an intro Web Developement class, this is a game where the player must defend their picnic against enroaching bugs", 
      img: "src/assets/picnic-defender.png", 
      video: "src/assets/picnic-defender.mp4",
      alt: "picnic defender website photo/video",
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