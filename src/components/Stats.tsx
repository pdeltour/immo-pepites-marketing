import React from 'react';
import './Stats.css';

interface Stat {
  id: number;
  number: string;
  label: string;
  icon: string;
}

function Stats() {
  const stats: Stat[] = [
    {
      id: 1,
      number: '10K+',
      label: 'Pépites immobilières dénichés chaque semaine',
      icon: '🏠'
    },
    {
      id: 2,
      number: '900+',
      label: 'Sites immobiliers',
      icon: '🌐'
    },
    {
      id: 3,
      number: '10x',
      label: 'Plus rapide',
      icon: '⚡'
    }
  ];

  return (
    <section className="stats">
      <div className="stats-container">
        <h2 className="stats-title">Immo Pépites en chiffres</h2>
        <div className="stats-grid">
          {stats.map(stat => (
            <div key={stat.id} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
