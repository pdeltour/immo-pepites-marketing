import React from 'react';
import './CTAButton.css';

function CTAButton({ text = "Commencer gratuitement", variant = "primary", showTrial = false }) {
  return (
    <div className={`cta-section cta-${variant}`}>
      <div className="cta-content">
        <a
          href="https://app.immo-pepites.fr?tab=register"
          className="cta-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
        {showTrial && (
          <p className="cta-trial">Essai gratuit de 2 semaines · Sans carte bancaire</p>
        )}
      </div>
    </div>
  );
}

export default CTAButton;
