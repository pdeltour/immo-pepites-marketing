import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Immo Pepites</h3>
            <p>Votre partenaire immobilier de confiance</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: support@immo-pepites.fr</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Immo Pepites. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
