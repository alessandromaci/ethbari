import React from 'react';
import { useTranslation } from 'react-i18next';

interface CommunityPartner {
  id: string;
  name: string;
  logoUrl?: string;
  websiteUrl?: string;
}

// Aggiorniamo con i partner visibili nel design
const communityPartners: CommunityPartner[] = [
  {
    id: 'spaghetti-eth',
    name: 'Spaghetti ETH',
    logoUrl: '/logos/logo-spaghetteth.svg', // Placeholder
    websiteUrl: 'https://www.spaghett-eth.com/'
  },
  {
    id: 'urbe-eth',
    name: 'Urbe.ETH',
    logoUrl: '/logos/logo-urbeeth.svg',
    websiteUrl: 'https://urbe.build/'
  },
  {
    id: 'global-shapers',
    name: 'Global Shapers Community',
    logoUrl: '/logos/logo-global-shapers.svg',
    websiteUrl: 'https://www.globalshapers.org/home'
  },
  {
    id: 'ethna',
    name: 'ETHNA',
    logoUrl: '/logos/logo-ethna.svg',
    websiteUrl: 'https://ethna.rocks/'
  },
];

const PartnerLogo: React.FC<{ partner: CommunityPartner }> = ({ partner }) => {
  const logoSrc = partner.logoUrl;
  
  const logoElement = (
    <img 
      src={logoSrc} 
      alt={`${partner.name} logo`} 
      // Aumentata altezza massima, aggiunto padding orizzontale
      className="max-h-16 md:max-h-20 object-contain mx-auto px-4"
    />
  );

  return (
    <a href={partner.websiteUrl || '#'} target="_blank" rel="noopener noreferrer" className="block py-2 hover:opacity-80 transition-opacity duration-200">
      {logoElement}
    </a>
  );
};

const CommunitySupport: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white py-16 md:py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative">
        <h2 className="text-black text-lg md:text-3xl uppercase mb-12 font-koho font-medium">
          {t('communitySupport.title', 'COMMUNITY SUPPORT')}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
          {communityPartners.map((partner) => (
            <PartnerLogo key={partner.id} partner={partner} />
          ))}
        </div>

        <img
          src="/Ellipse.png"
          alt=""
          className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-auto md:w-96 lg:w-[600px] z-0 pointer-events-none opacity-70 blur-sm"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default CommunitySupport; 