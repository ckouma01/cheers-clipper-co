import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/cheers-logo-new.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-secondary to-black opacity-95" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-[120px]" />
      </div>
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Cheers Barbershop" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-sm text-primary-foreground/80 font-light">
              Where tradition meets style since 2019. Experience the art of classic and modern grooming.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-gold transition-colors font-light">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-gold transition-colors font-light">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-sm hover:text-gold transition-colors font-light">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-gold transition-colors font-light">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-gold">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm font-light">
                <Phone className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                <div className="flex flex-col">
                  <span>Panagiotis: 99246036</span>
                  <span>Therapon: 96557340</span>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm font-light">
                <Mail className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                <span>therapis1995@icloud.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-light">
                <MapPin className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                <span>Αρχιεπισκόπου Μακαρίου Γ΄ 103, Λατσιά, Λευκωσία</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-gold flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Hours
            </h4>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <span className="font-semibold">Mon-Wed, Fri:</span> 9AM - 7PM
              </li>
              <li>
                <span className="font-semibold">Thursday:</span> 9AM - 2PM
              </li>
              <li>
                <span className="font-semibold">Saturday:</span> 9AM - 2PM
              </li>
              <li>
                <span className="font-semibold">Sunday:</span> CLOSED
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80 space-y-2 font-light">
          <p>&copy; {new Date().getFullYear()} Cheers Barbershop. All rights reserved.</p>
          <p>
            Made and designed by{" "}
            <a 
              href="https://koumasweb.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold hover:underline font-semibold"
            >
              KoumasWeb
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
