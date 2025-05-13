import React from 'react';
import { useTranslation } from 'react-i18next';
import "/node_modules/flag-icons/css/flag-icons.min.css";

// Le definizioni SVG di ItalianFlag e EnglishFlag verranno rimosse.

interface LanguageSelectorProps {
  onLanguageChange?: (language: string) => void;
  borderColor?: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onLanguageChange, borderColor = '#000000' }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'it' ? 'en' : 'it';
    i18n.changeLanguage(newLanguage);
    onLanguageChange?.(newLanguage);
  };

  const flagToShow = currentLanguage === 'it' ? 'gb' : 'it';

  return (
    <div
      onClick={toggleLanguage}
      className={`cursor-pointer p-[5px] inline-flex items-center justify-center min-w-[44px] min-h-[44px]`}
      style={{
        borderColor: borderColor,
        borderWidth: '1px',
      }}
      title={currentLanguage === 'it' ? "Switch to English" : "Passa all'italiano"}
    >
      <span className={`fi fi-${flagToShow}`}></span>
    </div>
  );
};

export default LanguageSelector; 