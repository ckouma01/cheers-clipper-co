const BookAppointment = () => {
  const bookingUrl = "https://therapis27.setmore.com/";

  return (
    <div className="min-h-screen bg-primary relative overflow-hidden py-8">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-secondary to-black opacity-95" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
              Book Your <span className="text-gold">Appointment</span>
            </h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-4" />
            <p className="text-primary-foreground/80 text-lg font-light">
              Select your preferred barber and time
            </p>
          </div>
          
          <div className="bg-card border-2 border-gold/30 rounded-lg overflow-hidden shadow-lg hover:border-gold/50 transition-all">
            <iframe
              src={bookingUrl}
              className="w-full h-[800px] border-0"
              title="Book Appointment"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;