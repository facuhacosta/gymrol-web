import { motion } from 'framer-motion';
import { UserPlus, Sword, Dumbbell, Coins, Trophy } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useLanguageStore } from '../../../core/store/useLanguageStore';
import { howToPlayContent } from '../data/content';

const HowToPlay = () => {
  const { language } = useLanguageStore();
  const t = howToPlayContent[language];
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const icons = [
    <UserPlus className="w-12 h-12 text-primary" />,
    <Sword className="w-12 h-12 text-electric-green" />,
    <Dumbbell className="w-12 h-12 text-electric-blue" />,
    <Coins className="w-12 h-12 text-primary" />,
    <Trophy className="w-12 h-12 text-electric-green" />
  ];

  return (
    <section id="how-to-play" className="py-20 bg-zinc-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Carousel en Mobile, Grid en Desktop */}
        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide no-scrollbar md:overflow-visible md:pb-0">
          {t.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="min-w-[280px] md:min-w-0 snap-center bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700 hover:border-primary/30 transition-colors group flex flex-col items-center"
            >
              <div className="mb-6 bg-zinc-900 w-20 h-20 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold mb-4 text-center group-hover:text-primary transition-colors">{step.title}</h3>
              <p className="text-gray-400 text-center text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
