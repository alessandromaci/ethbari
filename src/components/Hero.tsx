import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CustomButton from './CustomBotton';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    // Esegui l'handler una volta all'inizio in caso la larghezza iniziale sia già mobile
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Array di dipendenze vuoto per eseguire l'effetto solo al montaggio e smontaggio

  return (
    <section className="relative w-full bg-white flex flex-col justify-center overflow-hidden">
      {/* Contenuto Principale della Hero Section */}
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start py-12 md:py-16 lg:py-20">
          {/* Colonna Sinistra: Testo */}
          <div className="flex flex-col justify-center text-left">
            <div className="mb-3 md:mb-4">
              <p className="block pl-1 text-black text-lg md:text-xl font-semibold tracking-widest uppercase font-geist font-bold">
                {t('hero.eventDate', 'SEPTEMBER 25-26, 2025')}
              </p>
            </div>
            <h1 className="text-black font-black text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-tight mb-6 font-koho font-medium" style={{ letterSpacing: '-0.02em' }}>
              {t('hero.title.line1', 'COSTRUISCI IL')}<br />
              {t('hero.title.line2', 'FUTURO')}<br />
              {t('hero.title.line3', 'DELLA FINANZA')}
            </h1>
            <p className="text-black font-normal text-base md:text-lg max-w-md lg:mx-0 mb-8 leading-relaxed font-geist">
              {t('hero.subtitleFull', "ETH Bari è l'evento che porta l'innovazione della finanza decentralizzata (DeFi) nel Sud Italia. Unisciti a studenti, giovani professionisti e appassionati di innovazione tecnologica per esplorare, costruire e dare forma al futuro della finanza — e far nascere nuove idee all'incrocio tra tecnologia, economia e blockchain.")}
            </p>
            <div className="flex justify-start">
              <CustomButton
                icon="/arrow.svg"
                iconPosition="right"
                iconWidth={12}
                iconHeight={12}
                text={isMobile ? t('hero.ctaGetTicketsShort', 'Biglietto') : t('hero.ctaGetTickets', 'Prendi il tuo Biglietto')}
                onClick={() => window.open('https://mego.tickets/#/', '_blank')}
                backgroundClasses="bg-[linear-gradient(to_right,#FF0012_0%,rgba(255,0,18,0.49)_100%)]"
              />
            </div>
          </div>

          {/* Colonna Destra: Immagine */}
          <div className="relative w-full h-[300px] overflow-visible sm:h-[400px] lg:min-h-[500px] mt-8 md:mt-0 -mx-4 sm:-mx-6 lg:mx-0 lg:-mr-24 overflow-hidden lg:overflow-visible lg:flex lg:items-center lg:justify-end">
            {/* Sfondo Gradiente Rosa */}
            <div className="absolute inset-x-0 bottom-0 h-3/4 md:h-full w-full md:w-4/5 lg:w-3/4 xl:w-2/3 bg-gradient-to-t from-[#fbe6e9]/70 via-[#fbe6e9]/40 to-transparent rounded-t-[150px] md:rounded-t-[200px] z-0 opacity-70 md:opacity-100 md:right-0 md:left-auto blur-2xl"></div>

            {/* Testo Location sovrapposto - Ripristinato e Modificato */}
            <div className="absolute lg:block hidden top-0 right-4 md:right-6 lg:right-8 z-20">
              <span className="text-black text-xl font-semibold tracking-widest uppercase font-geist font-bold">
                {t('hero.location', 'SPAZIO MURAT - BARI')}
              </span>
            </div>

            {/* Immagine/Grafica Bari Placeholder */}
            <div className="relative z-10 w-full h-full lg:flex lg:items-center lg:justify-center lg:max-w-none">
              <img
                src="/EthHeroImag-desktop.png"
                alt={t('hero.imagePlaceholder', 'ETHBARI Visual Placeholder')}
                className="hidden absolute left-1/2 -translate-x-1/2 w-[200vw] max-w-none h-full object-cover lg:relative lg:block lg:left-auto lg:translate-x-0 lg:w-full lg:h-auto lg:object-contain lg:max-h-[500px]"
              />

              {/* Contenitore per immagine mobile e relativi gradienti */}
              <div className="block lg:hidden relative w-[100vw] h-full">
                <img
                  src="/EthHeroImage.png"
                  alt={t('hero.imagePlaceholder', 'ETHBARI Visual Placeholder')}
                  className="w-full h-full object-contain" // Corretta altezza e aggiunto object-fit
                />
                {/* Gradiente Superiore Mobile */}
                <div 
                  className="absolute top-0 left-0 w-full h-[150px] transform -translate-y-1/2 bg-gradient-to-b from-transparent via-[#fbe6e9] to-transparent"
                />
                {/* Gradiente Inferiore Mobile */}
                <div 
                  className="absolute bottom-0 left-0 w-full h-[150px] transform translate-y-1/2 bg-gradient-to-t from-transparent via-[#fbe6e9] to-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sezione Supporters integrata sotto */}
      <div className="w-full flex flex-col items-center pt-10 pb-12 md:pt-16 md:pb-20 bg-white z-10 relative">
        <p className="text-black tracking-[0.2em] text-xs font-semibold mb-6 uppercase font-koho font-semibold">
          {t('supportersWoop.sponsoredBy', 'SUPPORTED BY')}
        </p>

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
    </section >
  );
};

export default Hero; 