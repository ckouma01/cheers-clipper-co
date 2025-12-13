import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import christmasSchedule from "@/assets/christmas-schedule.jpg";
import ChallengeModal from "@/components/ChallengeModal";

const ChristmasModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showChallengeModal, setShowChallengeModal] = useState(false);

  useEffect(() => {
    // Check if user has already seen the modal this session
    const hasSeenModal = sessionStorage.getItem("christmasModalSeen");
    if (!hasSeenModal) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      // If Christmas modal was seen, check if challenge modal should show
      const hasSeenChallengeModal = sessionStorage.getItem("challengeModalSeen");
      if (!hasSeenChallengeModal) {
        const timer = setTimeout(() => {
          setShowChallengeModal(true);
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("christmasModalSeen", "true");
    // Show challenge modal after Christmas modal closes
    setTimeout(() => {
      setShowChallengeModal(true);
    }, 300);
  };

  const handleChallengeClose = () => {
    setShowChallengeModal(false);
  };

  return (
    <>
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

      <ChallengeModal 
        isOpen={showChallengeModal} 
        onClose={handleChallengeClose} 
      />
    </>
  );
};

export default ChristmasModal;
