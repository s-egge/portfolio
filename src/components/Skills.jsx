import './css/skills.css';


function SkillCard({type, list}) {
  return (
    <div className="skill-card">
      <h2>{type}</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {typeof item === 'object' ? (
              <>
                <strong>{item.service}</strong>
                <ul>
                  {item.subList.map((subItem, subIndex) => (
                    <li key={subIndex}>{subItem}</li>
                  ))}
                </ul>
              </>
            ) : (
              item
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Skills() {
  const skills = [
    { type: "Front End", list: ["HTML", "CSS", "React", "Vue/Vuex"] },
    {
      type: "Back End",
      list: ["Node.js", "Express", "Flask", "SQL", "MySQL", "SQLite"],
    },
    {
      type: "Languages",
      list: [
        "C",
        "C++",
        "Python",
        "Javascript",
        "Typescript",
        "Java",
        "Kotlin",
        "GLSL/OpenGL",
      ],
    },
    {
      type: "Cloud Services",
      list: [
        {
          service: "Google Cloud Platform",
          subList: ["Datastore", "App Engine", "Compute Engine"],
        },
        {
          service: "Amazon Web Services",
          subList: ["EC2", "ECS", "CloudWatch", "RDS", "S3", "IAM"],
        },
      ],
    },
    {
      type: "Other",
      list: ["Git", "GitHub", "Postman", "Docker", "Terraform", "Ansible"],
    },
  ];

    return (
      <div id="skills" className="skills-container">
        <h3>Skills</h3>
        <div className="skills-wrapper">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    );
  }

export default Skills;