import React from 'react';
import { useTranslation } from 'react-i18next';
import type { NavLink } from './Header'; // Importiamo il tipo NavLink se definito in Header o lo definiamo qui
import SocialIcon from './SocialIcon';

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
        <div className="flex items-center justify-between h-20 px-4 sm:px-6 border-b border-white/50">
          {/* Logo nell'Overlay */}
          <a href="#" className="flex items-center gap-2 group" onClick={(e) => handleSmoothScroll(e, '#')}>
            <img
              src="/Logo_mobile.png" // Usiamo sempre il logo mobile qui
              alt="ETHBARI Logo Mobile"
              className="h-10 w-auto"
            />
          </a>
          {/* Bottone Chiusura ("-") nell'Overlay */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:opacity-80 focus:outline-none p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
            </svg>
          </button>
        </div>

        {/* Navigazione Mobile */}
        <nav className="flex-grow px-4 sm:px-6 pt-4 overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.labelKey}
              href={link.href}
              className="block py-4 text-lg font-medium text-white border-b border-white/50 hover:opacity-80"
              onClick={(e) => handleSmoothScroll(e, link.href)}
            >
              {t(link.labelKey, link.defaultLabel)}
            </a>
          ))}
        </nav>

        {/* Sezione Inferiore: Socials e Links */}
        <div className="px-4 sm:px-6 pb-8 pt-4">
          {/* Icone Social */}
          <div className="flex items-center justify-center space-x-6 mb-6">
            {socialLinks.map((social) => (
              <SocialIcon href={social.url} iconName={social.type} />
            ))}
          </div>
          {/* Link Footer */}
          <div className="text-center space-y-2">
            {mobileFooterLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setIsMenuOpen(false)} className="block text-sm text-white hover:opacity-80">
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