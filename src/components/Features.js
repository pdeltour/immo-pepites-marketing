import React from 'react';
import './Features.css';

function Features() {
  const features = [
    {
      id: 1,
      title: 'Recherche Centralisée',
      description: 'Accédez à des milliers d\'annonces provenant de plus de 1500 sites immobiliers, tout en un seul endroit. Ne passez plus à côté des bonnes affaires dispersées sur le web.',
      icon: '🔍'
    },
    {
      id: 2,
      title: 'Filtres Intelligents',
      description: 'Sélectionnez les biens rentables 7 fois plus vite grâce à nos critères d\'investissement avancés : rendement locatif, cash-flow, prix au m², écart au marché local.',
      icon: '⚡'
    },
    {
      id: 3,
      title: 'Alertes en Temps Réel',
      description: 'Soyez alerté instantanément des nouvelles pépites qui correspondent à vos critères. Les meilleures affaires disparaissent en 48h, soyez le premier informé.',
      icon: '🔔'
    },
    {
      id: 4,
      title: 'Analyse de Marché',
      description: 'Identifiez les meilleures villes où investir grâce à nos analyses de plus de 10 critères : démographie, tension locative, taux d\'étudiants, rendements moyens.',
      icon: '📊'
    },
    {
      id: 5,
      title: 'Gagnez du Temps',
      description: 'Économisez des heures de recherche quotidienne. Notre système de chasse immobilière travaille pour vous pendant que vous vous consacrez à ce qui compte vraiment.',
      icon: '⏰'
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
        <p className="features-intro">
          Rejoignez des milliers d'investisseurs qui trouvent leurs pépites immobilières plus rapidement
        </p>
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
