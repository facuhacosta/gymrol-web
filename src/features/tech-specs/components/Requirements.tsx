import { Smartphone, Apple } from 'lucide-react';
import { useLanguageStore } from '../../../core/store/useLanguageStore';
import { requirementsContent } from '../data/content';

const Requirements = () => {
  const { language } = useLanguageStore();
  const t = requirementsContent[language];

  return (
    <section id="requirements" className="py-20 bg-zinc-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Android */}
          <div className="bg-black p-8 rounded-2xl border border-zinc-800 hover:border-green-500 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-500/10 p-4 rounded-full">
                <Smartphone className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold">{t.android}</h3>
            </div>
            <ul className="space-y-4 text-gray-400">
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>{t.os}:</span>
                <span className="text-white">Android 10.0+</span>
              </li>
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>RAM:</span>
                <span className="text-white">4GB (6GB+)</span>
              </li>
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>Procesador:</span>
                <span className="text-white">Snapdragon 720G+</span>
              </li>
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>{t.storage}:</span>
                <span className="text-white">3GB</span>
              </li>
            </ul>
          </div>

          {/* iOS */}
          <div className="bg-black p-8 rounded-2xl border border-zinc-800 hover:border-gray-200 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gray-500/10 p-4 rounded-full">
                <Apple className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">{t.ios}</h3>
            </div>
            <ul className="space-y-4 text-gray-400">
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>{t.os}:</span>
                <span className="text-white">iOS 14.0+</span>
              </li>
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>{t.device}:</span>
                <span className="text-white">iPhone XR+</span>
              </li>
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>Procesador:</span>
                <span className="text-white">A12 Bionic+</span>
              </li>
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>{t.storage}:</span>
                <span className="text-white">3GB</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Requirements;
