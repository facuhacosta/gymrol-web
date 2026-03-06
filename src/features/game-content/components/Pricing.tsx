import { motion } from 'framer-motion';
import { Check, ShieldCheck } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useLanguageStore } from '../../../core/store/useLanguageStore';
import { pricingContent } from '../data/content';

const Pricing = () => {
  const { language } = useLanguageStore();
  const t = pricingContent[language];
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="pricing" className="py-20 bg-black text-white relative overflow-hidden">
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

        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-5xl mx-auto">
          {t.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={`flex-1 p-8 rounded-3xl border-2 flex flex-col ${
                plan.popular 
                  ? "border-yellow-500 bg-zinc-900 shadow-[0_0_30px_rgba(234,179,8,0.2)] scale-105 z-10" 
                  : "border-zinc-800 bg-zinc-900/50"
              }`}
            >
              {plan.popular && (
                <div className="bg-yellow-500 text-black font-bold text-xs uppercase py-1 px-3 rounded-full self-start mb-4 flex items-center gap-1">
                  <ShieldCheck size={14} />
                  Recomendado
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-black mb-6 text-white">
                {plan.price}
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-gray-300">
                    <Check size={18} className="text-yellow-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 rounded-xl font-bold transition-all hover:scale-105 ${
                  plan.popular 
                    ? "bg-yellow-500 text-black hover:bg-yellow-400 shadow-lg shadow-yellow-500/20" 
                    : "bg-zinc-800 text-white hover:bg-zinc-700"
                }`}
              >
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
