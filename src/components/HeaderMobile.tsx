import React from 'react';
import { useTranslation } from 'react-i18next';
import type { NavLink } from './Header'; // Importiamo il tipo NavLink se definito in Header o lo definiamo qui
import SocialIcon from './SocialIcon';
import LanguageSelector from './LanguageSelector';

// Definiamo tipi locali se non importati
interface MobileFooterLink {
  href: string;
  label: string;
}
interface SocialLink {
  type: string;
  url: string;
  icon: string;
}

interface HeaderMobileProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  navLinks: NavLink[];
  mobileFooterLinks: MobileFooterLink[];
  socialLinks: SocialLink[];
  handleSmoothScroll: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => void;
}

const HeaderMobile: React.FC<HeaderMobileProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  navLinks,
  mobileFooterLinks,
  socialLinks,
  handleSmoothScroll,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={`fixed inset-0 bg-[#FF0012] z-[100] transform transition-transform duration-300 ease-in-out md:hidden
                 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="flex flex-col h-full">
        {/* Top Bar dell'Overlay */}
        <div className="flex items-center justify-between h-20 px-4 sm:px-6">
          {/* Logo nell'Overlay */}
          <a href="#" className="flex items-center gap-2 group" onClick={(e) => handleSmoothScroll(e, '#')}>
            <img
              src="/Ethbari-logo-white.svg" // Usiamo sempre il logo mobile qui
              alt="ETHBARI Logo Mobile"
              className="h-10 w-auto"
            />
          </a>
          {/* Bottone Chiusura ("-") nell'Overlay */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:opacity-80 focus:outline-none p-2"
          >
            <svg className="w-6 h-6" viewBox="0 0 26 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4C25.1046 4 26 3.10457 26 2C26 0.89543 25.1046 0 24 0V4ZM2 0H0V4H2V0ZM24 0L2 0V4L24 4V0Z" fill="white"/>
            </svg>
          </button>
        </div>
        {/* Separatore sotto la Top Bar */}
        <div className="h-px bg-white mx-4 sm:mx-6"></div>

        {/* Navigazione Mobile */}
        <nav className="flex-grow pt-4 overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.labelKey}>
              <a
                href={link.href}
                className="block py-4 px-4 sm:px-6 text-lg font-medium text-white hover:opacity-80"
                onClick={(e) => handleSmoothScroll(e, link.href)}
              >
                {t(link.labelKey, link.defaultLabel)}
              </a>
              {/* Separatore sotto ogni link */}
              <div className="h-px bg-white mx-4 sm:mx-6"></div>
            </div>
          ))}
        </nav>

        {/* Sezione Inferiore: Socials e Links */}
        <div className="px-4 sm:px-6 pb-8 pt-4">
          <div className="mb-4">
            <LanguageSelector borderColor="#fff" textColor="#fff" onLanguageChange={() => setIsMenuOpen(false)} />
          </div>
          {/* Icone Social - allineate a sinistra */}
          <div className="flex items-center justify-start space-x-6 mb-6">
            {socialLinks.map((social) => (
              <SocialIcon 
                key={social.type} 
                href={social.url} 
                iconName={social.type}
              />
            ))}
          </div>
          {/* Link Footer - allineati a sinistra */}
          <div className="text-left space-y-2">
            {mobileFooterLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setIsMenuOpen(false)} className="block text-sm text-white hover:opacity-80 font-geist">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile; 