'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../translations/en.json';
import bn from '../translations/bn.json';

type Language = 'EN' | 'BN';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof en) => string;
}

const translations = { EN: en, BN: bn };

const LanguageContext = createContext<LanguageContextType>({
  language: 'EN',
  setLanguage: () => {},
  t: (key) => key as string,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('EN');

  const t = (key: keyof typeof en) => {
    return translations[language][key] || en[key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language.toLowerCase();
    if (language === 'BN') {
      document.body.classList.add('font-bangla');
    } else {
      document.body.classList.remove('font-bangla');
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
