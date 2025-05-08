import React from 'react';
import { useTranslation } from 'react-i18next';
import SocialIcon from './SocialIcon';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <footer className="w-full bg-ethbari-dark text-white pt-16 pb-12 px-6 rounded-t-3xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Colonna Sinistra (Info) */} 
          <div className="lg:col-span-7 space-y-10">
            <h2 className="text-4xl md:text-5xl font-black leading-tight uppercase tracking-wider">
              {t('footer.assist.title', `WE'RE HERE TO CONNECT AND ASSIST YOU`)}
            </h2>
            <p className="text-gray-300 text-base max-w-lg">
              {t('footer.assist.description', 'Have questions about the event? Need help with registration or travel? Our team is ready to assist you.')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold uppercase tracking-wider mb-3">{t('footer.contactUs', 'CONTACT US')}</h4>
                <a href={`mailto:${t('footer.email', 'ethereumbari@gmail.com')}`} className="text-gray-300 hover:text-white underline break-all">
                  {t('footer.email', 'ethereumbari@gmail.com')}
                </a>
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-wider mb-3">{t('footer.eventLocation', 'EVENT LOCATION')}</h4>
                <p className="text-gray-300">
                  {t('footer.locationDetails.venue', 'Spazio Murat,')}<br />
                  {t('footer.locationDetails.street', 'Piazza del Ferrarese, 1,')}<br />
                  {t('footer.locationDetails.city', '70122 Bari BA')}
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-wider mb-3">{t('footer.followUs', 'FOLLOW US')}</h4>
              <div className="flex space-x-5">
                <SocialIcon href="https://www.linkedin.com/company/ethereumbari" iconName="linkedin"/>
                <SocialIcon href="https://www.instagram.com/ethereumbari" iconName="instagram"/>
              </div>
            </div>
          </div>

          {/* Colonna Destra (Form) */} 
          <div className="lg:col-span-5 bg-[#333333] rounded-3xl flex items-center justify-center p-4">
            <img src="/map.svg" alt="Map" className="w-full h-auto object-cover rounded-lg max-w-[90%]" />
          </div>
        </div>
      </footer>

      {/* Barra Inferiore */}
      <div className="w-full bg-white py-4 px-6 text-gray-500 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p onClick={() => window.open('https://yomi.digital/#/', '_blank')} className="text-gray-500 cursor-pointer">{t('footer.credits', 'Made with love by YOMI')}</p>
          <p className="text-gray-500">{t('footer.copy', '©2025')}</p>
          <div className="space-x-3">
            <a href="#" className="hover:text-red-500">{t('footer.privacy', 'Privacy Policy')}</a>
            <span>|</span>
            <a href="#" className="hover:text-red-500">{t('footer.terms', 'Legal Terms')}</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer; 