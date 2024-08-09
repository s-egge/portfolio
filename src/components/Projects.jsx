import {useState, useEffect}  from 'react';
import { projectData } from '../assets/projectData';
import HoverVideoPlayer from 'react-hover-video-player'; 
import './css/projects.css';


function ImgVideoComponent({video, img, alt}) {
  const [videoSrc, setVideoSrc] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);

  // load the image and video sources when the component mounts
  useEffect(() => {
    img.then((img) => setImgSrc(img));
    video.then((video) => setVideoSrc(video));
  }, [img, video]);

  if (!imgSrc || !videoSrc) {
    return <div>Loading...</div>
  }

  return (
    <HoverVideoPlayer
      videoSrc={videoSrc}
      pausedOverlay={
        <img
          src={imgSrc}
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
          {projectData.map((project, index) => {

            // import the image and video files
            const img = import(`../assets/projects/${project.mediaName}.png`);
            const video = import(`../assets/projects/${project.mediaName}.mp4`);

            return (
              <ProjectCard 
                key={index} 
                {...project} 
                // pass the promise of the image and video to the component
                img={img.then((img) => img.default)} 
                video={video.then((video) => video.default)} 
                style={{ height: `${maxHeight}px` }} 
              />
            )
          })}
        </div>
      </div>
    );
  }

export default Projects;