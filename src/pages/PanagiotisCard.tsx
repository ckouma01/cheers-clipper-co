import { Instagram, Globe, Scissors } from "lucide-react";
import panagiotisImg from "@/assets/panagiotis.png";
import logo from "@/assets/cheers-logo-new.png";

const LIME = "#b6ed3d";

const PanagiotisCard = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center px-5 py-10 relative overflow-hidden"
      style={{ backgroundColor: LIME }}
    >
      {/* Decorative blurred circles */}
      <div
        className="absolute -top-24 -left-24 w-72 h-72 rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ backgroundColor: "#000" }}
      />
      <div
        className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ backgroundColor: "#fff" }}
      />

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center text-center">
        {/* Profile picture */}
        <div className="relative mb-6">
          <div
            className="absolute inset-0 rounded-full blur-xl opacity-60"
            style={{ backgroundColor: "#000" }}
          />
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
          Master Barber · Cheers Barbershop
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
          <a
            href="https://instagram.com/panagioths.chr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 bg-black text-white font-semibold py-4 rounded-2xl shadow-lg active:scale-[0.98] transition-transform"
          >
            <Instagram size={20} />
            My Instagram
          </a>

          <a
            href="https://www.instagram.com/cheers_barbershop/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 bg-white text-black font-semibold py-4 rounded-2xl shadow-lg active:scale-[0.98] transition-transform border-2 border-black"
          >
            <Instagram size={20} />
            Cheers Instagram
          </a>

          <a
            href="/"
            className="w-full flex items-center justify-center gap-3 font-bold py-4 rounded-2xl shadow-lg active:scale-[0.98] transition-transform border-2 border-black"
            style={{ backgroundColor: LIME, color: "#000" }}
          >
            <Globe size={20} />
            Visit Cheers Website
          </a>
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
