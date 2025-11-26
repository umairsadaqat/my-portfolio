import React, { useState } from "react";
import "./Navbar.css";
import menuIcon from "../../assets/menu-icon.png";
import cancelIcon from "../../assets/cancel.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="left">Umair Sadaqat</div>

        {/* Desktop Links */}
        <div className="right desktop-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Menu Icon only on mobile */}
        <img
          src={menuOpen ? cancelIcon : menuIcon}
          alt="Menu Icon"
          className="menu-icon"
          onClick={toggleMenu}
        />
      </nav>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#skills" onClick={toggleMenu}>Skills</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
          <a href="#experience" onClick={toggleMenu}>Experience</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </>
  );
};

export default Navbar;
