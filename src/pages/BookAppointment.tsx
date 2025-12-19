import ChallengeModal from "@/components/ChallengeModal";
import { useChallengeModal } from "@/hooks/use-challenge-modal";

const BookAppointment = () => {
  const bookingUrl = "https://therapis27.setmore.com/";
  const { showChallengeModal, handleChallengeClose } = useChallengeModal();

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Book Your <span className="text-gold">Appointment</span>
            </h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-4" />
            <p className="text-muted-foreground text-lg font-light">
              Select your preferred barber and time
            </p>
          </div>
          
          <div className="bg-card border-2 border-border rounded-lg overflow-hidden shadow-lg hover:border-gold/50 transition-all">
            <iframe
              src={bookingUrl}
              className="w-full h-[800px] border-0"
              title="Book Appointment"
            />
          </div>
        </div>
      </div>

      <ChallengeModal 
        isOpen={showChallengeModal} 
        onClose={handleChallengeClose} 
      />
    </div>
  );
};

export default BookAppointment;
