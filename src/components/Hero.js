import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">Trouvez votre pépite immobilière en moins de 48h</h1>
        <p className="hero-subtitle">
          Ne perdez plus des heures à chercher. Nous centralisons pour vous les meilleures opportunités d'investissement locatif avant qu'elles ne disparaissent.
        </p>
        <a href="https://app.immo-pepites.fr?tab=register" className="cta-button">Découvrir les pépites</a>
      </div>
    </section>
  );
}

export default Hero;
