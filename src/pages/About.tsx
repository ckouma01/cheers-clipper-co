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
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl font-bold text-foreground">Meet Our Team</h1>
            <div className="w-24 h-1 bg-accent mx-auto" />
            <p className="text-xl text-muted-foreground">
              Expert barbers dedicated to making you look and feel your best
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Therapon */}
            <Card className="border-2 hover:border-accent transition-all overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={theraponImg} 
                    alt="Therapon Constantinou - Master Barber" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4 text-center">
                  <h3 className="text-2xl font-bold text-foreground">Therapon Constantinou</h3>
                  <p className="text-muted-foreground">Master Barber</p>
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
            <Card className="border-2 hover:border-accent transition-all overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={panagiotisImg} 
                    alt="Panagiotis Charalambous - Master Barber" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4 text-center">
                  <h3 className="text-2xl font-bold text-foreground">Panagiotis Charalambous</h3>
                  <p className="text-muted-foreground">Master Barber</p>
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
