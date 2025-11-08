import React from 'react';
import './Footer.css';
import ContactForm from './ContactForm';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <ContactForm />
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
