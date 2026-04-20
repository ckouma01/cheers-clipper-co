import { useEffect, useState } from "react";

const CHEERS_EVENT = "cheers:show";

export const triggerCheers = () => {
  window.dispatchEvent(new CustomEvent(CHEERS_EVENT));
};

const CheersAnimation = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => {
      setShow(true);
      setTimeout(() => setShow(false), 1500);
    };
    window.addEventListener(CHEERS_EVENT, handler);
    return () => window.removeEventListener(CHEERS_EVENT, handler);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in pointer-events-none">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold rounded-full blur-[120px] animate-pulse" />
      </div>
      <div className="relative text-center space-y-4 px-6">
        <h1 className="font-script text-gold text-6xl md:text-9xl drop-shadow-[0_0_30px_rgba(212,175,55,0.8)]">
          <span className="handwrite-text">Cheers Brother!</span>
        </h1>
        <div className="text-7xl md:text-9xl animate-pulse">🍻</div>
      </div>
    </div>
  );
};

export default CheersAnimation;
