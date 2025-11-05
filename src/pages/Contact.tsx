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
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(555) 123-4567",
      link: "tel:5551234567",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@cheersbarbershop.com",
      link: "mailto:info@cheersbarbershop.com",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "123 Main Street, Downtown, NY 10001",
      link: "https://maps.google.com",
    },
  ];

  const hours = [
    { day: "Monday - Friday", time: "9:00 AM - 8:00 PM" },
    { day: "Saturday", time: "9:00 AM - 6:00 PM" },
    { day: "Sunday", time: "10:00 AM - 5:00 PM" },
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
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d251.01282686079247!2d33.384908151594146!3d35.10761941593175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sel!2s!4v1762277123338!5m2!1sel!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Cheers Barbershop Location"
                  />
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
