import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import MissionSection from './components/MissionSection/MissionSection';
import ResearchSection from './components/ResearchSection/ResearchSection';
import ProblemSection from './components/ProblemSection/ProblemSection';
import StatisticSection from './components/StatisticSection/StatisticSection'; 
import ActualSection from './components/ActualSection/ActualSection';
import ConclusionSection from './components/ConclusionSection/ConclusionSection';
import FaqSection from './components/FaqSection/FaqSection';
import FormSection from './components/FormSection/FormSection';
import FooterSection from './components/FooterSection/FooterSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection id="hero" />
      <MissionSection id="mission" /> 
      <ResearchSection id="research" />
      <ProblemSection id="problems" />
      <StatisticSection id="statistics" /> 
      <ActualSection id="actual" />
      <ConclusionSection />
      <FaqSection />
      <FormSection id="form" /> 
      <FooterSection />
    </div>
  );
}

export default App;