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
            <p>Email: contact@immo-pepites.fr</p>
            <p>Tel: +33 1 23 45 67 89</p>
          </div>
          <div className="footer-section">
            <h4>Suivez-nous</h4>
            <div className="social-links">
              <a href="#facebook">Facebook</a>
              <a href="#twitter">Twitter</a>
              <a href="#linkedin">LinkedIn</a>
            </div>
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
