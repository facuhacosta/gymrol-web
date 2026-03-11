import { useState } from 'react';
import { X } from 'lucide-react';
import { Adsense } from '@ctrl/react-adsense';

const StickyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-zinc-950 border-t border-electric-blue/30 p-2 shadow-2xl flex justify-center items-center">
      <div className="relative w-[320px] h-[100px] bg-zinc-900 flex items-center justify-center border border-zinc-800 rounded-lg overflow-hidden">
        <Adsense
          className='w-[320px] h-[100px] display-block'
          client="ca-pub-2921918201348815"
          slot="6232669450"
          adTest={import.meta.env.VITE_ENV === 'development' ? 'on' : 'off'} //Dev Only
        />
        
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
