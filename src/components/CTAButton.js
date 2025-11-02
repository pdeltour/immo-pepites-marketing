import React from 'react';
import './CTAButton.css';

function CTAButton({ text = "Commencer gratuitement", variant = "primary" }) {
  return (
    <div className={`cta-section cta-${variant}`}>
      <a
        href="https://app.immo-pepites.fr?tab=register"
        className="cta-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    </div>
  );
}

export default CTAButton;
