import { useEffect } from "react";
import { animate, inView } from "motion";
import "./css/skills.css";

function Skills() {
  const skills = [
    { name: "HTML", url: "html5/html5-original.svg" },
    { name: "CSS", url: "css3/css3-original.svg" },
    { name: "React", url: "react/react-original.svg" },
    { name: "Vue", url: "vuejs/vuejs-original.svg" },
    { name: "Node.js", url: "nodejs/nodejs-original.svg" },
    { name: "Express", url: "express/express-original.svg" },
    { name: "Flask", url: "flask/flask-original.svg" },
    { name: "SQL", url: "azuresqldatabase/azuresqldatabase-original.svg" },
    { name: "MySQL", url: "mysql/mysql-original.svg" },
    { name: "SQLite", url: "sqlite/sqlite-original.svg" },
    { name: "C", url: "c/c-original.svg" },
    { name: "C++", url: "cplusplus/cplusplus-original.svg" },
    { name: "Python", url: "python/python-original.svg" },
    { name: "Javascript", url: "javascript/javascript-original.svg" },
    { name: "Typescript", url: "typescript/typescript-original.svg" },
    { name: "Java", url: "java/java-original.svg" },
    { name: "Kotlin", url: "kotlin/kotlin-original.svg" },
    { name: "GLSL/OpenGL", url: "opengl/opengl-original.svg" },
    { name: "GCP", url: "googlecloud/googlecloud-original.svg" },
    {
      name: "AWS",
      url: "amazonwebservices/amazonwebservices-plain-wordmark.svg",
    },
    { name: "Git", url: "git/git-original.svg" },
    { name: "GitHub", url: "github/github-original.svg" },
    { name: "Postman", url: "postman/postman-original.svg" },
    { name: "Docker", url: "docker/docker-original.svg" },
    { name: "Terraform", url: "terraform/terraform-original.svg" },
    { name: "Ansible", url: "ansible/ansible-original.svg" },
  ];

  const iconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

  // fade in and scale up the skill icons when the section comes into view
  useEffect(() => {
    const items = document.querySelectorAll(".skill-icon-box");

    inView(
      ".skills-grid",
      () => {
        items.forEach((el, i) => {
          animate(
            el,
            { opacity: 1, transform: "scale(1)" },
            { delay: i * 0.05, duration: 0.8, easing: "ease-out" },
          );
        });
      },
      { amount: 0.2 },
    );
  }, []);

  return (
    <div id="skills" className="skills-container">
      <h3>Skills</h3>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-icon-box" title={skill.name}>
            <div className="skill-icon">
              <img src={`${iconBase}${skill.url}`} alt={skills[index]} />
            </div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
