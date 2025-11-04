import { Award, Heart, Scissors } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import logo from "@/assets/cheers-logo.png";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <img 
              src={logo} 
              alt="Cheers Barbershop" 
              className="h-32 w-32 mx-auto object-contain"
            />
            <h1 className="text-5xl font-bold text-foreground">About Cheers Barbershop</h1>
            <div className="w-24 h-1 bg-accent mx-auto" />
            <p className="text-xl text-muted-foreground">
              Established in 2019, bringing classic barbering traditions to the modern gentleman
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
              <div className="w-16 h-1 bg-accent" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cheers Barbershop was born from a simple idea: create a space where men can relax, 
                enjoy a quality grooming experience, and leave looking their absolute best. Since opening 
                our doors in 2019, we've been dedicated to preserving the timeless art of barbering while 
                incorporating modern techniques and styles.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our name reflects our philosophy – every visit should be a celebration. Whether you're 
                here for a quick trim or a full grooming session, we want you to feel welcome, valued, 
                and ready to take on the world when you walk out our door.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-accent transition-all">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Excellence</h3>
                <p className="text-muted-foreground">
                  We're committed to delivering the highest quality service, using premium products 
                  and time-tested techniques perfected by our skilled barbers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Community</h3>
                <p className="text-muted-foreground">
                  More than just a barbershop, we're a gathering place where friendships form and 
                  stories are shared over a complimentary beverage.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center">
                  <Scissors className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Tradition</h3>
                <p className="text-muted-foreground">
                  We honor the classic barbershop experience while embracing contemporary styles, 
                  ensuring every client gets exactly what they're looking for.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-foreground">Our Expert Team</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
            <p className="text-lg text-muted-foreground">
              Our barbers are more than just skilled professionals – they're artists who take pride in 
              their craft. Each member of our team brings years of experience and a passion for making 
              every client look and feel their best.
            </p>
            <p className="text-lg text-muted-foreground">
              We continually invest in training and education to stay current with the latest styles 
              and techniques, ensuring you always receive cutting-edge service rooted in traditional expertise.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
