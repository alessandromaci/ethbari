import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import CountdownSection from './components/CountdownSection';
import SpeakersSection from './components/SpeakersSection';
import AgendaSection from './components/AgendaSection';
import ZeroToHero from './components/ZeroToHero';
import WhyAttend from './components/WhyAttend';
import CommunitySupport from './components/CommunitySupport';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <div id="home">
        <Hero />
        </div>
        <CountdownSection />
        <div id="speaker">
        <SpeakersSection />
        </div>
        <div id="agenda">
        <AgendaSection />
        </div>
        <ZeroToHero />
        <div id="about">
        <WhyAttend />
        </div>
        <CommunitySupport />
      </main>
      <div id="contacts">
      <Footer />
      </div>
    </div>
  );
}

export default App; 