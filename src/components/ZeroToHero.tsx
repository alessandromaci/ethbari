import React from 'react';
import { useTranslation } from 'react-i18next';
import CustomButton from './CustomBotton';

const ZeroToHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-9xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">


        {/* Colonna Sinistra */}
        <div className="flex-1 lg:max-w-xl text-left">
          <div className="block flex flex-row items-center justify-center mb-10 lg:hidden">
          <img
            src="/tech.png"
            alt="Blockchain Development Visual Element"
            className="w-full max-w-lg object-contain"
          />
          </div>
          <h2 className="
          text-black font-black text-4xl text 
          sm:text-5xl 
          md:text-6xl 
          leading-tight mb-4 font-geist font-medium">
            {t('zeroToHero.title', 'From zero to hero in blockchain development')}
          </h2>
          <p className=" text-center lg:text-left text-black text-base mb-6 font-geist font-semibold">
            {t('zeroToHero.author', 'by Urbe.ETH')}
          </p>
          <p className="text-black text-base md:text-lg mb-4 leading-relaxed lg:mx-0 max-w-lg font-geist font-bold">
            {t('zeroToHero.description', 'In sole tre giornate, passa dalle basi allo sviluppo autonomo. Questo workshop pratico ti guiderà nei fondamenti dello sviluppo blockchain: dai primi smart contract al lancio della tua prima applicazione DeFi. Che tu sia uno studente o un giovane professionista, uscirai con gli strumenti e le conoscenze per iniziare il tuo percorso da blockchain developer.')}
          </p>
          <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed lg:mx-0 max-w-lg font-geist font-normal">
            {t('zeroToHeroFirstParagraph', 'Join a three-day intensive program to learn how to develop applications in the Web3 world. With the support of top Italian developers, you will learn how to write smart contracts, use the most advanced tools, and launch your first DeFi dApp.')}
          </p>
          <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed lg:mx-0 max-w-lg font-geist font-normal">
            {t('zeroToHeroSecondParagraph', 'The workshop is designed for students and young professionals who want to take their first steps in blockchain with a practical, guided approach. By the end of the program, you will have the skills to start building in the decentralized world right away.')}
          </p>
          <div className="inline-block">
            <CustomButton
              text={t('zeroToHero.cta', 'Reserve your spot')}
              onClick={() => { }}
              backgroundClasses="bg-[linear-gradient(to_right,#FF0012_0%,rgba(255,0,18,0.49)_100%)]"
            />
          </div>
        </div>


        {/* Colonna Destra */}
        <div className="hidden lg:flex-1 lg:flex lg:items-center justify-center w-full mt-10 lg:mt-0">
          {/* Placeholder per l'elemento grafico complesso */}
          <img
            src="/tech.png"
            alt="Blockchain Development Visual Element"
            className="w-full max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ZeroToHero; 