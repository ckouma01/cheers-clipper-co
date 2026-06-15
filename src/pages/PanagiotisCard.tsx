import { Instagram, Globe, Scissors, Home, Brush } from "lucide-react";
import { Link } from "react-router-dom";
import type { ElementType } from "react";
import panagiotisImg from "@/assets/panagiotis.png";
import logo from "@/assets/cheers-logo-new.png";

const LIME = "#b6ed3d";

const LinkButton = ({
  href,
  to,
  icon: Icon,
  children,
  variant = "dark",
}: {
  href?: string;
  to?: string;
  icon: ElementType;
  children: React.ReactNode;
  variant?: "dark" | "light" | "lime";
}) => {
  const base =
    "w-full flex items-center justify-center gap-3 font-semibold py-4 rounded-2xl shadow-lg active:scale-[0.98] transition-transform border-2 border-black";
  const styles = {
    dark: "bg-black text-white",
    light: "bg-white text-black",
    lime: "text-black",
  };

  const className = `${base} ${styles[variant]}`;
  const style = variant === "lime" ? { backgroundColor: LIME } : undefined;

  if (to) {
    return (
      <Link to={to} className={className} style={style}>
        <Icon size={20} />
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
    >
      <Icon size={20} />
      {children}
    </a>
  );
};

const PanagiotisCard = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center px-5 py-10 relative overflow-hidden"
      style={{ backgroundColor: LIME }}
    >
      {/* Diagonal black line pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #000 0px,
            #000 1px,
            transparent 1px,
            transparent 24px
          )`,
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Decorative blurred circles */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ backgroundColor: "#000" }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ backgroundColor: "#000" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: "#fff" }}
      />

      {/* Thin orbital rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-black/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-black/5 pointer-events-none" />

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center text-center">
        {/* Profile picture */}
        <div className="relative mb-6">
          <div
            className="absolute inset-0 rounded-full blur-xl opacity-60"
            style={{ backgroundColor: "#000" }}
          />
          <div className="absolute inset-0 rounded-full border-2 border-black/20 scale-110" />
          <img
            src={panagiotisImg}
            alt="Panagiotis Charalambous"
            className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-black shadow-2xl"
          />
        </div>

        {/* Name + role */}
        <h1 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
          Panagiotis Charalambous
        </h1>
        <p className="mt-2 text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-black/70">
          Master Barber · FREELANCE MARKETING AND GRAPHIC DESIGNER
        </p>

        {/* Cheers logo */}
        <div className="mt-6 mb-2 flex items-center gap-2 bg-black/90 rounded-full pl-2 pr-4 py-1.5 shadow-lg">
          <img src={logo} alt="Cheers Barbershop" className="h-8 w-8 object-contain" />
          <span className="text-white font-semibold text-sm tracking-wide">
            Cheers Barbershop
          </span>
        </div>

        {/* Links */}
        <div className="mt-8 w-full flex flex-col gap-3">
          <LinkButton
            href="https://instagram.com/pch.studio_04"
            icon={Brush}
            variant="dark"
          >
            PCH Studio
          </LinkButton>

          <LinkButton
            href="https://instagram.com/panagioths.chr"
            icon={Instagram}
            variant="dark"
          >
            My Instagram
          </LinkButton>

          <LinkButton
            to="/#home-service"
            icon={Home}
            variant="light"
          >
            At Your Place — Home Haircuts
          </LinkButton>

          <LinkButton
            href="https://www.instagram.com/cheers_barbershop/"
            icon={Instagram}
            variant="light"
          >
            Cheers Instagram
          </LinkButton>

          <LinkButton href="/" icon={Globe} variant="lime">
            Visit Cheers Website
          </LinkButton>
        </div>

        {/* Footer mark */}
        <div className="mt-10 flex items-center gap-2 text-black/60 text-xs font-medium">
          <Scissors size={14} />
          <span>Thanks for scanning</span>
          <Scissors size={14} className="scale-x-[-1]" />
        </div>
      </div>
    </div>
  );
};

export default PanagiotisCard;
