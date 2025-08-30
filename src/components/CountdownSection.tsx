import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import CustomButton from "./CustomBotton";

const CountdownSection: React.FC = () => {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isEventOver, setIsEventOver] = useState(false); // Stato per evento passato

  useEffect(() => {
    const eventDate = new Date("2025-09-25T08:00:00"); // Data hardcodata

    const calculateState = () => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        setIsEventOver(false);
        // Calcolo Mesi
        let months = (eventDate.getFullYear() - now.getFullYear()) * 12;
        months -= now.getMonth();
        months += eventDate.getMonth();
        if (eventDate.getDate() < now.getDate()) {
          months--;
        }
        months = Math.max(0, months);

        // Calcolo Ore, Minuti, Secondi basati sulla differenza totale
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ months, hours, minutes, seconds });
      } else {
        setIsEventOver(true);
        setTimeLeft({ months: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateState(); // Calcola stato iniziale
    const timer = setInterval(calculateState, 1000); // Aggiorna stato ogni secondo

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, "0");

  return (
    <section className="w-full bg-white pt-12 pb-20">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6 lg:gap-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center lg:gap-12">
          <div className="flex-1 flex flex-col justify-center text-left">
            <h2 className="text-black font-medium text-4xl sm:text-5xl md:text-[72px] leading-none mb-6 font-geist">
              {t("countdownSection.title.line1", "Il cambiamento")}
              <br />
              {t("countdownSection.title.line2", "comincia da qui.")}
            </h2>
            <h3 className="text-black text-[25px] font-semibold mb-8 font-geist">
              {t("countdownSection.subtitle", "Partecipa, impara, costruisci.")}
            </h3>
            <div className="text-gray-700 text-base max-w-xl mb-8 mx-auto lg:mx-0 space-y-4 leading-relaxed">
              <p className="font-geist">
                <span className="font-bold font-geist text-black">
                  {t("countdownSection.mission.title", "La nostra missione")}
                </span>
                :{" "}
                {t(
                  "countdownSection.mission.text",
                  "rendere la DeFi comprensibile e accessibile a tutti. Condividiamo conoscenze di qualità, strumenti pratici e connessioni reali per chi vuole innovare."
                )}
              </p>
              <p className="font-geist">
                <span className="font-bold font-geist text-black">
                  {t("countdownSection.vision.title", "La nostra visione")}
                </span>
                :{" "}
                {t(
                  "countdownSection.vision.text",
                  "va oltre l'evento: vogliamo accendere un movimento a Bari, creare opportunità concrete di apprendimento, lavoro e impresa, e coltivare una nuova generazione di talenti pronta a costruire le startup Web3 del futuro. Bari può diventare un polo di innovazione. E tutto inizia da qui."
                )}
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center w-full mt-10 lg:mt-0 lg:max-w-[612px]">
            <div
              className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://player.vimeo.com/video/1092595770?autoplay=1&muted=1&loop=1&background=1"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Bari waterfront video"
                className="absolute top-0 left-0 w-full h-full object-cover"
                style={{
                  background:
                    "url('/CountdownWallpaper.png') center center / cover no-repeat",
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-center gap-4 mt-6 justify-start">
          <CustomButton
            text={t("countdownSection.ctaStayTuned", "Stay tuned")}
            onClick={() => window.open("https://t.me/eth_bari", "_blank")}
            backgroundClasses="bg-[linear-gradient(to_right,#FF0012_0%,rgba(255,0,18,0.49)_100%)]"
          />
          <CustomButton
            text={t("countdownSection.ctaApplyVolunteer", "Apply as volunteer")}
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdAvLPoXFZGBLQfIj5ys1jjMBxxEkkTJ-Cn2FkC06_566ZfkA/viewform",
                "_blank"
              )
            }
            backgroundClasses="bg-[linear-gradient(90deg,#00C9E3_0.02%,rgba(0,201,227,0.34)_105.15%)]"
          />
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
