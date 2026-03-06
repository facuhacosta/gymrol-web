import { useState } from 'react';
import { X } from 'lucide-react';

const StickyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-zinc-950 border-t border-electric-blue/30 p-2 shadow-2xl flex justify-center items-center">
      <div className="relative w-[320px] h-[100px] bg-zinc-900 flex items-center justify-center border border-zinc-800 rounded-lg overflow-hidden">
        <span className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest absolute top-1 right-2">Ad</span>
        <div className="flex items-center gap-3">
           <div className="w-12 h-12 bg-electric-green/20 rounded-full flex items-center justify-center">
              <span className="text-electric-green font-bold text-xl">H</span>
           </div>
           <div className="text-left">
              <p className="text-white font-bold text-sm">HeroHabit PRO</p>
              <p className="text-zinc-400 text-xs">Sube de nivel 1.5x más rápido</p>
           </div>
        </div>
        
        {/* Close button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute -top-1 -right-1 bg-zinc-800 text-zinc-400 rounded-full p-1 shadow-md hover:text-white transition-colors"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};

export default StickyBanner;
