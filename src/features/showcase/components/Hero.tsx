import { motion } from 'framer-motion';
import { Trophy, Download } from 'lucide-react';
import { trackDownload } from '../../../shared/utils/analytics';
import { useLanguageStore } from '../../../core/store/useLanguageStore';
import { heroContent } from '../data/content';

const Hero = () => {
  const { language } = useLanguageStore();
  const t = heroContent[language];

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="HeroHabit Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tighter drop-shadow-2xl">
            {t.title} <br />
            <span className="text-yellow-500">{t.titleAccent}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center"
        >
          <a
            href="https://play.google.com/store?utm_source=hero&utm_medium=website"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackDownload('Hero_Main')}
            className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-full text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.5)]"
          >
            <Download size={24} />
            {t.ctaPrimary}
          </a>
          <button
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-electric-blue/30 font-bold py-4 px-8 rounded-full text-lg transition-all hover:scale-105"
            onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
          >
            <Trophy size={24} className="text-yellow-500" />
            {t.ctaSecondary}
          </button>
        </motion.div>
        
        {/* Floating elements animation */}
        <motion.div 
           animate={{ y: [0, -10, 0] }}
           transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
           className="absolute md:hidden bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm animate-pulse flex flex-col items-center gap-2"
        >
           <span>{t.scroll}</span>
           <div className="w-1 h-8 bg-gradient-to-b from-yellow-500 to-transparent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
