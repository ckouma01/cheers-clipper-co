import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { triggerCheers } from "@/components/CheersAnimation";
import logo from "@/assets/cheers-logo-new.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [weddingActive, setWeddingActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "OUR TEAM", path: "/about" },
    { name: "BOOK APPOINTMENT", path: "/book" },
    { name: "WEDDING SERVICE", path: "/#wedding-service" },
    { name: "CONTACT US", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/#wedding-service") return weddingActive;
    return location.pathname === path;
  };

  // Track when the wedding section is in view to mark navbar item active
  useEffect(() => {
    if (location.pathname !== "/") {
      setWeddingActive(false);
      return;
    }
    const el = document.getElementById("wedding-service");
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setWeddingActive(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [location.pathname]);

  const scrollToWedding = () => {
    const el = document.getElementById("wedding-service");
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
    if (path === "/#wedding-service") {
      e.preventDefault();
      setIsOpen(false);
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(scrollToWedding, 350);
      } else {
        scrollToWedding();
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-md border-b border-gold/20 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Cheers Barbershop" className="h-16 w-auto object-contain group-hover:scale-105 transition-transform" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const wedding = item.path === "/#wedding-service";
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`relative text-sm font-semibold tracking-wide transition-all duration-300 hover:text-gold hover:scale-105 ${
                    isActive(item.path) ? "text-gold" : "text-primary-foreground"
                  } ${wedding ? "animate-weddingShine" : ""}`}
                >
                  {item.name}
                  {wedding && (
                    <span className="absolute -top-2 -right-5 px-1.5 py-0.5 text-[8px] font-bold tracking-wider rounded-sm bg-[#FC7303] text-white shadow-md shadow-[#FC7303]/50 animate-pulse">
                      NEW!
                    </span>
                  )}
                </Link>
              );
            })}
            <a
              href="https://www.instagram.com/cheers_barbershop/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-gold transition-all duration-300 hover:scale-110"
              aria-label="Visit our Instagram"
            >
              <Instagram size={24} />
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
              {navItems.map((item) => {
                const wedding = item.path === "/#wedding-service";
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={(e) => {
                      handleNavClick(e, item.path);
                      if (item.path !== "/book" && item.path !== "/#wedding-service") setIsOpen(false);
                    }}
                    className={`relative inline-flex items-center gap-2 text-sm font-semibold tracking-wide transition-all duration-300 hover:text-gold hover:translate-x-2 ${
                      isActive(item.path) ? "text-gold" : "text-primary-foreground"
                    } ${wedding ? "animate-weddingShine" : ""}`}
                  >
                    {item.name}
                    {wedding && (
                      <span className="px-1.5 py-0.5 text-[8px] font-bold tracking-wider rounded-sm bg-[#FC7303] text-white shadow-md shadow-[#FC7303]/50 animate-pulse">
                        NEW!
                      </span>
                    )}
                  </Link>
                );
              })}
              <a
                href="https://www.instagram.com/cheers_barbershop/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold tracking-wide transition-all duration-300 hover:text-gold hover:translate-x-2 text-primary-foreground flex items-center gap-2"
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
