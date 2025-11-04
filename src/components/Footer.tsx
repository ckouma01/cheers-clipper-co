import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/cheers-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Cheers Barbershop" className="h-12 w-12 object-contain" />
              <div>
                <h3 className="text-lg font-bold">CHEERS</h3>
                <p className="text-xs text-primary-foreground/80">Barbershop</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Where tradition meets style since 2019. Experience the art of classic grooming.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-sm hover:text-accent transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-accent">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Phone className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span>info@cheersbarbershop.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span>123 Main Street, Downtown, NY 10001</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold mb-4 text-accent flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Hours
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-semibold">Mon-Fri:</span> 9AM - 8PM
              </li>
              <li>
                <span className="font-semibold">Saturday:</span> 9AM - 6PM
              </li>
              <li>
                <span className="font-semibold">Sunday:</span> 10AM - 5PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Cheers Barbershop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
