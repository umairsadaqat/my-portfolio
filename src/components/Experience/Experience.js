import React from "react";
import "./Experience.css";

// Import your images
import educationImg from "../../assets/education.png";
import workImg from "../../assets/work.png";
import certificationImg from "../../assets/certification.png";

function Experience() {
  return (
    <section id="experience" className="experience">
      <h1>
        My <span>Experience & Education</span>
      </h1>

      <div className="experience-container">
        {/* LEFT COLUMN - EDUCATION */}
        <div className="left-column">
          <div className="section-title">
            <img src={educationImg} alt="Education" className="section-icon" />
            <h2>Education</h2>
          </div>

          {/* Bachelor */}
          <div className="education-item">
            <div className="degree-row">
              <div className="degree">Bachelor of Science in Computer Science</div>
              <div className="duration">2021 - 2025</div>
            </div>
            <div className="location">Virtual University of Pakistan,Pakistan</div>
          </div>


          {/* HSSC */}
          <div className="education-item">
            <div className="degree-row">
              <div className="degree">
                Higher Secondary School Certificate (FSc Pre-Engineering)
              </div>
              <div className="duration">2018 - 2020</div></div>


            <div className="location">IMCB F-7/3 College, Islamabad, Pakistan</div>
          </div>

          {/* Matric */}
          <div className="education-item">
            <div className="degree-row"><div className="degree">Matriculation in Science</div>
              <div className="duration">2016 - 2018</div></div>

            <div className="location">IMCB Bharakahu, Islamabad, Pakistan</div>
          </div>
        </div>

        {/* RIGHT COLUMN - EXPERIENCE */}
        <div className="right-column">

          <div className="section-title">
            <img src={workImg} alt="Work" className="section-icon" />
            <h2>Work Experience</h2>
          </div>

          <div className="experience-item">
            <div className="experience-row">
              <div className="role">Website Developer (Internship)</div>
              <div className="duration work-duration">6 Oct 2025 - 6 Dec 2026</div>
            </div>

            <div className="company work-company">NIH CMU, Islamabad</div>

            <div className="description">
              Full Stack Development: Frontend with React JS & CSS, Backend with Node.js, Express, Python & MySQL.
            </div>
          </div>


          {/* Certificate Section */}
          <div className="section-title">
            <img src={certificationImg} alt="Certification" className="section-icon" />
            <h2>Certification</h2>
          </div>
          <div className="certification-item">
            <div className="certificate-row">
              <div className="course">Web Design and Development</div>
              <div className="duration cert-duration">25 Jan - 25 Jul 2022</div>
            </div>

            <div className="institute cert-institute">NAVTTC, Punjab Board of Technical Education (PBTE)</div>
            <div className="description">
              I learned HTML, CSS, JavaScript, MS Word, Excel, and PowerPoint from there.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;
