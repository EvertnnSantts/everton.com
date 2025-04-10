import React, { useState } from "react";
import "../components/Menu.css";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="header-nav">
        <div className="nav-logo">
        <h1>everton.com</h1>
        </div>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">☰</button>
        <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <a href="#Ideal" className="menu-item">Projetos</a>
          <a href="#templates" className="menu-item">Sobre me</a>
          <a href="#our-team" className="menu-item">Contato</a>
        </div>
        <div className="nav-button">
          <a href="https://cal.com/evertnnsantts/evortonsantts"><button id="Button-link">Book a call</button></a>
        </div>
      </nav>
    </header>
  );
}

export default Menu;