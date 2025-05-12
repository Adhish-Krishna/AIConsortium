import React, { useState } from "react";
import "./Navbar.css";
import TempComponent from "../temp";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("main-content");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const goToCommittee = () => {
    if (window.appState) {
      window.appState.setShowTemp(true);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-links">
          <li 
            className={activeSection === "main-content" ? "active" : ""} 
            onClick={() => scrollToSection("main-content")}
          >
            Home
          </li>
          <li 
            className={activeSection === "about" ? "active" : ""} 
            onClick={() => scrollToSection("about")}
          >
            About
          </li>
          <li 
            className={activeSection === "committee" ? "active" : ""} 
            onClick={goToCommittee}
          >
            Committee
          </li>
          <li 
            className={activeSection === "theme" ? "active" : ""} 
            onClick={() => scrollToSection("committee")}
          >
            Speakers
          </li>
          <li 
            className={activeSection === "theme" ? "active" : ""} 
            onClick={() => scrollToSection("theme")}
          >
            Theme
          </li>
          <li 
            className={activeSection === "cfp" ? "active" : ""} 
            onClick={() => scrollToSection("cfp")}
          >
            Call for Papers
          </li>
          <li 
            className={activeSection === "Dates" ? "active" : ""} 
            onClick={() => scrollToSection("Dates")}
          >
            Important Dates
          </li>
          
          <li 
            className={activeSection === "registration" ? "active" : ""} 
            onClick={() => scrollToSection("registration")}
          >
            Registration
          </li>
          <li 
            className={activeSection === "events" ? "active" : ""} 
            onClick={() => scrollToSection("events")}
          >
            Events
          </li>
          <li 
            className={activeSection === "venue-contact" ? "active" : ""} 
            onClick={() => scrollToSection("venue-contact")}
          >
            Venue & Contact
          </li>
          <li 
            className={activeSection === "sponsors" ? "active" : ""} 
            onClick={() => scrollToSection("sponsors")}
          >
            Sponsors
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
