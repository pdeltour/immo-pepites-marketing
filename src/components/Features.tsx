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
      description: 'Économisez des heures de recherche quotidienne. Notre système de chasse immobilière travaille pour vous pendant que vous vous consacrez à ce qui compte vraiment.',
      icon: '⏰'
    },
    {
      id: 2,
      title: 'Recherche Centralisée',
      description: 'Accédez à des milliers d\'annonces provenant de plus de 500 sites immobiliers, tout en un seul endroit. Ne passez plus à côté des bonnes affaires dispersées sur le web.',
      icon: '🔍'
    },
    {
      id: 3,
      title: 'Filtres Intelligents',
      description: 'Sélectionnez les biens rentables 10 fois plus vite grâce à nos critères d\'investissement avancés : rendement locatif, cash-flow, prix au m², écart au marché local.',
      icon: '⚡'
    },
    {
      id: 4,
      title: 'Estimation IA des Travaux',
      description: 'Notre intelligence artificielle analyse chaque bien et estime automatiquement le coût des rénovations nécessaires. Évaluez la rentabilité réelle avant même la visite.',
      icon: '🤖'
    },
    {
      id: 5,
      title: 'Alertes en Temps Réel',
      description: 'Soyez alerté instantanément des nouvelles pépites qui correspondent à vos critères. Les meilleures affaires disparaissent en 48h, soyez le premier informé.',
      icon: '🔔'
    },
    {
      id: 6,
      title: 'Accessible Partout',
      description: 'Consultez les opportunités immobilières où que vous soyez, depuis votre mobile ou votre ordinateur. Votre recherche vous suit partout.',
      icon: '📱'
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
