const BookAppointment = () => {
  const bookingUrl = "https://therapis27.setmore.com/burn?fbclid=PAZXh0bgNhZW0CMTEAAad6YEREHL9RJqVvUWnHT0If9n7sP1c0-6Duaip9wNJaG8T9ovCfAPFp6JgIDw_aem_mJwRNE8YOzZLeB3FvWobyQ";

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Book Your Appointment
            </h1>
            <p className="text-muted-foreground text-lg">
              Select your preferred barber and time
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
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
