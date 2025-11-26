import React from "react";
import "./Skills.css";

// Import Icons
import htmlImg from "../../assets/html.png";
import cssImg from "../../assets/css3.png";
import jsImg from "../../assets/js.png";
import reactImg from "../../assets/react.png";
import nodeImg from "../../assets/node.png";
import tailwindImg from "../../assets/tailwind.png";
import gitImg from "../../assets/git.png";
import mongoImg from "../../assets/mongo.png";
import pythonImg from "../../assets/python.png";

function Skills() {
  const skills = [
    { name: "HTML5", level: 80, img: htmlImg },
    { name: "CSS3", level: 80, img: cssImg },
    { name: "JavaScript", level: 70, img: jsImg },
    { name: "React JS", level: 70, img: reactImg },
    { name: "Node JS", level: 60, img: nodeImg },
    { name: "Tailwind CSS", level: 50, img: tailwindImg },
    { name: "Git", level: 50, img: gitImg },
    { name: "MongoDB", level: 30, img: mongoImg },
    { name: "Python Flask", level: 60, img: pythonImg }
  ];

  return (
    <section id="skills" className="skills section">
      <h1>My <span>Skills</span></h1>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">

            {/* Skill Icon */}
            <img src={skill.img} alt={skill.name} className="skill-icon" />

            <div className="skill-name">{skill.name}</div>

            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

            <div className="skill-level">{skill.level}%</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
