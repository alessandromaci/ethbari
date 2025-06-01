import React from "react";
import { useTranslation } from "react-i18next";

const EarlyBuilderBanner: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const message =
    currentLang === "it"
      ? t(
          "earlyBuilder.message.it",
          "🎉 Registrati ora per un biglietto gratuito! Usa il codice:"
        )
      : t(
          "earlyBuilder.message.en",
          "🎉 Register now and get a free ticket! Use code:"
        );

  return (
    <div className="w-full bg-[#FF0012] text-white py-2 px-4 text-center relative">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2">
        <p className="text-sm sm:text-base font-geist">{message}</p>
        <code className="bg-white text-[#FF0012] px-3 py-1 rounded-md font-mono font-bold text-sm sm:text-base">
          EARLYBUILDER
        </code>
      </div>
    </div>
  );
};

export default EarlyBuilderBanner;
