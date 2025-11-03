import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div className="banner">
      <p>
        Site en construction. Votre avis nous intéresse !{' '}
        <a
          href="https://chat.whatsapp.com/GjRrIxoA3ue4UEQU7arwAk?mode=wwt"
          target="_blank"
          rel="noopener noreferrer"
          className="banner-link"
        >
          Rejoignez notre groupe WhatsApp
        </a>
      </p>
    </div>
  );
}

export default Banner;
