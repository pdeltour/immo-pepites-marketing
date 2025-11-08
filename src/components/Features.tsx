import React from 'react';
import './Features.css';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

function Features() {
  const features: Feature[] = [
    {
      id: 1,
      title: 'Gagnez du Temps',
      description: 'Économisez des heures de recherche quotidienne. Notre système de chasse immobilière travaille pour vous pendant que vous vous consacrez à ce qui compte vraiment et que l\'IA ne peut pas faire pour vous : visiter les biens et closer.',
      icon: '⏰'
    },
    {
      id: 2,
      title: 'Centralisez vos recherches',
      description: 'Accédez à des milliers d\'annonces provenant de plus de 900 sites immobiliers, tout en un seul endroit. Ne passez plus à côté des bonnes affaires dispersées sur le web.',
      icon: '🔍'
    },
    {
      id: 3,
      title: 'Estimez les travaux grâce à l\'IA',
      description: 'Évaluez la rentabilité réelle avant même la visite. Notre intelligence artificielle analyse chaque bien et estime automatiquement le coût des rénovations nécessaires.',
      icon: '🤖'
    },
    {
      id: 4,
      title: 'Personnalisez vos critères',
      description: 'Sélectionnez les biens rentables 10 fois plus vite grâce à nos critères d\'investissement avancés : Montant total du projet ( travaux et frais de notaire inclus ), rendement locatif, cash-flow, DPE, Zone géographique.',
      icon: '⚡'
    },
    {
      id: 5,
      title: 'Soyez alertés en temps réel',
      description: 'Soyez alerté instantanément des nouvelles pépites qui correspondent à vos critères. Les meilleures affaires disparaissent en 48h, soyez le premier informé. Parce que vos critères d\'investissement ne sont que les votres, utilisez notre système de personnalisation de veille des opportunités.',
      icon: '🔔'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="features-container">
        <h2 className="features-title">Pourquoi choisir Immo Pépites ?</h2>
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
