import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/images/logo.svg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Immo Pepites" className="logo-image" />
        </div>
        <button className="burger-menu" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={isMenuOpen ? 'burger-line open' : 'burger-line'}></span>
          <span className={isMenuOpen ? 'burger-line open' : 'burger-line'}></span>
          <span className={isMenuOpen ? 'burger-line open' : 'burger-line'}></span>
        </button>
        <nav className={isMenuOpen ? 'nav nav-open' : 'nav'}>
          <ul>
            <li><a href="#home" onClick={toggleMenu}>Accueil</a></li>
            <li><a href="#features" onClick={toggleMenu}>Services</a></li>
            <li><a href="https://store.immo-pepites.fr/pricing/" onClick={toggleMenu}>Tarifs</a></li>
            <li><a href="https://app.immo-pepites.fr" className="login-btn" onClick={toggleMenu}>Connexion</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
