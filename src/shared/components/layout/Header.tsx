import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackDownload } from '../../utils/analytics';
import { useLanguageStore } from '../../../core/store/useLanguageStore';
import { navContent } from './content';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguageStore();
  const t = navContent[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, href: '#hero' },
    { name: t.howToPlay, href: '#how-to-play' },
    { name: t.classes, href: '#classes' },
    { name: t.features, href: '#features' },
    { name: t.gallery, href: '#gallery' },
    { name: t.pricing, href: '#pricing' },
    { name: t.download, href: '#cta' }, // Changed to scroll to CTA for download
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-sm py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-white font-bold text-xl md:text-2xl">
          <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(234,179,8,0.4)]">
            <img 
              src="/logo.jpeg" 
              alt="HeroHabit Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="tracking-wider">HEROHABIT</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-yellow-400 transition-colors font-medium text-sm uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
          
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle Language"
          >
            <Globe size={18} />
            <span className="uppercase text-sm font-bold">{language}</span>
          </button>

          <a
            href="https://play.google.com/store?utm_source=header&utm_medium=website"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackDownload('Header_Desktop')}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-full transition-transform hover:scale-105"
          >
            {t.download}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-white"
            aria-label="Toggle Language"
          >
            <span className="uppercase text-sm font-bold">{language}</span>
            <Globe size={20} />
          </button>
          
          <button
            className="text-white p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black/95 border-t border-gray-800 md:hidden"
          >
            <nav className="flex flex-col p-6 gap-4 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-yellow-400 text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://play.google.com/store?utm_source=header_mobile&utm_medium=website"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-full w-full text-center mt-2"
                onClick={() => { setIsOpen(false); trackDownload('Header_Mobile'); }}
              >
                {t.download}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
