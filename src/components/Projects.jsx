import { useState, useEffect } from "react";
import { projectData } from "../assets/projectData";
import HoverVideoPlayer from "react-hover-video-player";
import { animate, inView } from "motion";
import "./css/projects.css";

function ImgVideoComponent({ video, img, alt }) {
  const [videoSrc, setVideoSrc] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);

  // load the image and video sources when the component mounts
  useEffect(() => {
    img.then((img) => setImgSrc(img));
    video.then((video) => setVideoSrc(video));
  }, [img, video]);

  if (!imgSrc || !videoSrc) {
    return <div>Loading...</div>;
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
            width: "100%",
            height: "100%",
            aspectRatio: "16:9",
            objectFit: "cover",
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

function Projects() {
  // slide in from the sides when the section comes into view
  useEffect(() => {
    const sections = document.querySelectorAll(".project-section");

    sections.forEach((section) => {
      inView(section, () => {
        animate(
          section,
          { opacity: 1, transform: "translateX(0)" },
          { duration: 0.8, easing: "ease-out" },
        );
      });
    });
  }, []);

  return (
    <div id="projects" className="projects-container">
      <h3>Projects</h3>
      {projectData.map((project, index) => {
        const img = import(`../assets/projects/${project.mediaName}.png`);
        const video = import(`../assets/projects/${project.mediaName}.mp4`);
        const isLast = index === projectData.length - 1;
        const isEven = index % 2 === 0;

        return (
          <section
            key={index}
            className={`project-section ${isEven ? "even" : "odd"}`}
          >
            <div className={`project-row ${isLast ? "no-bottom-border" : ""}`}>
              <div className="project-media">
                <ImgVideoComponent
                  video={video.then((v) => v.default)}
                  img={img.then((i) => i.default)}
                  alt={project.alt}
                />
              </div>
              <div className="project-details">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="project-tools">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tool-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.projectLink && (
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Live Project"
                    >
                      <i className="fa fa-external-link" aria-hidden="true"></i>
                    </a>
                  )}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Code on GitHub"
                  >
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Projects;
