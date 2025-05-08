import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import CustomButton from './CustomBotton';

interface AttendBenefit {
  id: string;
  titleKey: string;
  titleDefault: string;
  descriptionKey: string;
  descriptionDefault: string;
  bgColorClass: string; // Tailwind class for background color
  textColorClass: string; // Tailwind class for text color
}

const benefits: AttendBenefit[] = [
  {
    id: 'students',
    titleKey: 'whyAttend.students.title', titleDefault: 'STUDENTI E GIOVANI PROFESSIONISTI',
    descriptionKey: 'whyAttend.students.description', descriptionDefault: 'Entrare nel mondo della DeFi, scoprire opportunità di carriera, e avviare il proprio percorso come web3 builder.',
    bgColorClass: '#8CF2A4', // Custom color
    textColorClass: 'text-black'
  },
  {
    id: 'stakeholders',
    titleKey: 'whyAttend.stakeholders.title', titleDefault: 'STAKEHOLDER',
    descriptionKey: 'whyAttend.stakeholders.description', descriptionDefault: 'Contribuire alla nascita di un ecosistema innovativo a Bari, supportando la crescita di una comunità tech focalizzata su blockchain e finanza decentralizzata.',
    bgColorClass: '#B6989133', // Custom color
    textColorClass: 'text-black'
  },
  {
    id: 'developers',
    titleKey: 'whyAttend.developers.title', titleDefault: 'PER SVILUPPATORI',
    descriptionKey: 'whyAttend.developers.description', descriptionDefault: 'Formazione pratica e networking con progetti attivi in DeFi.',
    bgColorClass: '#B6989133', // Custom color
    textColorClass: 'text-black' 
  },
  {
    id: 'everyone',
    titleKey: 'whyAttend.everyone.title', titleDefault: 'PER TUTTI!',
    descriptionKey: 'whyAttend.everyone.description', descriptionDefault: 'Partecipare a un evento che unisce economia, tecnologia e impatto sociale in un unico spazio.',
    bgColorClass: '#8CF2A4', // Custom color
    textColorClass: 'text-black'
  },
];

const BenefitCard: React.FC<{ benefit: AttendBenefit }> = ({ benefit }) => {
  const { t } = useTranslation();
  return (
    <div className={`p-8 rounded-3xl shadow-sm ${benefit.textColorClass} flex flex-col min-h-[200px]`}
      style={{ backgroundColor: benefit.bgColorClass }}
    >
      <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">{t(benefit.titleKey, benefit.titleDefault)}</h3>
      <p className="text-base leading-relaxed flex-grow">{t(benefit.descriptionKey, benefit.descriptionDefault)}</p>
    </div>
  );
};

const WhyAttend: React.FC = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollTimeout: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      // Aspetta un breve periodo dopo lo scroll per evitare calcoli eccessivi
      scrollTimeout = setTimeout(() => {
        if (!container) return;
        const containerCenter = container.scrollLeft + container.clientWidth / 2;
        let closestIndex = 0;
        let smallestDistance = Infinity;

        Array.from(container.children).forEach((child, index) => {
          const card = child as HTMLElement;
          if (card) { 
            const cardCenter = card.offsetLeft + card.offsetWidth / 2;
            const distance = Math.abs(containerCenter - cardCenter);

            if (distance < smallestDistance) {
              smallestDistance = distance;
              closestIndex = index;
            }
          }
        });
        // Solo aggiorna se l'indice è cambiato per evitare re-render inutili
        if (activeIndex !== closestIndex) {
            setActiveIndex(closestIndex);
        }
      }, 150); // Debounce time di 150ms
    };

    // Aggiungi listener solo su schermi piccoli dove lo scroll è attivo
    const mediaQuery = window.matchMedia('(max-width: 767px)'); // md breakpoint è 768px
    const addOrRemoveListener = () => {
        if (mediaQuery.matches && container) {
            container.addEventListener('scroll', handleScroll, { passive: true });
        } else if (container) {
            container.removeEventListener('scroll', handleScroll);
        }
    }
    addOrRemoveListener();
    mediaQuery.addEventListener('change', addOrRemoveListener);

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      mediaQuery.removeEventListener('change', addOrRemoveListener);
    };
  }, [benefits.length, activeIndex]); // Aggiunto activeIndex per evitare che lo stato interno dell'handler sia stale

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 md:mb-16 gap-8 lg:gap-4">
          <div className="text-center lg:text-left w-full lg:w-auto order-2 lg:order-1">
            <h2 className="text-black font-black text-5xl md:text-6xl tracking-wider">
              {t('whyAttend.title', 'WHY ATTEND?')}
            </h2>
          </div>
          <div className="flex-shrink-0 order-1 lg:order-2 mx-auto lg:mx-0">
            <img src="/molecules.svg" alt="Molecule Graphic" 
              className="w-20 h-auto sm:w-24 lg:w-32"
            />
          </div>
        </div>
        {/* Contenitore per le card, modificato per scroll orizzontale su mobile */}
        <div 
          ref={scrollContainerRef} // Aggiunto ref per il container di scroll
          className="flex overflow-x-auto space-x-4 py-4 md:grid md:grid-cols-2 md:space-x-0 md:overflow-x-visible md:gap-8 mb-8 md:mb-12 snap-x snap-mandatory md:snap-none scrollbar-hide"
        >
          {benefits.map((benefit) => (
            <div key={benefit.id} className="w-[85%] sm:w-3/4 md:w-auto flex-shrink-0 snap-center">
              <BenefitCard benefit={benefit} />
            </div>
          ))}
        </div>

        {/* Indicatori a pallini per mobile */}
        <div className="flex justify-center space-x-2 md:hidden mb-12">
          {benefits.map((_, index) => (
            <button
              key={`dot-${index}`}
              onClick={() => {
                const cardElement = scrollContainerRef.current?.children[index] as HTMLElement;
                if (cardElement) {
                  cardElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
                // setActiveIndex(index); // L'activeIndex si aggiornerà tramite l'handler dello scroll
              }}
              className={`w-2.5 h-2.5 rounded-full focus:outline-none transition-colors 
                ${activeIndex === index ? 'bg-red-500' : 'bg-gray-300 hover:bg-gray-400'}
              `}
              aria-label={`Go to benefit ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <CustomButton
            text={t('whyAttend.ctaBuyTicket', 'Buy your ticket')}
            onClick={() => {}}
            roundSide="both"
          />
          <CustomButton
            text={t('whyAttend.ctaApplySponsor', 'Apply as sponsor')}
            onClick={() => {}}
            backgroundClasses="bg-[linear-gradient(90deg,#00C9E3_0.02%,rgba(0,201,227,0.34)_105.15%)]"
            roundSide="both"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyAttend; 