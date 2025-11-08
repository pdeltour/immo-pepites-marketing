import React from 'react';
import './Pricing.css';

function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing-container">
        <h2 className="pricing-title">Nos Tarifs</h2>
        <p className="pricing-subtitle">
          Essayez Immo Pépites gratuitement, sans carte bancaire
        </p>
        <div className="pricing-cta">
          <a
            href="https://store.immo-pepites.fr/pricing"
            className="pricing-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir tous les tarifs
          </a>
          <p className="pricing-note">Accédez à tous nos plans tarifaires et choisissez celui qui vous convient</p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
