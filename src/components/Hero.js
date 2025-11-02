import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">Bienvenue chez Immo Pepites</h1>
        <p className="hero-subtitle">
          Découvrez les meilleures opportunités immobilières
        </p>
        <button className="cta-button">Commencer</button>
      </div>
    </section>
  );
}

export default Hero;
