import React from 'react';
import './Features.css';

function Features() {
  const features = [
    {
      id: 1,
      title: 'Recherche Facile',
      description: 'Trouvez votre bien immobilier idéal en quelques clics',
      icon: '🔍'
    },
    {
      id: 2,
      title: 'Prix Compétitifs',
      description: 'Les meilleures offres du marché immobilier',
      icon: '💰'
    },
    {
      id: 3,
      title: 'Accompagnement',
      description: 'Une équipe dédiée pour vous accompagner',
      icon: '🤝'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="features-container">
        <h2 className="features-title">Nos Services</h2>
        <div className="features-grid">
          {features.map(feature => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
