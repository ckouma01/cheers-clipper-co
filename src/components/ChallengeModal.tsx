import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import challengeVideo from "@/assets/challenge-video.mp4";
import confetti from "canvas-confetti";

interface ChallengeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChallengeModal = ({ isOpen, onClose }: ChallengeModalProps) => {
  const [displayTime, setDisplayTime] = useState(0);
  const [hasReached10, setHasReached10] = useState(false);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen && !hasReached10) {
      setDisplayTime(0);
      startTimeRef.current = null;
      
      const animate = (timestamp: number) => {
        if (!startTimeRef.current) {
          startTimeRef.current = timestamp;
        }
        
        const elapsed = timestamp - startTimeRef.current;
        // Speed up animation: reach 10 seconds in about 2.5 real seconds
        const simulatedTime = (elapsed / 250);
        
        if (simulatedTime >= 10) {
          setDisplayTime(10);
          setHasReached10(true);
          triggerConfetti();
        } else {
          setDisplayTime(simulatedTime);
          animationRef.current = requestAnimationFrame(animate);
        }
      };
      
      animationRef.current = requestAnimationFrame(animate);
      
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [isOpen, hasReached10]);

  const triggerConfetti = () => {
    const isMobile = window.innerWidth < 768;
    const duration = isMobile ? 1500 : 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: isMobile ? 2 : 7,
        angle: 60,
        spread: isMobile ? 40 : 55,
        origin: { x: 0, y: 0.7 },
        colors: ['#DAA520', '#FFD700', '#FFA500', '#FF4500', '#00FF00']
      });
      confetti({
        particleCount: isMobile ? 2 : 7,
        angle: 120,
        spread: isMobile ? 40 : 55,
        origin: { x: 1, y: 0.7 },
        colors: ['#DAA520', '#FFD700', '#FFA500', '#FF4500', '#00FF00']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    // Initial burst
    confetti({
      particleCount: isMobile ? 30 : 100,
      spread: isMobile ? 50 : 70,
      origin: { y: 0.6 },
      colors: ['#DAA520', '#FFD700', '#FFA500', '#FF4500', '#00FF00']
    });

    frame();
  };

  const handleClose = () => {
    setHasReached10(false);
    setDisplayTime(0);
    onClose();
    sessionStorage.setItem("challengeModalSeen", "true");
  };

  const formatTime = (time: number) => {
    const seconds = Math.floor(time);
    const hundredths = Math.floor((time - seconds) * 100);
    return `${seconds.toString().padStart(2, '0')}:${hundredths.toString().padStart(2, '0')}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-[90vw] md:max-w-lg p-0 overflow-hidden border-2 border-gold/50 bg-card max-h-[90vh] flex flex-col">
        <DialogHeader className="p-3 md:p-4 pb-0 flex-shrink-0">
          <DialogTitle className="text-center text-xl md:text-2xl font-serif text-gold flex items-center justify-center gap-2">
            🎯 NEW CHALLENGE! 🎯
          </DialogTitle>
        </DialogHeader>
        <div className="p-3 md:p-4 pt-2 space-y-3 md:space-y-4 overflow-y-auto flex-1">
          {/* Stopwatch Animation */}
          <div className="flex flex-col items-center justify-center py-2 md:py-4">
            <div className={`text-4xl md:text-6xl font-bold font-mono transition-all duration-200 text-red-500 ${
              hasReached10 ? 'animate-pulse scale-110' : ''
            }`}>
              {formatTime(displayTime)}
            </div>
            {hasReached10 && (
              <div className="mt-2 text-gold font-serif text-lg md:text-xl animate-bounce">
                🎉 FREE HAIRCUT! 🎉
              </div>
            )}
          </div>

          {/* Announcement Video */}
          <video
            src={challengeVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-lg shadow-lg max-h-[30vh] md:max-h-none object-cover"
          />
          
          {/* Challenge Description */}
          <div className="text-center space-y-1 md:space-y-2">
            <p className="text-foreground font-semibold text-base md:text-lg">
              🏆 Stop at exactly 10:00 = FREE Haircut!
            </p>
            <p className="text-muted-foreground text-xs md:text-sm">
              With every haircut, you get <span className="text-gold font-bold">1 entry</span> to play the challenge!
            </p>
            <p className="text-muted-foreground text-xs md:text-sm italic">
              Press the buzzer before you pay and try your luck!
            </p>
          </div>
        </div>
        
        {/* Fixed button at bottom */}
        <div className="p-3 md:p-4 pt-0 flex-shrink-0 border-t border-border/50">
          <Button
            variant="hero"
            className="w-full"
            onClick={handleClose}
          >
            I'm Ready to Play! 🎯
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChallengeModal;
