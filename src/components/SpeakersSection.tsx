import React from 'react';
import { useTranslation } from 'react-i18next';

// Assumi che i dati degli speaker provengano da un JSON
import speakersData from '../data/speakers.json'; // Rinominato per chiarezza
import type { Speaker } from '../interfaces/speakers.interface';
import SpeakerCard from './SpeakerCard';
import MoreToComeCard from './MoreToComeCard';

const SpeakersSection: React.FC = () => {
  const { t } = useTranslation();

  // Usiamo speakersData direttamente per ora, o speakersWithMore se vuoi aggiungere la card "more"
  const currentSpeakers: Speaker[] = speakersData as Speaker[];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-9xl mx-auto px-6">
        <div className="gap-4 md:gap-0 flex flex-col md:flex-row items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-black leading-tight">
            {/* Usa le chiavi di traduzione */}
            {t('speakers.title.line1', 'INCONTRA I NOSTRI')}<br />{t('speakers.title.line2', 'STRAORDINARI SPEAKER')}
          </h2>
          {/* Placeholder Logo Barca */}
          <div className="
            w-full md:w-auto 
            flex flex-row items-center 
            justify-end md:justify-center"
          >
            <img
              src="/Boat.svg"
              alt="Logo"
              className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] object-contain ml-4"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8">
          {
            currentSpeakers.map((sp, i) => (
              <SpeakerCard key={`speaker-${i}-${sp.Nome}-${sp.Cognome}`} speaker={sp} index={i} />
            ))
          }
          <MoreToComeCard />
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection; 