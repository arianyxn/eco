import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">Современные экологические проблемы.</h1>
        <div className="info-box">
          100+ стран испытывают экологические трудности.
        </div>
      </div>
    </section>
  );
};

export default HeroSection;