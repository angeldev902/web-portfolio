import { useSelector } from 'react-redux';
import { RootState } from '../store';

import en from '../assets/i18n/en.json';
import es from '../assets/i18n/es.json';

const translations = {
  en,
  es,
};

export const useTranslations = () => {
  const lang = useSelector((state: RootState) => state.language.lang);
  return translations[lang];
};
