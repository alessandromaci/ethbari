import React from 'react';
import { useTranslation } from 'react-i18next';
import CustomButton from './CustomBotton';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full bg-white flex flex-col justify-center overflow-hidden">
      {/* Contenuto Principale della Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12 md:py-16 lg:py-20">
          {/* Colonna Sinistra: Testo */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <div className="mb-3 md:mb-4">
              <span className="block text-black text-xs font-semibold tracking-widest uppercase">
                {t('hero.eventDate', 'SEPTEMBER 25-26, 2025')}
              </span>
            </div>
            <h1 className="text-black font-black text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
              {t('hero.title.line1', 'COSTRUISCI IL')}<br />
              {t('hero.title.line2', 'FUTURO')}<br />
              {t('hero.title.line3', 'DELLA FINANZA')}
            </h1>
            <p className="text-black text-base md:text-lg max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
              {t('hero.subtitleFull', 'ETH Bari è l’evento che porta l’innovazione della finanza decentralizzata (DeFi) nel Sud Italia. Unisciti a studenti, giovani professionisti e appassionati di innovazione tecnologica per esplorare, costruire e dare forma al futuro della finanza — e far nascere nuove idee all’incrocio tra tecnologia, economia e blockchain.')}
            </p>
            <div className="flex justify-center lg:justify-start">
              <CustomButton 
                icon="/arrow.svg"
                iconPosition="right"
                iconWidth={12}
                iconHeight={12}
                text={window.innerWidth < 768 ? t('hero.ctaGetTicketsShort', 'Biglietto') : t('hero.ctaGetTickets', 'Prendi il tuo Biglietto')}
                onClick={() => window.open('https://mego.tickets/#/', '_blank')}
                backgroundClasses="bg-[linear-gradient(to_right,#FF0012_0%,rgba(255,0,18,0.49)_100%)]"
              />
            </div>
          </div>

          {/* Colonna Destra: Immagine */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-auto md:min-h-[450px] lg:min-h-[500px] flex items-center justify-center md:justify-end mt-8 md:mt-0">
            {/* Sfondo Gradiente Rosa */}
            <div className="absolute inset-x-0 bottom-0 h-3/4 md:h-full w-full md:w-4/5 lg:w-3/4 xl:w-2/3 bg-gradient-to-t from-[#fbe6e9]/70 via-[#fbe6e9]/40 to-transparent rounded-t-[150px] md:rounded-t-[200px] z-0 opacity-70 md:opacity-100 md:right-0 md:left-auto blur-2xl"></div>
            
            {/* Testo Location sovrapposto */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 z-20">
              <span className="text-black font-bold text-xs sm:text-sm md:text-base tracking-wider uppercase">
                {t('hero.location', 'SPAZIO MURAT - BARI')}
              </span>
            </div>
            
            {/* Immagine/Grafica Bari Placeholder */}
            <div className="relative z-10 w-full max-w-lg md:max-w-none h-full flex items-center justify-center">
              <img
                src="/EthHeroImage.png"
                alt={t('hero.imagePlaceholder', 'ETHBARI Visual Placeholder')}
                className="object-contain w-[90%] sm:w-full max-h-[280px] sm:max-h-[380px] md:max-h-[450px] lg:max-h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sezione Supporters integrata sotto */}
      <div className="w-full flex flex-col items-center pt-10 pb-12 md:pt-16 md:pb-20 bg-white z-10 relative">
        <span className="text-black tracking-[0.2em] text-xs font-semibold mb-6 uppercase">
          {t('supportersWoop.sponsoredBy', 'SUPPORTED BY')}
        </span>
        
        {/* Immagine Ellipse per l'effetto glow, posizionata rispetto al contenitore esterno */}
        <img
          src="/Ellipse.png"
          alt=""
          className="absolute left-1/2 -translate-x-1/2 w-100 h-auto md:w-96 lg:w-[600px] z-0 pointer-events-none"
          aria-hidden="true"
        />

        {/* Contenitore per il solo logo Woop, per il controllo dello z-index */}
        <div className="relative z-10"> 
          <img 
            src="/WoopPayLogo.png" 
            alt="Woop Pay Logo" 
            className="h-10 md:h-12 lg:h-14" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero; 