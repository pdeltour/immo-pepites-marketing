import React from 'react';
import './Header.css';
import logo from '../assets/images/logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Immo Pepites" className="logo-image" />
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Accueil</a></li>
            <li><a href="#features">Services</a></li>
            <li><a href="https://store.immo-pepites.fr/pricing/">Tarifs</a></li>
            <li><a href="https://app.immo-pepites.fr" className="login-btn">Se connecter</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
