import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useLanguageStore } from '../../../core/store/useLanguageStore';
import { footerContent } from './content';

const Footer = () => {
  const { language } = useLanguageStore();
  const t = footerContent[language];

  return (
    <footer className="bg-zinc-950 text-gray-400 py-12 border-t border-zinc-900 pb-32 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="flex items-center gap-2 text-white font-bold text-2xl">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="/logo.png" 
                alt="HeroHabit Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span>HEROHABIT</span>
          </div>
          
          <div className="flex gap-6">
            <a target="_blank" href="https://www.tiktok.com/@herohabit?_r=1&_t=ZS-94aBxath8XH" className="hover:text-primary transition-colors"><Facebook /></a>
            <a target="_blank" href="https://twitter.com/herohabit_es" className="hover:text-primary transition-colors"><Twitter /></a>
            <a target="_blank" href="https://www.instagram.com/herohabit.es?igsh=MTB4Y3Rqem9uZmhhMQ==" className="hover:text-primary transition-colors"><Instagram /></a>
            <a target="_blank" href="https://www.youtube.com/@herohabit-es" className="hover:text-primary transition-colors"><Youtube /></a>
          </div>
        </div>
        
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} GymRol Games. {t.rights}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">{t.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.terms}</a>
            <a href="#" className="hover:text-white transition-colors">{t.support}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
