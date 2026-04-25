import { useEffect, useState } from "react";
import { Crown, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useLocation, useNavigate } from "react-router-dom";
import theraponImg from "@/assets/therapon.png";

const STORAGE_KEY = "cheers_wedding_announcement_seen";

const WeddingAnnouncement = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let triggered = false;
    const trigger = () => {
      if (triggered) return;
      triggered = true;
      sessionStorage.setItem(STORAGE_KEY, "1");
      // small delay so the entrance feels intentional
      setTimeout(() => setOpen(true), 250);
      cleanup();
    };

    const events: (keyof WindowEventMap)[] = [
      "scroll",
      "wheel",
      "touchstart",
      "pointerdown",
      "mousedown",
      "keydown",
    ];
    const opts: AddEventListenerOptions = { passive: true, once: false };
    events.forEach((e) => window.addEventListener(e, trigger, opts));

    const cleanup = () => {
      events.forEach((e) => window.removeEventListener(e, trigger));
    };
    return cleanup;
  }, [location.pathname]);

  const handleCheckItOut = () => {
    setOpen(false);
    const scrollToSection = (attempts = 0) => {
      const el = document.getElementById("wedding-service");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attempts < 20) {
        setTimeout(() => scrollToSection(attempts + 1), 100);
      }
    };
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(), 300);
    } else {
      setTimeout(() => scrollToSection(), 200);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-black border-2 border-gold/60 text-primary-foreground sm:max-w-md shadow-2xl shadow-gold/40 overflow-hidden">
        {/* Decorative shimmer */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gold rounded-full blur-[120px]"
            style={{ animation: "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite" }}
          />
        </div>
        <div className="absolute top-3 left-3 pointer-events-none">
          <Sparkles className="w-4 h-4 text-gold animate-pulse" />
        </div>
        <div className="absolute bottom-3 right-3 pointer-events-none">
          <Sparkles className="w-4 h-4 text-gold animate-pulse" style={{ animationDelay: "0.6s" }} />
        </div>

        <DialogHeader className="relative z-10">
          <div className="flex justify-center mb-3">
            <div className="relative">
              <img
                src={theraponImg}
                alt="Therapon Constantinou"
                className="w-24 h-24 rounded-full object-cover border-2 border-gold shadow-lg shadow-gold/40"
              />
              <div className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-gold flex items-center justify-center shadow-lg">
                <Crown className="w-5 h-5 text-black" />
              </div>
            </div>
          </div>
          <div className="text-center">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gold">
              New • Exclusive
            </span>
          </div>
          <DialogTitle className="text-center text-2xl font-sans">
            <span className="font-script text-gold text-3xl block mb-1">Premium</span>
            <span className="text-primary-foreground">Wedding Barber Service</span>
          </DialogTitle>
          <DialogDescription className="text-center text-primary-foreground/75 font-light italic pt-2">
            Crafted exclusively by{" "}
            <span className="text-gold not-italic font-medium">Therapon</span>, our Owner & Master
            Barber — a once-in-a-lifetime grooming experience for your most important day.
          </DialogDescription>
        </DialogHeader>

        <div className="relative z-10 pt-2">
          <Button
            variant="hero"
            size="lg"
            className="w-full text-base group"
            onClick={handleCheckItOut}
          >
            Check It Out
            <ChevronDown className="w-5 h-5 ml-1 group-hover:translate-y-1 transition-transform animate-bounce" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WeddingAnnouncement;
