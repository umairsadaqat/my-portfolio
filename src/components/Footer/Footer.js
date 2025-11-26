import React from "react";
import "./Footer.css";

// Import icon images from assets
import linkedinIcon from "../../assets/linkedin.png";
import instagramIcon from "../../assets/instagram.png";
import phoneIcon from "../../assets/phone1.png";

const Footer = () => {
  return (
    <footer className="footer-section">

      <div className="footer-container">

        {/* LEFT SIDE - Your Info + Social Icons */}
        <div className="footer-left">
          <h3>Umair Sadaqat</h3>
          <p>Frontend Developer — Creating Awesome Projects</p>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/umair-sadaqat" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/raja_umair_07" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="tel:+923193375484">
              <img src={phoneIcon} alt="Phone" />
            </a>
          </div>
        </div>

        {/* MIDDLE - Quick Links */}
        <div className="footer-middle">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT SIDE - Contact Info */}
        <div className="footer-right">
          <h4>Contact Info</h4>
          <p> umairsadaqat99@gmail.com</p>
          <p> +92 319 3375484</p>
          <p> Bharakahu, Islamabad, Pakistan</p>
        </div>

      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="footer-bottom">
        <hr />
        <p>@2025 Umair Sadaqat. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
