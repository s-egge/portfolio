import {useState, useEffect}  from 'react';
import peaselImg from '../assets/projects/peasel.png';
import peaselVideo from '../assets/projects/peasel.mp4';
import animalDatabaseImg from '../assets/projects/animal-database.png';
import animalDatabaseVideo from '../assets/projects/animal-database.mp4';
import picnicDefenderImg from '../assets/projects/picnic-defender.png';
import picnicDefenderVideo from '../assets/projects/picnic-defender.mp4';
import portfolioImg from '../assets/projects/portfolio.png';
import portfolioVideo from '../assets/projects/portfolio.mp4';
import campfireImg from '../assets/projects/campfire-scene.png';
import campfireVideo from '../assets/projects/campfire-scene.mp4';
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


function ProjectCard({title, description, img, video, alt, tech, projectLink, githubLink}) {
  return (
    <article className="project-card">
      <ImgVideoComponent video={video} img={img} alt={alt} />
      <div className="project-info">
        <div className="title-description-wrapper">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="tech-wrapper">
          {tech.map((tech, index) => (
            <p key={index}>{tech}</p>
          ))}
        </div>
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
      img: peaselImg,
      video: peaselVideo,
      alt: "peasel website photo/video",
      tech: ["html", "css", "javascript", "express"],
      projectLink: "https://peasel.onrender.com/", 
      githubLink: "https://github.com/s-egge/peasel"
    },
    {
      title: "Animal Shelter Database", 
      description: "A webpage for managing data for a fictional animal shelter with an SQL database", 
      img: animalDatabaseImg, 
      video: animalDatabaseVideo,
      alt: "animal shelter database website photo/video",
      tech: ["html", "css", "javascript", "express", "sql", "mysql", "sqlite"],
      projectLink: "", 
      githubLink: "https://github.com/s-egge/animal-shelter-database"
    },
    {
      title: "Campfire Scene",
      description: "A 3D scene of a campfire made with GLSL/OpenGL",
      img: campfireImg,
      video: campfireVideo,
      alt: "campfire scene photo/video",
      tech: ["c++", "glsl", "opengl"],
      projectLink: "",
      githubLink: "https://github.com/s-egge/campfire-scene"
    },
    {
      title: "Portfolio", 
      description: "This web page! A desktop and mobile friendly page where I showcase my projects", 
      img: portfolioImg, 
      video: portfolioVideo,
      alt: "portfolio website photo/video",
      tech: ["html", "css", "javascript", "react"],
      projectLink: "https://samanthaegge.com/",
      githubLink: "https://github.com/s-egge/portfolio"
    },
    {
      title: "Picnic Defender", 
      description: "A group project for an intro Web Developement class, this is a game where the player must defend their picnic against enroaching bugs", 
      img: picnicDefenderImg, 
      video: picnicDefenderVideo,
      alt: "picnic defender website photo/video",
      tech: ["html", "css", "javascript", "express"],
      projectLink: "https://www.google.com", 
      githubLink: "https://www.google.com"
    },
  ]

  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    //get height of largest card after they render
    const projectCards = document.querySelectorAll('.project-card');
    let maxCardHeight = 0;

    projectCards.forEach((card) => {
      const cardHeight = card.offsetHeight;
      if (cardHeight > maxCardHeight) {
        maxCardHeight = cardHeight;
      }
    });

    setMaxHeight(maxCardHeight);
  }, []);

    return (
      <div id="projects" className="projects-container">
        <h3>Projects</h3>
        <div className="projects-wrapper">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} style={{ height: `${maxHeight}px` }} />
          ))}
        </div>
      </div>
    );
  }

export default Projects;