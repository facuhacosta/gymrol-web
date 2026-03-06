import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { trackDownload } from '../../../shared/utils/analytics';
import { useLanguageStore } from '../../../core/store/useLanguageStore';
import { ctaContent } from '../data/content';

const CTA = () => {
  const { language } = useLanguageStore();
  const t = ctaContent[language];

  return (
    <section id="cta" className="py-24 bg-yellow-500 text-black overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
            {t.title}
          </h2>
          <p className="text-xl md:text-2xl font-medium mb-10 max-w-3xl mx-auto italic">
            "{t.subtitle}"
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              rel="noopener noreferrer"
              onClick={() => trackDownload('CTA_Footer_Android')}
              className="inline-flex items-center gap-3 bg-black text-white hover:bg-zinc-800 font-bold py-5 px-10 rounded-full text-xl transition-transform hover:scale-105 shadow-xl"
            >
              <Download size={28} />
              {t.button} (Android)
            </a>
            <a
              rel="noopener noreferrer"
              onClick={() => trackDownload('CTA_Footer_iOS')}
              className="inline-flex items-center gap-3 bg-white text-black hover:bg-gray-100 font-bold py-5 px-10 rounded-full text-xl transition-transform hover:scale-105 shadow-xl border border-electric-blue/20"
            >
              <Download size={28} />
              {t.button} (iOS)
            </a>
          </div>
          
          <p className="mt-8 text-sm font-bold uppercase tracking-widest opacity-70">
            {t.disclaimer}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
