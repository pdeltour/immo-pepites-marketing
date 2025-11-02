import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CTAButton from './components/CTAButton';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <CTAButton text="Commencer gratuitement" variant="primary" showTrial={true} />
      <Stats />
      <Pricing />
      <CTAButton text="Rejoignez-nous maintenant" variant="secondary" showTrial={true} />
      <Footer />
    </div>
  );
}

export default App;
