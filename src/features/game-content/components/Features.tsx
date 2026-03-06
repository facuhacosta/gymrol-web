import { motion } from 'framer-motion';
import { Sword, Flame, Shield, User, Castle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';
import { useLanguageStore } from '../../../core/store/useLanguageStore';
import { featuresContent } from '../data/content';

const Features = () => {
  const { language } = useLanguageStore();
  const t = featuresContent[language];
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: <Sword className="w-10 h-10" />,
      title: t.items[0].title,
      description: t.items[0].description,
      color: "text-yellow-500",
      border: "hover:border-yellow-500"
    },
    {
      icon: <Flame className="w-10 h-10" />,
      title: t.items[1].title,
      description: t.items[1].description,
      color: "text-red-500",
      border: "hover:border-red-500"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: t.items[2].title,
      description: t.items[2].description,
      color: "text-yellow-500",
      border: "hover:border-yellow-500"
    },
    {
      icon: <User className="w-10 h-10" />,
      title: t.items[3].title,
      description: t.items[3].description,
      color: "text-electric-green",
      border: "hover:border-electric-green"
    },
    {
      icon: <Castle className="w-10 h-10" />,
      title: t.items[4].title,
      description: t.items[4].description,
      color: "text-electric-blue",
      border: "hover:border-electric-blue"
    }
  ];

  return (
    <section
      ref={ref}
      id="features"
      className="py-20 bg-zinc-900 text-white relative"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full" />
        </div>

        {/* Carousel Container */}
        <div className="relative group ">
          {/* Arrows */}
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-yellow-500/10 hover:bg-yellow-500/20 p-3 rounded-full border border-yellow-500/20 transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={24} className="text-yellow-500" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-yellow-500/10 hover:bg-yellow-500/20 p-3 rounded-full border border-yellow-500/20 transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} className="text-yellow-500" />
          </button>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="min-w-[280px] md:min-w-[calc(33.333%-22px)] snap-center bg-black p-8 rounded-xl hover:bg-zinc-800 transition-all hover:-translate-y-2 border-l-4 border-transparent ${feature.border} shadow-lg"
              >
                <div className={`${feature.color} mb-4 bg-zinc-800 w-16 h-16 rounded-lg flex items-center justify-center`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
