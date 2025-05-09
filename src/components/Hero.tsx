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
              <p className="block text-black text-xs font-semibold tracking-widest uppercase font-geist">
                {t('hero.eventDate', 'SEPTEMBER 25-26, 2025')}
              </p>
            </div>
            <h1 className="text-black font-black text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-tight mb-6 font-koho" style={{ letterSpacing: '-0.02em' }}>
              {t('hero.title.line1', 'COSTRUISCI IL')}<br />
              {t('hero.title.line2', 'FUTURO')}<br />
              {t('hero.title.line3', 'DELLA FINANZA')}
            </h1>
            <p className="text-black text-base md:text-lg max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed font-geist">
              {t('hero.subtitleFull', 'ETH Bari è l\'evento che porta l\'innovazione della finanza decentralizzata (DeFi) nel Sud Italia. Unisciti a studenti, giovani professionisti e appassionati di innovazione tecnologica per esplorare, costruire e dare forma al futuro della finanza — e far nascere nuove idee all\'incrocio tra tecnologia, economia e blockchain.')}
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
          <div className="relative w-full h-[300px] overflow-visible sm:h-[400px] lg:min-h-[500px] mt-8 md:mt-0 -mx-4 sm:-mx-6 lg:mx-0 lg:-mr-24 overflow-hidden lg:overflow-visible lg:flex lg:items-center lg:justify-end">
            {/* Sfondo Gradiente Rosa */}
            <div className="absolute inset-x-0 bottom-0 h-3/4 md:h-full w-full md:w-4/5 lg:w-3/4 xl:w-2/3 bg-gradient-to-t from-[#fbe6e9]/70 via-[#fbe6e9]/40 to-transparent rounded-t-[150px] md:rounded-t-[200px] z-0 opacity-70 md:opacity-100 md:right-0 md:left-auto blur-2xl"></div>

            {/* Testo Location sovrapposto */}
            <div className="absolute lg:block hidden top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 z-20">
              <span className="text-black font-bold text-xs sm:text-sm md:text-base tracking-wider uppercase">
                {t('hero.location', 'SPAZIO MURAT - BARI')}
              </span>
            </div>

            {/* Immagine/Grafica Bari Placeholder */}
            <div className="relative z-10 w-full h-full lg:flex lg:items-center lg:justify-center lg:max-w-none">
              <img
                src="/EthHeroImage.png"
                alt={t('hero.imagePlaceholder', 'ETHBARI Visual Placeholder')}
                className="absolute left-1/2 -translate-x-1/2 w-[200vw] max-w-none h-full object-cover lg:relative lg:left-auto lg:translate-x-0 lg:w-full lg:h-auto lg:object-contain lg:max-h-[500px]"
              />

              <div className="absolute lg:hidden block w-[200vw] h-[100px] top-[-50px]
              bg-gradient-to-b from-transparent via-[#fbe6e9] to-transparent">
              </div>

              <div className="absolute lg:hidden block w-[200vw] h-[100px] bottom-[-50px]
              bg-gradient-to-t from-transparent via-[#fbe6e9] to-transparent">
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sezione Supporters integrata sotto */ }
  <div className="w-full flex flex-col items-center pt-10 pb-12 md:pt-16 md:pb-20 bg-white z-10 relative">
    <p className="text-black tracking-[0.2em] text-xs font-semibold mb-6 uppercase font-geist">
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