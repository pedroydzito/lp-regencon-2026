import React from 'react';
import Hero from './components/Hero';
import InstitutionalBar from './components/InstitutionalBar';
import Context from './components/Context';
import Urgency from './components/Urgency';
import Benefits from './components/Benefits';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Founders from './components/Founders';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import useCardSpotlight from './hooks/useCardSpotlight';
import useSmoothScroll from './hooks/useSmoothScroll';

function App() {
  useCardSpotlight();
  useSmoothScroll();
  return (
    <>
      <Hero />
      <InstitutionalBar />
      <Context />
      <Urgency />
      <Benefits />
      <Speakers />
      <Schedule />
      <Pricing />
      <FinalCTA />
      <Founders />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
