import { Link } from "react-router-dom";
import { Scissors, Clock, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Gallery from "@/components/Gallery";
import logo from "@/assets/christmas-logo.png";
import heroLogo from "@/assets/hero-logo.png";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Home = () => {
  const servicesSection = useScrollAnimation();
  const whyChooseSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  const services = [
    {
      title: "Haircut & Beard Grooming",
      description: "Hair washing included",
      price: "15€",
      icon: Scissors,
    },
    {
      title: "Hot Towel Shave",
      description: "Hair washing included",
      price: "15€",
      icon: Award,
    },
    {
      title: "Haircut & Hot Towel Shave",
      description: "Hair washing included",
      price: "25€",
      icon: Users,
    },
    {
      title: "Beard Trim",
      description: "Hair washing included",
      price: "5€",
      icon: Clock,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-secondary to-black opacity-95" />
        
        {/* Logo Background Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <img 
            src={heroLogo} 
            alt="" 
            className="w-full h-full object-cover"
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
              className="h-48 md:h-80 w-auto mx-auto object-contain drop-shadow-2xl"
            />
            
            {/* Google 5-Star Rating */}
            <a 
              href="https://www.google.com/search?q=cheers+barbershop" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-5 h-5 text-gold fill-gold animate-starShine" 
                    style={{ animationDelay: `${0.8 + i * 0.2}s` }}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium text-primary-foreground/90 group-hover:text-gold transition-colors">
                5.0 on Google
              </span>
              <svg className="w-4 h-4 text-primary-foreground/70 group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </a>
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight">
              Welcome to <span className="font-script text-gold text-6xl md:text-7xl inline-block animate-revealText opacity-0">Cheers</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto font-light">
              Where tradition meets style. Experience the art of classic and modern grooming since 2019.
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
      <section ref={servicesSection.ref} className={`py-20 bg-background transition-all duration-[4500ms] ${servicesSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4 text-foreground">Our Services</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Premium grooming services tailored to your style. All services include hair washing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={service.title} className={`border-2 hover:border-gold transition-all hover:shadow-2xl hover:shadow-gold/20 bg-card ${servicesSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 200}ms`, transitionDuration: '4000ms' }}>
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
      <section ref={whyChooseSection.ref} className={`py-20 bg-secondary/30 transition-all duration-[4500ms] ${whyChooseSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-center mb-12 text-foreground">
              Why Choose <span className="text-gold">Cheers</span>?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className={`text-center space-y-3 transition-all duration-[4000ms] ${whyChooseSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
                <div className="w-12 h-12 bg-gold rounded-full mx-auto flex items-center justify-center">
                  <Award className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Expert Barbers</h3>
                <p className="text-muted-foreground font-light">
                  Skilled professionals with years of experience in classic and modern styles
                </p>
              </div>
              <div className={`text-center space-y-3 transition-all duration-[4000ms] ${whyChooseSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
                <div className="w-12 h-12 bg-gold rounded-full mx-auto flex items-center justify-center">
                  <Clock className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Convenient Hours</h3>
                <p className="text-muted-foreground font-light">
                  Open 6 days a week with flexible appointment times to fit your schedule
                </p>
              </div>
              <div className={`text-center space-y-3 transition-all duration-[4000ms] ${whyChooseSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '900ms' }}>
                <div className="w-12 h-12 bg-gold rounded-full mx-auto flex items-center justify-center">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Relaxed Atmosphere</h3>
                <p className="text-muted-foreground font-light">
                  Unwind in a comfortable, welcoming environment designed for your relaxation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* CTA Section */}
      <section ref={ctaSection.ref} className={`py-20 bg-primary text-primary-foreground relative overflow-hidden transition-all duration-[4500ms] ${ctaSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
