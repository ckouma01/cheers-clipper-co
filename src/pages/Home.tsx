import { Link } from "react-router-dom";
import { Scissors, Clock, Award, Users, Sparkles, Droplet, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import logo from "@/assets/cheers-logo.png";

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
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/20 opacity-90" />
        
        {/* Floating Icons */}
        <div className="absolute inset-0 z-0 opacity-10">
          <Scissors className="absolute top-[15%] left-[10%] w-12 h-12 animate-[float_6s_ease-in-out_infinite]" />
          <Scissors className="absolute top-[70%] right-[15%] w-16 h-16 animate-[float_8s_ease-in-out_infinite_1s] rotate-45" />
          <Sparkles className="absolute top-[25%] right-[20%] w-10 h-10 animate-[float_7s_ease-in-out_infinite_2s]" />
          <Sparkles className="absolute bottom-[20%] left-[15%] w-8 h-8 animate-[float_5s_ease-in-out_infinite_1.5s]" />
          <Droplet className="absolute top-[40%] left-[8%] w-10 h-10 animate-[float_6.5s_ease-in-out_infinite_0.5s]" />
          <Droplet className="absolute bottom-[30%] right-[12%] w-12 h-12 animate-[float_7.5s_ease-in-out_infinite_2.5s]" />
          <Star className="absolute top-[60%] left-[20%] w-8 h-8 animate-[float_5.5s_ease-in-out_infinite_1s]" />
          <Star className="absolute top-[20%] left-[25%] w-10 h-10 animate-[float_6.8s_ease-in-out_infinite_3s]" />
          <Zap className="absolute bottom-[40%] right-[8%] w-10 h-10 animate-[float_6.2s_ease-in-out_infinite_0.8s]" />
          <Award className="absolute top-[50%] right-[25%] w-12 h-12 animate-[float_7.2s_ease-in-out_infinite_2.2s]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <img 
              src={logo} 
              alt="Cheers Barbershop" 
              className="h-40 w-40 mx-auto object-contain drop-shadow-2xl"
            />
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Welcome to Cheers Barbershop
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
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
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Services</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium grooming services tailored to your style. Every service includes a complimentary beverage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service) => (
              <Card key={service.title} className="border-2 hover:border-accent transition-all hover:shadow-lg">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                  <p className="text-2xl font-bold text-accent">{service.price}</p>
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
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
              Why Choose Cheers?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-accent rounded-full mx-auto flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Expert Barbers</h3>
                <p className="text-muted-foreground">
                  Skilled professionals with years of experience in classic and modern styles
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-accent rounded-full mx-auto flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Convenient Hours</h3>
                <p className="text-muted-foreground">
                  Open 7 days a week with flexible appointment times to fit your schedule
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-accent rounded-full mx-auto flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Relaxed Atmosphere</h3>
                <p className="text-muted-foreground">
                  Enjoy complimentary drinks in a comfortable, welcoming environment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for a Fresh Look?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
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
