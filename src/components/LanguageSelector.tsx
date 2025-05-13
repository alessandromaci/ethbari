import React from 'react';
import { useTranslation } from 'react-i18next';
import "/node_modules/flag-icons/css/flag-icons.min.css";

// Le definizioni SVG di ItalianFlag e EnglishFlag verranno rimosse.

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'it' ? 'en' : 'it';
    i18n.changeLanguage(newLanguage);
  };

  const flagToShow = currentLanguage === 'it' ? 'gb' : 'it';

  return (
    <div
      onClick={toggleLanguage}
      style={{
        cursor: 'pointer',
        border: '1px solid #ccc',
        padding: '5px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center', // Centra la bandiera anche orizzontalmente nel box
        minWidth: '43px', // Assicura una larghezza minima per contenere la bandiera
        minHeight: '43px', // Assicura un'altezza minima per contenere la bandiera
      }}
      title={currentLanguage === 'it' ? "Switch to English" : "Passa all'italiano"}
    >
      <span className={`fi fi-${flagToShow}`}></span>
    </div>
  );
};

export default LanguageSelector; 