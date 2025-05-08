import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CustomButton from './CustomBotton';
import HeaderMobile from './HeaderMobile'; // Importa il nuovo componente mobile

// Definizioni dati comuni
export interface NavLink { // Esporta il tipo per poterlo importare in HeaderMobile
  href: string;
  labelKey: string;
  defaultLabel: string;
}


const navLinks: NavLink[] = [
  { href: '#', labelKey: 'nav.home', defaultLabel: 'Home' },
  { href: '#about', labelKey: 'nav.about', defaultLabel: 'About' },
  { href: '#speaker', labelKey: 'nav.speakers', defaultLabel: 'Speaker' },
  { href: '#agenda', labelKey: 'nav.agenda', defaultLabel: 'Agenda' },
  { href: '#contacts', labelKey: 'nav.contacts', defaultLabel: 'Contacts' },
];


// Icone social per il menu mobile
const socialLinks = [
  { type: 'facebook', url: 'https://www.facebook.com/ethereumbari', icon: '/icons/facebook.svg' },
  { type: 'linkedin', url: 'https://www.linkedin.com/company/ethereumbari', icon: '/icons/linkedin.svg' },
  { type: 'instagram', url: 'https://www.instagram.com/ethereumbari', icon: '/icons/instagram.svg' },
];

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Link aggiuntivi per il footer del menu mobile
  const mobileFooterLinks = [
    { href: '#contacts', label: t('footer.contact', 'Contact Us') }, // Aggiungere chiavi i18n se necessario
    { href: '#', label: t('footer.support', 'Support') },
    { href: '#', label: t('footer.pitchDeck', 'Pitch Deck') },
  ];
  // Impedisce lo scroll del body quando il menu è aperto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    event.preventDefault();
    
    // Chiudi il menu se è aperto quando viene cliccato un link (sia da mobile che da desktop, anche se per desktop non ha effetto)
    if (isMenuOpen) {
        setIsMenuOpen(false);
    }

    // Funzione di scroll separata
    const scrollAction = () => {
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const elementId = href.substring(1);
        const element = document.getElementById(elementId);
        if (element) {
          const headerOffset = 80; 
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ 
              top: offsetPosition,
              behavior: "smooth"
          });
        } else {
             // Fallback se l'elemento non è disponibile subito
             setTimeout(() => {
                const elementRetry = document.getElementById(elementId);
                if(elementRetry){
                    const headerOffset = 80; 
                    const elementPosition = elementRetry.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ 
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
             }, 350); 
        }
      }
    }

    // Se il menu ERA aperto quando abbiamo cliccato, 
    // aspettiamo un po' prima di scrollare per dare tempo all'animazione di chiusura.
    // Usiamo una variabile locale perché lo stato `isMenuOpen` potrebbe essere già `false` a questo punto.
    const wasMenuOpen = isMenuOpen; // Cattura lo stato al momento del click
    if (wasMenuOpen) {
      setTimeout(scrollAction, 50); 
    } else {
      scrollAction(); // Scroll immediato se il menu non era aperto
    }
  };

  return (
    <>
      {/* Header Principale */}
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" onClick={(e) => handleSmoothScroll(e, '#')}>
            <img
              src="/Logo_Desktop.png"
              alt="ETHBARI Logo"
              className="hidden md:block h-10 w-auto group-hover:opacity-80 transition-opacity"
            />
            <img
              src="/Logo_mobile.png"
              alt="ETHBARI Logo Mobile"
              className="block md:hidden h-10 w-auto group-hover:opacity-80 transition-opacity"
            />
          </a>

          {/* Navigazione Desktop */}
          <nav className="hidden md:flex flex-1 justify-center items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.labelKey}
                href={link.href}
                className="text-black text-sm font-medium tracking-wide hover:text-red-600 transition-colors duration-200 uppercase"
                onClick={(e) => handleSmoothScroll(e, link.href)}
              >
                {t(link.labelKey, link.defaultLabel)}
              </a>
            ))}
          </nav>

          {/* Bottone Ticket Desktop */}
          <div className="hidden md:block">
            <CustomButton
              text={t('header.ticketButton', 'TICKETS')}
              onClick={() => window.open('https://mego.tickets/#/', '_blank')} // Azione placeholder
            />
          </div>

          {/* Bottone Hamburger/Menu Mobile */} 
          {/* Nota: Il bottone stesso rimane nell'Header, ma controlla lo stato che apre HeaderMobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-red-600 focus:outline-none p-2 z-[101] relative" // Z-index più alto dell'overlay per essere cliccabile
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {/* L'icona cambia in base allo stato, ma ora controlla l'overlay esterno */}
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> // Icona X originale come esempio, o usa "-"
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path> 
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Renderizza il componente Overlay Mobile separato */}
      <HeaderMobile 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        navLinks={navLinks}
        mobileFooterLinks={mobileFooterLinks}
        socialLinks={socialLinks}
        handleSmoothScroll={handleSmoothScroll} // Passa la funzione di scroll
      />
    </>
  );
};

export default Header; 