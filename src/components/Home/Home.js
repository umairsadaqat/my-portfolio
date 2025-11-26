import React, { useState, useEffect } from "react";
import "./Home.css";
import profileImage from "../../assets/image.jpg";

function Home() {
  const texts = [
    "Frontend Developer",
    "React JS Developer",
    "Building Real-Time Applications"
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }, 150);
    }

    if (!isDeleting && displayText === currentText) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, texts, textIndex]);

  return (
    <section id="home" className="home section">
      <div className="left-content">
        <h1 className="name-line">
          Hi, I'm <span className="highlight">Umair</span>
        </h1>

        <h3 className="changing-text">{displayText}<span className="cursor">|</span></h3>

        <p className="description">
          I build exceptional digital experiences for the modern web.
        </p>

        <div className="buttons">
          <a href="#contact" className="contact-btn">
            Contact Me
          </a>
          <a href="#projects" className="project-btn">
            View Projects
          </a>
        </div>
      </div>

      <div className="right-content">
        <img src={profileImage} alt="Umair Sadaqat" className="profile-image" />
      </div>
    </section>
  );
}

export default Home;
