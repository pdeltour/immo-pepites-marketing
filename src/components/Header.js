import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Immo Pepites</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Accueil</a></li>
            <li><a href="#features">Services</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
