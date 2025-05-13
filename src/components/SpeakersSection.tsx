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
    <section className="w-full bg-white py-10">
      <div className="max-w-9xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 md:mb-16 gap-8 lg:gap-4">
          <div className="text-center lg:text-left w-full lg:w-auto order-2 lg:order-1">
            <h2 className="text-black font-black text-4xl text-center md:text-6xl lg:text-left tracking-wider font-koho font-medium text-left lef:text-center">
              {t('speakers.title.line1', 'INCONTRA I NOSTRI')}<br />{t('speakers.title.line2', 'STRAORDINARI SPEAKER')}
            </h2>
          </div>
          <div className="flex-shrink-0 order-1 lg:order-1 mx-auto lg:mx-0">
            <img  src="/Boat.svg" alt="Molecule Graphic"
              className="w-[150px] h-auto sm:w-40 lg:w-48"
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