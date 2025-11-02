import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CTAButton from './components/CTAButton';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <CTAButton text="Commencer gratuitement" variant="primary" />
      <Stats />
      <CTAButton text="Rejoignez-nous maintenant" variant="secondary" />
      <Footer />
    </div>
  );
}

export default App;
