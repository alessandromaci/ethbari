import React from 'react';
import { useTranslation } from 'react-i18next';
import SocialIcon from './SocialIcon';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <footer className="w-full bg-ethbari-dark text-white pt-16 pb-12 px-6 rounded-3xl">
        <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Colonna Sinistra (Info) - Contenuti centrati sotto sm, allineati a sinistra da sm in su */}
          <div className="lg:col-span-7 space-y-10 flex flex-col items-center text-center sm:items-start sm:text-left lg:items-start lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider font-koho font-medium lg:pr-56">
              {t(
                "footer.assist.title",
                `WE\'RE HERE TO CONNECT AND ASSIST YOU`
              )}
            </h2>
            <p className="text-gray-300 text-base max-w-lg font-geist font-light text-xl">
              {t(
                "footer.assist.description",
                "Have questions about the event? Need help with registration or travel? Our team is ready to assist you."
              )}
            </p>

            <div className="flex w-full lg:hidden lg:col-span-5 bg-[#333333] rounded-3xl flex items-center justify-center p-4">
              <img
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Spazio+Murat/@41.1264093,16.8691747,17z/data=!3m2!4b1!5s0x1347e866a6711563:0xa0cf5b02f7139cf8!4m6!3m5!1s0x1347e8641da0e4bd:0x471bec7a34deffaf!8m2!3d41.1264053!4d16.8717496!16s%2Fg%2F11c45d2w4p?entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoASAFQAw%3D%3D",
                    "_blank"
                  )
                }
                src="/map.svg"
                alt="Map"
                className="w-full h-auto object-cover rounded-lg max-w-[95%] cursor-pointer hover:scale-105 transition-all duration-300"
              />
            </div>

            {/* Grid per Contattaci e Luogo Evento - i suoi figli devono gestire il proprio allineamento testuale interno se necessario */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
              {/* Colonna Contattaci - testo e icone centrate al suo interno su mobile */}
              <div className="h-full flex flex-col items-center text-center sm:items-start sm:text-left">
                <h4 className="font-bold uppercase tracking-wider mb-3">
                  {t("footer.contactUs", "CONTACT US")}
                </h4>
                <div className="flex-grow flex flex-col items-center sm:items-start">
                  <a
                    href={`mailto:${t(
                      "footer.email",
                      "ethereumbari@gmail.com"
                    )}`}
                    className="text-gray-300 hover:text-white underline break-all block mb-3"
                  >
                    {t("footer.email", "ethereumbari@gmail.com")}
                  </a>
                  <div className="flex space-x-5">
                    <SocialIcon
                      href="https://www.instagram.com/ethereumbari"
                      iconName="instagram"
                    />
                    <SocialIcon
                      href="https://x.com/ethereumbari"
                      iconName="twitter"
                    />
                    <SocialIcon
                      href="https://t.me/+XwfcBtCwOPE4NWI0"
                      iconName="telegram"
                    />
                  </div>
                </div>
              </div>
              {/* Colonna Luogo Evento - testo centrato al suo interno (ereditato o esplicito) */}
              <div className="h-full flex flex-col items-center text-center sm:items-start sm:text-left">
                <h4 className="font-bold uppercase tracking-wider mb-3">
                  {t("footer.eventLocation", "EVENT LOCATION")}
                </h4>
                <p className="text-gray-300 flex-grow">
                  {t("footer.locationDetails.venue", "Spazio Murat,")}
                  <br />
                  {t(
                    "footer.locationDetails.street",
                    "Piazza del Ferrarese, 1,"
                  )}
                  <br />
                  {t("footer.locationDetails.city", "70122 Bari BA")}
                </p>
              </div>
            </div>
          </div>

          {/* Colonna Destra (Form) */}
          <div className="hidden lg:flex lg:col-span-5 bg-[#333333] rounded-3xl flex items-center justify-center p-4">
            <img
              onClick={() => window.open('https://www.google.com/maps/place/Spazio+Murat/@41.1264093,16.8691747,17z/data=!3m2!4b1!5s0x1347e866a6711563:0xa0cf5b02f7139cf8!4m6!3m5!1s0x1347e8641da0e4bd:0x471bec7a34deffaf!8m2!3d41.1264053!4d16.8717496!16s%2Fg%2F11c45d2w4p?entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoASAFQAw%3D%3D', '_blank')}
              src="/map.svg" alt="Map"
              className="w-full h-auto object-cover rounded-lg max-w-[95%] cursor-pointer hover:scale-105 transition-all duration-300" />
          </div>
        </div>
      </footer>

      {/* Barra Inferiore */}
      <div className="w-full bg-white py-4 px-6 text-gray-500 text-xs">
        <div className="max-w-9xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p
            onClick={() => window.open("https://yomi.digital/#/", "_blank")}
            className="text-gray-500 cursor-pointer"
          >
            {t("footer.credits", "Made with love by YOMI")}
          </p>
          <p className="text-gray-500">{t("footer.copy", "©2025")}</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
