import React from "react";
import "./About.css";
import aboutImage from "../../assets/about.jpg"; // Replace with your image

function About() {
  return (
    <section id="about" className="about section">
      
      {/* Title */}
      <h2 className="about-title">About <span>Me</span></h2>

      {/* Flex container for image and text */}
      <div className="about-content">
        
        {/* LEFT IMAGE */}
        <div className="about-left">
          <img src={aboutImage} alt="About Me" className="about-image" />
        </div>

        {/* RIGHT TEXT */}
        <div className="about-right">
          <h1>Frontend Developer</h1>
          <p>
  I am a passionate Frontend Developer specializing in React JS.  
  I create responsive and modern web applications.  
  I focus on clean design and excellent user experience.  
  I write efficient and maintainable code.  
  I enjoy learning new technologies to enhance my skills.  
  I strive to build web apps that delight users.
</p>


          <div className="about-info-boxes">
            <div className="info-row">
              <div className="info-box">
                <h3>Name:</h3>
                <p>Umair Sadaqat</p>
              </div>
              <div className="info-box">
                <h3>Email:</h3>
                <p>umairsadaqat99@gmail.com</p>
              </div>
            </div>

            <div className="info-row">
              <div className="info-box">
                <h3>Location:</h3>
                <p>Bharakahu, Islamabad, Pakistan</p>
              </div>
              <div className="info-box">
                <h3>Experience:</h3>
                <p>1 Year</p>
              </div>
            </div>
          </div>

          <a 
            href="/Umair Sadaqat-compressed.pdf" 
            download 
            className="btn download-cv"
          >
            Download CV
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;
