import { create } from 'zustand';

type Language = 'es' | 'en';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: 'es',
  setLanguage: (lang) => set({ language: lang }),
  toggleLanguage: () => set((state) => ({ language: state.language === 'es' ? 'en' : 'es' })),
}));
