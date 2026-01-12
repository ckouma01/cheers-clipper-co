import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import kwstasImg from "@/assets/kwstas.jpg";
import confetti from "canvas-confetti";
import { useEffect } from "react";

interface WelcomeKwstasModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WelcomeKwstasModal = ({ isOpen, onClose }: WelcomeKwstasModalProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      // Trigger confetti when modal opens
      const isMobile = window.innerWidth < 768;
      confetti({
        particleCount: isMobile ? 50 : 100,
        spread: isMobile ? 50 : 70,
        origin: { y: 0.6 },
        colors: ['#DAA520', '#FFD700', '#FFA500', '#FFFFFF', '#000000']
      });
    }
  }, [isOpen]);

  const handleBookWithKwstas = () => {
    onClose();
    sessionStorage.setItem("welcomeKwstasModalSeen", "true");
    navigate("/about?scrollTo=kwstas");
  };

  const handleClose = () => {
    onClose();
    sessionStorage.setItem("welcomeKwstasModalSeen", "true");
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-[90vw] md:max-w-md p-0 overflow-hidden border-2 border-gold/50 bg-card max-h-[90vh] flex flex-col">
        <DialogHeader className="p-4 md:p-6 pb-0 flex-shrink-0">
          <DialogTitle className="text-center text-xl md:text-2xl font-serif text-gold flex items-center justify-center gap-2">
            🎉 New Team Member! 🎉
          </DialogTitle>
        </DialogHeader>
        <div className="p-4 md:p-6 pt-3 space-y-4 overflow-y-auto flex-1">
          {/* Kwstas Image */}
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-gold shadow-lg shadow-gold/30">
            <img
              src={kwstasImg}
              alt="Kwstas Liakos"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Welcome Message */}
          <div className="text-center space-y-3">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              Kwstas Liakos
            </h3>
            <p className="text-gold font-medium">Master Barber</p>
            <p className="text-foreground/90 text-base md:text-lg">
              We welcome <span className="text-gold font-semibold">Kwstas</span> to our Cheers team!
            </p>
            <p className="text-muted-foreground text-sm">
              Book an appointment with our newest master barber today.
            </p>
          </div>
        </div>
        
        {/* Button at bottom */}
        <div className="p-4 md:p-6 pt-0 flex-shrink-0 border-t border-border/50">
          <Button
            variant="hero"
            className="w-full"
            onClick={handleBookWithKwstas}
          >
            Book with Kwstas ✂️
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeKwstasModal;