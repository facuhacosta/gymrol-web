import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift } from 'lucide-react';
import Cookies from 'js-cookie';
import { trackDownload } from '../../../shared/utils/analytics';
import { useLanguageStore } from '../../../core/store/useLanguageStore';
import { sidePanelContent } from '../data/content';

const SidePanel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasClosed, setHasClosed] = useState(false);
  const { language } = useLanguageStore();
  const t = sidePanelContent[language];

  useEffect(() => {
    const shown = Cookies.get('sidePanelShown');
    if (shown) {
      setHasClosed(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 1.5 && !hasClosed) {
        setIsVisible(true);
        Cookies.set('sidePanelShown', 'true');
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasClosed]);

  const handleClose = () => {
    setIsVisible(false);
    setHasClosed(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col w-[300px] h-[600px] bg-zinc-900 border-2 border-yellow-500 rounded-2xl shadow-[0_0_50px_rgba(234,179,8,0.3)] overflow-hidden"
        >
          {/* Header */}
          <div className="bg-yellow-500 p-4 flex justify-between items-center text-black">
            <div className="flex items-center gap-2 font-bold">
              <Gift size={20} />
              <span>{t.subtitle}</span>
            </div>
            <button 
              onClick={handleClose}
              className="hover:bg-black/10 rounded-full p-1 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 flex flex-col items-center justify-between text-center relative">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">{t.title}</h3>
              <ul className="text-left text-gray-300 space-y-3 mb-6 bg-zinc-800/50 p-4 rounded-lg mt-4">
                {t.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-500">★</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 w-full">
              <div className="w-full h-40 bg-zinc-800 mb-6 rounded-lg overflow-hidden border border-zinc-700">
                 <img 
                   src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
                   alt="Reward"
                   className="w-full h-full object-cover"
                 />
              </div>
              
              <a
                href="https://play.google.com/store?utm_source=side_panel&utm_medium=website"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { trackDownload('SidePanel_Offer'); handleClose(); }}
                className="block w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-xl transition-transform hover:scale-105 shadow-lg mb-2"
              >
                {t.button}
              </a>
              <button 
                onClick={handleClose}
                className="text-xs text-gray-500 underline hover:text-gray-300"
              >
                {t.close}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SidePanel;
