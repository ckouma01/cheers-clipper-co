import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import theraponImg from "@/assets/therapon.png";
import panagiotisImg from "@/assets/panagiotis.png";

const About = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedBarber, setSelectedBarber] = useState("");

  const bookingUrl = "https://therapis27.setmore.com/burn?fbclid=PAZXh0bgNhZW0CMTEAAad6YEREHL9RJqVvUWnHT0If9n7sP1c0-6Duaip9wNJaG8T9ovCfAPFp6JgIDw_aem_mJwRNE8YOzZLeB3FvWobyQ";

  const handleBooking = (barberName: string) => {
    setSelectedBarber(barberName);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-secondary to-black opacity-95" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold rounded-full blur-[100px]" style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl font-serif font-bold text-primary-foreground">Meet Our <span className="text-gold">Team</span></h1>
            <div className="w-24 h-1 bg-gold mx-auto" />
            <p className="text-xl text-primary-foreground/90 font-light">
              Expert barbers dedicated to making you look and feel your best
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-secondary to-black opacity-95" />
        {/* Glowing Gold Effects */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold rounded-full blur-[120px]" style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
          <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold rounded-full blur-[120px]" style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite 2s' }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Therapon */}
            <Card className="border-2 hover:border-gold transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-gold/20 bg-card">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={theraponImg} 
                    alt="Therapon Constantinou - Master Barber" 
                    className="w-full h-full object-cover image-zoom"
                  />
                </div>
                <div className="p-6 space-y-4 text-center">
                  <h3 className="text-2xl font-serif font-bold text-foreground">Therapon Constantinou</h3>
                  <p className="text-muted-foreground font-light">Master Barber</p>
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    onClick={() => handleBooking("Therapon")}
                  >
                    Book with Therapon
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Panagiotis */}
            <Card className="border-2 hover:border-gold transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-gold/20 bg-card">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={panagiotisImg} 
                    alt="Panagiotis Charalambous - Master Barber" 
                    className="w-full h-full object-cover image-zoom"
                  />
                </div>
                <div className="p-6 space-y-4 text-center">
                  <h3 className="text-2xl font-serif font-bold text-foreground">Panagiotis Charalambous</h3>
                  <p className="text-muted-foreground font-light">Master Barber</p>
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    onClick={() => handleBooking("Panagiotis")}
                  >
                    Book with Panagiotis
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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

export default About;
