import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/cheers-logo-new.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "OUR TEAM", path: "/about" },
    { name: "BOOK APPOINTMENT", path: "/book" },
    { name: "CONTACT US", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/98 backdrop-blur-md border-b border-gold/20 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Cheers Barbershop" className="h-16 w-auto object-contain group-hover:scale-105 transition-transform" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-semibold tracking-wide transition-all duration-300 hover:text-gold hover:scale-105 ${
                  isActive(item.path) ? "text-gold" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/cheers_barbershop/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-gold transition-all duration-300 hover:scale-110"
              aria-label="Visit our Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-gold transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gold/20">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-semibold tracking-wide transition-all duration-300 hover:text-gold hover:translate-x-2 ${
                    isActive(item.path) ? "text-gold" : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://www.instagram.com/cheers_barbershop/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold tracking-wide transition-all duration-300 hover:text-gold hover:translate-x-2 text-foreground flex items-center gap-2"
              >
                <Instagram size={20} />
                INSTAGRAM
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
