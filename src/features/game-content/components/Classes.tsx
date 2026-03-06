import { motion } from 'framer-motion';
import { Dumbbell, Wind, Heart, Zap, Brain } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useLanguageStore } from '../../../core/store/useLanguageStore';
import { classesContent } from '../data/content';

const Classes = () => {
  const { language } = useLanguageStore();
  const t = classesContent[language];
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const icons = [
    <Dumbbell className="w-16 h-16 text-yellow-500" />,
    <Wind className="w-16 h-16 text-electric-green" />,
    <Heart className="w-16 h-16 text-red-500" />,
    <Zap className="w-16 h-16 text-electric-blue" />,
    <Brain className="w-16 h-16 text-electric-purple" />
  ];

  const colors = [
    "border-yellow-500/50 hover:border-yellow-500",
    "border-electric-green/30 hover:border-electric-green",
    "border-red-500/30 hover:border-red-500",
    "border-electric-blue/30 hover:border-electric-blue",
    "border-electric-purple/30 hover:border-electric-purple"
  ];

  return (
    <section id="classes" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full" />
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Carousel en Mobile, Grid en Desktop */}
        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide no-scrollbar md:overflow-visible md:pb-0">
          {t.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`min-w-[280px] md:min-w-0 snap-center bg-zinc-900 p-8 rounded-2xl border-2 transition-all ${colors[index]} flex flex-col items-center text-center`}
            >
              <div className="mb-6 bg-black/50 p-4 rounded-full shadow-lg">
                {icons[index]}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {item.description}
              </p>
              <div className="mt-auto w-full bg-zinc-800 p-3 rounded-lg border border-zinc-700">
                <p className="text-xs font-semibold text-yellow-400">{item.ability}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
