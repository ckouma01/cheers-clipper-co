import { Link } from "react-router-dom";
import { Scissors, Clock, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import logo from "@/assets/cheers-logo-new.png";

const Home = () => {
  const services = [
    {
      title: "Classic Haircut",
      description: "Traditional cuts styled to perfection with precision and care",
      price: "$35",
      icon: Scissors,
    },
    {
      title: "Hot Towel Shave",
      description: "Relaxing straight razor shave with premium products",
      price: "$40",
      icon: Award,
    },
    {
      title: "Beard Trim & Shape",
      description: "Expert beard grooming to maintain your style",
      price: "$25",
      icon: Users,
    },
    {
      title: "Full Service",
      description: "Complete grooming experience: cut, shave, and style",
      price: "$65",
      icon: Clock,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-secondary to-black opacity-95" />
        
        {/* Logo Background Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <img 
            src={logo} 
            alt="" 
            className="w-full max-w-4xl h-auto object-contain"
          />
        </div>
        
        {/* Glowing Gold Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold rounded-full blur-[120px]" style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
        </div>
        
        {/* Decorative gold lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <img 
              src={logo} 
              alt="Cheers Barbershop" 
              className="h-48 w-auto mx-auto object-contain drop-shadow-2xl"
            />
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight">
              Welcome to <span className="font-script text-gold text-6xl md:text-7xl">Cheers</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto font-light">
              Where tradition meets style. Experience the art of classic grooming since 2019.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/book">
                <Button variant="hero" size="lg" className="w-full sm:w-auto text-lg">
                  Book Your Appointment
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="vintage" size="lg" className="w-full sm:w-auto text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4 text-foreground">Our Services</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Premium grooming services tailored to your style. Every service includes a complimentary beverage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service) => (
              <Card key={service.title} className="border-2 hover:border-gold transition-all hover:shadow-2xl hover:shadow-gold/20 bg-card">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-black rounded-full flex items-center justify-center border-2 border-gold/30">
                    <service.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                  <p className="text-2xl font-bold text-gold">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/book">
              <Button variant="hero" size="lg">
                Schedule Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-center mb-12 text-foreground">
              Why Choose <span className="text-gold">Cheers</span>?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-gold rounded-full mx-auto flex items-center justify-center">
                  <Award className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Expert Barbers</h3>
                <p className="text-muted-foreground font-light">
                  Skilled professionals with years of experience in classic and modern styles
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-gold rounded-full mx-auto flex items-center justify-center">
                  <Clock className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Convenient Hours</h3>
                <p className="text-muted-foreground font-light">
                  Open 7 days a week with flexible appointment times to fit your schedule
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-gold rounded-full mx-auto flex items-center justify-center">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Relaxed Atmosphere</h3>
                <p className="text-muted-foreground font-light">
                  Enjoy complimentary drinks in a comfortable, welcoming environment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-secondary to-black opacity-95" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-serif font-bold mb-6">Ready for a <span className="text-gold">Fresh Look</span>?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90 font-light">
            Book your appointment today and experience the Cheers difference
          </p>
          <Link to="/book">
            <Button variant="hero" size="lg" className="text-lg">
              Book Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
