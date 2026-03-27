import React, { createContext, useContext, useState } from 'react';
import translations from '../data/translations.json';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [isKorean, setIsKorean] = useState(false);

  const value = {
    isKorean,
    toggleLanguage: () => setIsKorean(prev => !prev),
    current: isKorean ? translations.ko : translations.en,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
