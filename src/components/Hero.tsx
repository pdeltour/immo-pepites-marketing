import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">trouver les meilleures pépites en immobilier locatif 10x plus vite!</h1>
        <p className="hero-subtitle">
          Ne perdez plus des heures à chercher. Nous centralisons pour vous les meilleures opportunités d'investissement locatif avant qu'elles ne disparaissent.
        </p>
        <a href="https://app.immo-pepites.fr?tab=register" className="cta-button">Découvrir les pépites</a>
        <p className="hero-trial">Essai gratuit · Sans carte bancaire</p>
      </div>
    </section>
  );
}

export default Hero;
