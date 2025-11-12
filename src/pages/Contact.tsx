import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const mailtoLink = `mailto:therapis1995@icloud.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening Email Client",
      description: "Your message will be sent via your email client.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "Panagiotis: 99246036 | Therapon: 96557340",
      link: "tel:99246036",
    },
    {
      icon: Mail,
      title: "Email",
      content: "therapis1995@icloud.com",
      link: "mailto:therapis1995@icloud.com",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Αρχιεπισκόπου Μακαρίου Γ΄ 103",
      link: "https://maps.google.com",
    },
  ];

  const hours = [
    { day: "Monday - Wednesday, Friday", time: "9:00 AM - 7:00 PM" },
    { day: "Thursday", time: "9:00 AM - 2:00 PM" },
    { day: "Saturday", time: "9:00 AM - 2:00 PM" },
    { day: "Sunday", time: "CLOSED" },
  ];

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-serif font-bold text-foreground">Contact <span className="text-gold">Us</span></h1>
          <div className="w-24 h-1 bg-gold mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Have questions or want to get in touch? We'd love to hear from you!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border-2 hover:border-gold/50 transition-all">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Name *</Label>
                  <Input
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email *</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message *</Label>
                  <Textarea
                    id="contact-message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help you?"
                    rows={6}
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="border-2 hover:border-gold/50 transition-all">
              <CardContent className="pt-6 space-y-6">
                <h2 className="text-2xl font-serif font-bold text-foreground">Get In Touch</h2>
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="border-2 bg-muted/30 hover:border-gold/50 transition-all">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-6 h-6 text-gold" />
                  <h2 className="text-2xl font-serif font-bold text-foreground">Hours of Operation</h2>
                </div>
                {hours.map((schedule) => (
                  <div key={schedule.day} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="font-semibold text-foreground">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.time}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Map Location */}
            <Card className="border-2 hover:border-gold/50 transition-all">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Find Us</h2>
                <div className="w-full h-[400px] rounded-lg overflow-hidden">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1004.0543489844458!2d33.38439852314166!3d35.10737252792991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de191070b5d3a1%3A0x89b149005d66f662!2sCHEERS%20BARBERSHOP!5e1!3m2!1sel!2s!4v1762971432941!5m2!1sel!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
