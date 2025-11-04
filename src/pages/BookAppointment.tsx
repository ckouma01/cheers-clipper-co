import { useState } from "react";
import { Calendar, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import theraponImg from "@/assets/therapon.png";
import panagiotisImg from "@/assets/panagiotis.png";

const BookAppointment = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedBarber, setSelectedBarber] = useState("");

  const bookingUrl = "https://therapis27.setmore.com/burn?fbclid=PAZXh0bgNhZW0CMTEAAad6YEREHL9RJqVvUWnHT0If9n7sP1c0-6Duaip9wNJaG8T9ovCfAPFp6JgIDw_aem_mJwRNE8YOzZLeB3FvWobyQ";

  const handleBooking = (barberName: string) => {
    setSelectedBarber(barberName);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <div className="py-16 text-center bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Scissors className="w-10 h-10 text-accent animate-pulse" />
            <Calendar className="w-10 h-10 text-accent animate-pulse" style={{ animationDelay: '0.3s' }} />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-4 animate-fade-in">
            Book Your Cut
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Choose your master barber and schedule your appointment
          </p>
        </div>
      </div>

      {/* Split Barber Selection */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Therapon Section */}
          <div 
            className="group relative overflow-hidden rounded-2xl border-4 border-border hover:border-accent transition-all duration-500 cursor-pointer bg-gradient-to-br from-secondary/50 to-background animate-fade-in"
            onClick={() => handleBooking("Therapon")}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src={theraponImg} 
                alt="Therapon Constantinou - Master Barber" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  Therapon
                </h2>
                <p className="text-lg text-muted-foreground font-semibold tracking-wide">
                  MASTER BARBER
                </p>
              </div>
              
              <Button 
                variant="hero" 
                size="lg"
                className="w-full max-w-xs mx-auto text-lg py-6 button-glow group-hover:scale-105 transition-transform duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  handleBooking("Therapon");
                }}
              >
                Book with Therapon
              </Button>
            </div>

            {/* Corner Accent */}
            <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Panagiotis Section */}
          <div 
            className="group relative overflow-hidden rounded-2xl border-4 border-border hover:border-accent transition-all duration-500 cursor-pointer bg-gradient-to-br from-secondary/50 to-background animate-fade-in"
            onClick={() => handleBooking("Panagiotis")}
            style={{ animationDelay: '0.5s' }}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src={panagiotisImg} 
                alt="Panagiotis Charalambous - Master Barber" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  Panagiotis
                </h2>
                <p className="text-lg text-muted-foreground font-semibold tracking-wide">
                  MASTER BARBER
                </p>
              </div>
              
              <Button 
                variant="hero" 
                size="lg"
                className="w-full max-w-xs mx-auto text-lg py-6 button-glow group-hover:scale-105 transition-transform duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  handleBooking("Panagiotis");
                }}
              >
                Book with Panagiotis
              </Button>
            </div>

            {/* Corner Accent */}
            <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 text-center max-w-3xl mx-auto space-y-4 p-8 rounded-xl bg-secondary/20 border-2 border-border animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <h3 className="text-2xl font-bold text-foreground">Walk-ins Welcome!</h3>
          <p className="text-muted-foreground text-lg">
            No appointment? No problem! While booking guarantees your spot, we're always happy to serve walk-in clients whenever possible.
          </p>
        </div>
      </div>

      {/* Booking Dialog */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="max-w-4xl h-[85vh] p-0 flex flex-col">
          <DialogHeader className="px-6 pt-6 pb-2 shrink-0">
            <DialogTitle>Book Appointment with {selectedBarber}</DialogTitle>
            <DialogDescription className="sr-only">
              Schedule your appointment with {selectedBarber}
            </DialogDescription>
          </DialogHeader>
          <div className="flex-1 px-6 pb-6 min-h-0">
            <iframe
              src={bookingUrl}
              className="w-full h-full border-0 rounded"
              title={`Book with ${selectedBarber}`}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookAppointment;
