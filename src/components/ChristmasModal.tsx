import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import christmasSchedule from "@/assets/christmas-schedule.jpg";

const ChristmasModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
      }
    };

    // Listen for any user interaction
    window.addEventListener('click', handleInteraction);
    window.addEventListener('scroll', handleInteraction);
    window.addEventListener('keydown', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('mousemove', handleInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
    };
  }, [hasInteracted]);

  useEffect(() => {
    if (!hasInteracted) return;

    // Check if user has already seen the modal this session
    const hasSeenModal = sessionStorage.getItem("christmasModalSeen");
    if (!hasSeenModal) {
      // Small delay after interaction
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [hasInteracted]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("christmasModalSeen", "true");
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md md:max-w-lg p-0 overflow-hidden border-2 border-gold/50 bg-card">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="text-center text-2xl font-serif text-gold flex items-center justify-center gap-2">
            🎄 Christmas Holidays 🎄
          </DialogTitle>
        </DialogHeader>
        <div className="p-4 pt-2">
          <img
            src={christmasSchedule}
            alt="Christmas Holidays Schedule - December 2025 and January 2026"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <p className="text-center text-muted-foreground mt-4 text-sm">
            Please check our holiday hours before visiting!
          </p>
          <Button
            variant="hero"
            className="w-full mt-4"
            onClick={handleClose}
          >
            Got it!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChristmasModal;
