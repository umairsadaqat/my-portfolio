import React, { useState } from "react";
import "./Projects.css";
import viewImg from "../../assets/view.png";


import doctorcareImg from "../../assets/doctorcare.png";
import unityImg from "../../assets/unity.png";
import foodImg from "../../assets/foodrecipe.png";

import quizImg from "../../assets/quizapp.png";
import calculatorImg from "../../assets/calculator.png";
import todoImg from "../../assets/todolist.png";

function Projects() {
  const [showMore, setShowMore] = useState(false);

  // 🔹 MAIN PROJECTS (always show)
  const mainProjects = [
    {
      title: "DoctorCare Website",
      desc: "Health Care system built with React & CSS where admins manage doctors and appointments, and users can easily book and track their appointments.",
      img: doctorcareImg,
      demo: "https://doctorcareumair.netlify.app",
      code: "#",
      tools: ["React", "CSS", "Netlify"],
    },
    {
      title: "College Website",
      desc: "Frontend College Website built with React & CSS. Features Home, About, Testimonials, Contact Us, and Feedback sections with smooth navigation and responsive design.",
      img: unityImg,
      demo: "https://umair-unitynetlifycom.netlify.app",
      code: "#",
      tools: ["React", "CSS", "Netlify"],
    },
    {
      title: "Food Recipe App",
      desc: "Food Recipe App built with React & CSS. Users can search for recipes and view detailed instructions fetched dynamically using an API.",
      img: foodImg,
      demo: "https://foodrecipeumair.netlify.app",
      code: "#",
      tools: ["React", "CSS", "Netlify"],
    },
  ];

  // 🔹 EXTRA PROJECTS (hidden until View All)
  const extraProjects = [
    {
      title: "Quiz App",
      desc: "Quiz App built with React & CSS. Users can take interactive quizzes with instant feedback and score tracking.",
      img: quizImg,
      demo: "https://quizappumair.netlify.app",
      code: "#",
      tools: ["React", "CSS"],
    },
    {
      title: "To-Do List App",
      desc: "To-Do List App built with React & CSS. Users can add, edit, and manage tasks efficiently with a clean interface",
      img: todoImg,
      demo: "https://todolistumair.netlify.app",
      code: "#",
      tools: ["React", "CSS"],
    },
    {
      title: "Calculator App",
      desc: "Simple Calculator built with React & CSS. Performs basic arithmetic operations with a responsive design.",
      img: calculatorImg,
      demo: "https://calculator-umair.netlify.app",
      code: "#",
      tools: ["React", "CSS"],
    },
  ];

  return (
    <section id="projects" className="projects">
      <h1>
        My <span>Projects</span>
      </h1>
      
      {/* MAIN PROJECTS */}
      <div className="project-container">
        {mainProjects.map((p, index) => (
          <div key={index} className="project-card">
            <img src={p.img} alt={p.title} className="project-image" />

            <h2 className="project-title">{p.title}</h2>
            <p className="project-desc">{p.desc}</p>

            <div className="project-tools">
              {p.tools.map((tool, i) => (
                <span key={i}>{tool}</span>
              ))}
            </div>

            <div className="project-buttons">
             <a href={p.demo} target="_blank" className="btn-demo">
  <img src={viewImg} className="demo-icon" alt="view" />
  Live Demo
</a>

            </div>
          </div>
        ))}
      </div>

      {/* EXTRA PROJECTS (Show only when showMore = true) */}
      {showMore && (
        <div className="project-container">
          {extraProjects.map((p, index) => (
            <div key={index} className="project-card">
              <img src={p.img} alt={p.title} className="project-image" />

              <h2 className="project-title">{p.title}</h2>
              <p className="project-desc">{p.desc}</p>

              <div className="project-tools">
                {p.tools.map((tool, i) => (
                  <span key={i}>{tool}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a href={p.demo} target="_blank" className="btn-demo">
  <img src={viewImg} className="demo-icon" alt="view" />
  Live Demo
</a>
                
              </div>
            </div>
          ))}
        </div>
      )}

      {/* VIEW ALL / MINIMIZE BUTTON */}
      <button
        className="show-more-btn"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Minimize " : "View All Projects"}
      </button>
    </section>
  );
}

export default Projects;
