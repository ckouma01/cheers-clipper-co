import { useEffect } from "react";

interface CheersAnimationProps {
  show: boolean;
  onComplete: () => void;
}

const CheersAnimation = ({ show, onComplete }: CheersAnimationProps) => {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(onComplete, 2200);
    return () => clearTimeout(timer);
  }, [show, onComplete]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in pointer-events-none">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold rounded-full blur-[120px] animate-pulse" />
      </div>
      <div className="relative text-center space-y-4 px-6 animate-scale-in">
        <h1 className="font-script text-gold text-6xl md:text-9xl drop-shadow-[0_0_30px_rgba(212,175,55,0.8)]">
          Cheers Brother!
        </h1>
        <div className="text-7xl md:text-9xl animate-pulse">🍻</div>
      </div>
    </div>
  );
};

export default CheersAnimation;
