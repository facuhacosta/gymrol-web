import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguageStore } from '../../../core/store/useLanguageStore';
import { galleryContent } from '../data/content';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { language } = useLanguageStore();
  const t = galleryContent[language];

  const images = [
    {
      src: "src/assets/login.png",
      alt: t.captions[0]
    },
    {
      src: "src/assets/start-aventure.png",
      alt: t.captions[1]
    },
    {
      src: "src/assets/dashboard.png",
      alt: t.captions[2]
    },
    {
      src: "src/assets/missions.png",
      alt: t.captions[3]
    }
  ];

  const navigate = useCallback((direction: 'prev' | 'next') => {
    if (selectedIndex === null) return;
    if (direction === 'prev') {
      setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
    } else {
      setSelectedIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
    }
  }, [selectedIndex, images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowLeft') navigate('prev');
      if (e.key === 'ArrowRight') navigate('next');
      if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, navigate]);

  return (
    <section id="gallery" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-gray-400">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl cursor-pointer shadow-lg group aspect-[9/16] border border-zinc-800 hover:border-primary/50 transition-colors"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                <Search size={32} className="text-primary mb-2" />
                <span className="text-white font-bold text-lg mb-2">
                  {img.alt}
                </span>
                <span className="text-primary text-sm border border-primary/50 px-3 py-1 rounded-full bg-primary/10">
                  Ver Detalles
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-primary p-2 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
            >
              <X size={40} />
            </button>

            {/* Navigation Arrows */}
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary p-2 transition-colors z-10 bg-black/20 rounded-full"
              onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
            >
              <ChevronLeft size={48} />
            </button>

            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary p-2 transition-colors z-10 bg-black/20 rounded-full"
              onClick={(e) => { e.stopPropagation(); navigate('next'); }}
            >
              <ChevronRight size={48} />
            </button>

            <motion.img 
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={images[selectedIndex].src} 
              alt={images[selectedIndex].alt} 
              className="max-w-full max-h-[90vh] object-cover rounded-lg shadow-2xl border-2 border-primary/30 aspect-[9/16]"
              onClick={(e) => e.stopPropagation()}
            />
            
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-center">
               <p className="text-xl font-bold">{images[selectedIndex].alt}</p>
               <p className="text-gray-400 text-sm mt-2">{selectedIndex + 1} / {images.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
