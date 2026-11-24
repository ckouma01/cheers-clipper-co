import { useEffect, useId, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { triggerCheers } from "@/components/CheersAnimation";
import logo from "@/assets/christmas-logo.png";
import ChristmasLights from "./ChristmasLights";

// Instagram mark in its real brand gradient (lucide's icon is single-colour)
const InstagramGlyph = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
  const gid = useId().replace(/[:]/g, "");
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id={gid} cx="0.3" cy="1.07" r="1.28">
          <stop offset="0%" stopColor="#FDF497" />
          <stop offset="5%" stopColor="#FDF497" />
          <stop offset="45%" stopColor="#FD5949" />
          <stop offset="60%" stopColor="#D6249F" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="1.5" y="1.5" width="21" height="21" rx="6.2" fill={`url(#${gid})`} />
      <rect x="6" y="6" width="12" height="12" rx="3.6" fill="none" stroke="#FFFFFF" strokeWidth="1.9" />
      <circle cx="12" cy="12" r="3.1" fill="none" stroke="#FFFFFF" strokeWidth="1.9" />
      <circle cx="16.5" cy="7.5" r="1.15" fill="#FFFFFF" />
    </svg>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [privateActive, setPrivateActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "OUR TEAM", path: "/about" },
    { name: "BOOK APPOINTMENT", path: "/book" },
    { name: "WEDDING SERVICE", path: "/#wedding-service" },
    { name: "PRIVATE HAIRCUT", path: "/#home-service" },
    { name: "CONTACT US", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/#home-service") return privateActive;
    return location.pathname === path;
  };

  // Track when the private haircut section is in view to mark navbar item active
  useEffect(() => {
    if (location.pathname !== "/") {
      setPrivateActive(false);
      return;
    }
    const el = document.getElementById("home-service");
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setPrivateActive(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    if (path === "/book") {
      e.preventDefault();
      triggerCheers();
      setIsOpen(false);
      setTimeout(() => navigate(path), 1500);
      return;
    }
    if (path === "/#wedding-service" || path === "/#home-service") {
      e.preventDefault();
      setIsOpen(false);
      const id = path.replace("/#", "");
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToSection(id), 350);
      } else {
        scrollToSection(id);
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-md border-b border-gold/20 shadow-lg relative">
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
                onClick={(e) => handleNavClick(e, item.path)}
                className={`text-sm font-semibold tracking-wide transition-all duration-300 hover:text-gold hover:scale-105 ${
                  isActive(item.path) ? "text-gold" : "text-primary-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/cheers_barbershop/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex transition-all duration-300 hover:scale-110 hover:brightness-110 drop-shadow-[0_2px_8px_rgba(214,36,159,0.45)]"
              aria-label="Visit our Instagram"
            >
              <InstagramGlyph size={26} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary-foreground hover:text-gold transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gold/20 animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-4 px-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={(e) => {
                    handleNavClick(e, item.path);
                    if (item.path !== "/book" && item.path !== "/#wedding-service" && item.path !== "/#home-service") setIsOpen(false);
                  }}
                  className={`inline-flex items-center gap-2 text-sm font-semibold tracking-wide transition-all duration-300 hover:text-gold hover:translate-x-2 ${
                    isActive(item.path) ? "text-gold" : "text-primary-foreground"
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
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide transition-all duration-300 hover:translate-x-2 text-primary-foreground"
              >
                <InstagramGlyph size={22} className="drop-shadow-[0_2px_8px_rgba(214,36,159,0.45)]" />
                INSTAGRAM
              </a>
            </div>
          </div>
        )}
      </div>
      <ChristmasLights />
    </nav>
  );
};

export default Navigation;
