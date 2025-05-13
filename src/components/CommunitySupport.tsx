import React from 'react';
import { useTranslation } from 'react-i18next';

interface CommunityPartner {
  id: string;
  name: string;
  logoUrl?: string;
  websiteUrl?: string;
  logoHeightClass?: string;
}

// Aggiorniamo con i partner visibili nel design
const communityPartners: CommunityPartner[] = [
  {
    id: 'spaghetti-eth',
    name: 'Spaghetti ETH',
    logoUrl: '/logos/logo-spaghetteth.png', // Placeholder
    websiteUrl: 'https://www.spaghett-eth.com/',
    logoHeightClass: 'h-24'
  },
  {
    id: 'urbe-eth',
    name: 'Urbe.ETH',
    logoUrl: '/logos/logo-urbeeth.png',
    websiteUrl: 'https://urbe.build/',
    logoHeightClass: 'h-24'
  },
  {
    id: 'global-shapers',
    name: 'Global Shapers Community',
    logoUrl: '/logos/logo-global-shapers.png',
    websiteUrl: 'https://www.globalshapers.org/home',
    logoHeightClass: 'h-24'
  },
  {
    id: 'ethna',
    name: 'ETHNA',
    logoUrl: '/logos/logo-ethna.png',
    websiteUrl: 'https://ethna.rocks/',
    logoHeightClass: 'h-24'
  },
];

const PartnerLogo: React.FC<{ partner: CommunityPartner }> = ({ partner }) => {
  const logoSrc = partner.logoUrl;
  const containerHeightClass = partner.logoHeightClass || 'h-28';

  return (
    <div className={`flex items-center justify-center ${containerHeightClass}`}>
      <a
        href={partner.websiteUrl || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full h-full p-2 hover:opacity-80 transition-opacity duration-200"
      >
        <img
          src={logoSrc}
          alt={`${partner.name} logo`}
          className="object-contain max-h-full max-w-full"
        />
      </a>
    </div>
  );
};

const CommunitySupport: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white py-16 md:py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative">
        <h2 className="text-black text-4xl md:text-3xl uppercase mb-12 font-koho font-medium">
          {t('communitySupport.title', 'COMMUNITY SUPPORT')}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
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