import React from 'react';
import GlobalStyles from './styles/globalStyles';
import Navbar from './components/layout/Navbar';
import Hero from './components/layout/Hero';
import AgroClimatology from './components/layout/AgroClimatology';
import ClimaticTools from './components/layout/ClimaticTools';
import SeedingDesign from './components/layout/SeedingDesign';
import Projects from './components/layout/Projects';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <SeedingDesign />
      <AgroClimatology />
      <ClimaticTools />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
