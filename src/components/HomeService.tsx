import { useState } from "react";
import { format } from "date-fns";
import { el } from "date-fns/locale";
import { Sparkles, Home as HomeIcon, Scissors, Calendar as CalendarIcon, Check, Image as ImageIcon, Video, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { toast } from "sonner";
import panagiotisImg from "@/assets/panagiotis.png";

const PANAGIOTIS_PHONE = "+35799246036";

const content = {
  en: {
    eyebrow: "Exclusive Offering",
    title: "Home Haircut Service",
    premiumWord: "At Your Place",
    subtitle: "A private, professional grooming experience — delivered to your doorstep",
    description:
      "Skip the wait and enjoy a fully personal haircut in the comfort of your own home. Master Barber Panagiotis Charalambous comes to you with all his professional equipment, bringing the full Cheers experience to your living room, balcony or wherever you feel most at ease. Perfect for busy schedules, special occasions, or simply for those who appreciate true convenience and privacy.",
    priceFrom: "From",
    price: "50€",
    priceLabel: "Private home session",
    includesTitle: "What's Included",
    items: [
      {
        title: "Private Visit to Your Place",
        desc: "Panagiotis travels to your home with all professional tools and equipment.",
      },
      {
        title: "Full Professional Setup",
        desc: "Premium clippers, scissors, capes and sanitised tools — exactly like in the shop.",
      },
      {
        title: "One-on-One Tailored Haircut",
        desc: "A relaxed, undivided session designed entirely around your style and timing.",
      },
    ],
    barberLabel: "Crafted personally by",
    barberName: "Panagiotis Charalambous",
    barberRole: "Master Barber",
    cta: "Book Home Service",
    galleryTitle: "Home Visit Moments",
    gallerySubtitle: "A glimpse into Panagiotis's private home sessions — more coming soon.",
    photoLabel: "Photo coming soon",
    videoLabel: "Video coming soon",
    langToggle: "Ελληνικά",
    modalTitle: "Choose Your Preferred Date",
    modalDesc: "Pick the date you'd like Panagiotis to visit. We'll send your request directly to him.",
    modalConfirm: "Confirm & Send to Panagiotis",
    modalSelected: "Selected date:",
    modalNoDate: "Please select a date first",
    smsSent: "Opening your messaging app to send Panagiotis your request…",
    priceNote:
      "* Pricing starts at 50€ and may increase depending on the distance to your location.",
    smsBody: (date: string) =>
      `Hello Panagiotis! I'm interested in booking your private Home Haircut Service on ${date}. Please contact me to confirm the details and address. Thank you!`,
  },
  gr: {
    eyebrow: "Αποκλειστική Υπηρεσία",
    title: "Υπηρεσία Κουρέματος Κατ' Οίκον",
    premiumWord: "Στον Χώρο Σου",
    subtitle: "Μια προσωπική, επαγγελματική εμπειρία κουρέματος — στην πόρτα σου",
    description:
      "Ξέχνα την αναμονή και απόλαυσε ένα εντελώς προσωπικό κούρεμα στην άνεση του σπιτιού σου. Ο Master Barber Παναγιώτης Χαραλάμπους έρχεται σε σένα με όλον τον επαγγελματικό του εξοπλισμό, φέρνοντας την πλήρη εμπειρία του Cheers στο σαλόνι, στο μπαλκόνι ή όπου εσύ νιώθεις πιο άνετα. Ιδανικό για γεμάτα προγράμματα, ειδικές περιστάσεις ή απλά για όσους εκτιμούν την πραγματική άνεση και ιδιωτικότητα.",
    priceFrom: "Από",
    price: "50€",
    priceLabel: "Ιδιωτική συνεδρία κατ' οίκον",
    includesTitle: "Τι Περιλαμβάνει",
    items: [
      {
        title: "Ιδιωτική Επίσκεψη στον Χώρο Σου",
        desc: "Ο Παναγιώτης έρχεται στο σπίτι σου με όλα τα επαγγελματικά εργαλεία.",
      },
      {
        title: "Πλήρης Επαγγελματικός Εξοπλισμός",
        desc: "Premium μηχανές, ψαλίδια, μπέρτες και αποστειρωμένα εργαλεία — όπως ακριβώς στο κουρείο.",
      },
      {
        title: "Προσωπικό Κούρεμα στα Μέτρα Σου",
        desc: "Χαλαρή συνεδρία αφιερωμένη αποκλειστικά σε εσένα και στο στυλ σου.",
      },
    ],
    barberLabel: "Δημιουργημένο προσωπικά από τον",
    barberName: "Παναγιώτης Χαραλάμπους",
    barberRole: "Master Barber",
    cta: "Κλείσε Ραντεβού Κατ' Οίκον",
    galleryTitle: "Στιγμές Από Επισκέψεις Κατ' Οίκον",
    gallerySubtitle: "Μια ματιά στις ιδιωτικές συνεδρίες του Παναγιώτη — σύντομα περισσότερα.",
    photoLabel: "Φωτογραφία σύντομα",
    videoLabel: "Βίντεο σύντομα",
    langToggle: "English",
    modalTitle: "Επίλεξε Ημερομηνία",
    modalDesc: "Διάλεξε την ημερομηνία που θες να σε επισκεφτεί ο Παναγιώτης. Θα στείλουμε το αίτημά σου απευθείας.",
    modalConfirm: "Επιβεβαίωση & Αποστολή",
    modalSelected: "Επιλεγμένη ημερομηνία:",
    modalNoDate: "Παρακαλώ επίλεξε πρώτα ημερομηνία",
    smsSent: "Άνοιγμα της εφαρμογής μηνυμάτων για αποστολή στον Παναγιώτη…",
    priceNote:
      "* Η τιμή ξεκινά από 50€ και μπορεί να αυξηθεί ανάλογα με την απόσταση της τοποθεσίας σου.",
    smsBody: (date: string) =>
      `Γεια σου Παναγιώτη! Ενδιαφέρομαι να κλείσω την ιδιωτική Υπηρεσία Κουρέματος Κατ' Οίκον στις ${date}. Παρακαλώ επικοινώνησε μαζί μου για τις λεπτομέρειες και τη διεύθυνση. Ευχαριστώ!`,
  },
};

const HomeService = () => {
  const [lang, setLang] = useState<"en" | "gr">("en");
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const t = content[lang];
  const headerAnim = useScrollAnimation();
  const cardAnim = useScrollAnimation();
  const galleryAnim = useScrollAnimation();

  const handleConfirm = () => {
    if (!date) {
      toast.error(t.modalNoDate);
      return;
    }
    const formatted =
      lang === "gr"
        ? format(date, "EEEE d MMMM yyyy", { locale: el })
        : format(date, "EEEE, MMMM d, yyyy");
    const body = encodeURIComponent(t.smsBody(formatted));
    const smsUrl = `sms:${PANAGIOTIS_PHONE}?body=${body}`;
    toast.success(t.smsSent);
    window.location.href = smsUrl;
    setTimeout(() => setOpen(false), 600);
  };

  return (
    <section
      id="home-service"
      className="relative py-24 bg-primary text-primary-foreground overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-secondary to-black opacity-95" />
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold rounded-full blur-[140px]"
          style={{ animation: "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-gold/40 animate-pulse"
            size={16 + (i % 3) * 6}
            style={{
              top: `${(i * 17 + 8) % 90}%`,
              left: `${(i * 29 + 6) % 95}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-full">
        <div
          ref={headerAnim.ref}
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-[2000ms] ${
            headerAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/40 mb-5">
            <HomeIcon className="w-4 h-4 text-gold" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              {t.eyebrow}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-4 text-primary-foreground">
            <span className="font-script text-gold text-5xl md:text-6xl block mb-2">
              {t.premiumWord}
            </span>
            {t.title}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-lg md:text-xl text-primary-foreground/80 font-light italic">
            {t.subtitle}
          </p>

          <button
            onClick={() => setLang(lang === "en" ? "gr" : "en")}
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-gold/40 rounded-full text-gold hover:bg-gold hover:text-black transition-all duration-300"
          >
            🌐 {t.langToggle}
          </button>
        </div>

        <div
          ref={cardAnim.ref}
          className={`max-w-6xl mx-auto transition-all duration-[2000ms] ${
            cardAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <Card className="border-2 border-gold/40 bg-black/50 backdrop-blur-sm overflow-hidden shadow-2xl shadow-gold/20">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 w-full">
                <div className="relative overflow-hidden aspect-square md:aspect-auto md:min-h-[500px] group w-full order-1 md:order-2">
                  <img
                    src={panagiotisImg}
                    alt="Panagiotis Charalambous - Master Barber Home Service"
                    className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xs uppercase tracking-widest text-gold/80 mb-1">
                      {t.barberLabel}
                    </p>
                    <h3 className="text-2xl font-sans font-bold text-primary-foreground">
                      {t.barberName}
                    </h3>
                    <p className="text-gold font-light italic">{t.barberRole}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-14 h-14 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/60 flex items-center justify-center">
                    <HomeIcon className="w-7 h-7 text-gold" />
                  </div>
                </div>

                <div className="p-6 sm:p-8 md:p-10 space-y-6 flex flex-col justify-center min-w-0 break-words order-2 md:order-1">
                  <p className="text-primary-foreground/85 leading-relaxed font-light">
                    {t.description}
                  </p>

                  <div className="flex flex-wrap items-baseline gap-3 py-4 border-y border-gold/20">
                    <span className="text-sm uppercase tracking-widest text-primary-foreground/60">
                      {t.priceFrom}
                    </span>
                    <span className="text-5xl font-sans font-bold text-gold">{t.price}</span>
                    <span className="text-sm text-primary-foreground/60 italic">
                      {t.priceLabel}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 text-primary-foreground/90">
                    <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="font-light">
                      {lang === "gr" ? "Παγκύπρια εξυπηρέτηση" : "Available across Cyprus"}
                    </span>
                  </div>

                  <div className="space-y-4 pt-2">
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-gold flex items-center gap-2">
                      <Scissors className="w-4 h-4" />
                      {t.includesTitle}
                    </h4>
                    <ul className="space-y-4">
                      {t.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-3 group"
                          style={{
                            animation: cardAnim.isVisible
                              ? `fade-in 0.8s ease-out ${i * 0.2 + 0.4}s both`
                              : undefined,
                          }}
                        >
                          <div className="w-7 h-7 rounded-full bg-gold/15 border border-gold/50 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-300">
                            <Check className="w-4 h-4 text-gold group-hover:text-black transition-colors duration-300" />
                          </div>
                          <div>
                            <p className="font-semibold text-primary-foreground">{item.title}</p>
                            <p className="text-sm text-primary-foreground/65 font-light">
                              {item.desc}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button
                      variant="hero"
                      size="lg"
                      className="w-full text-base"
                      onClick={() => setOpen(true)}
                    >
                      <HomeIcon className="w-5 h-5" />
                      {t.cta}
                    </Button>
                    <p className="mt-3 text-xs text-primary-foreground/55 italic text-center">
                      {t.priceNote}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div
          ref={galleryAnim.ref}
          className={`max-w-6xl mx-auto mt-20 transition-all duration-[2000ms] ${
            galleryAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-sans font-bold text-primary-foreground mb-3">
              {t.galleryTitle}
            </h3>
            <div className="w-16 h-px bg-gold mx-auto mb-4" />
            <p className="text-primary-foreground/60 font-light italic">{t.gallerySubtitle}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => {
              const isVideo = i === 1 || i === 3;
              return (
                <div
                  key={i}
                  className="group relative aspect-square rounded-lg overflow-hidden border-2 border-gold/30 bg-black/40 hover:border-gold transition-all duration-500 hover:shadow-2xl hover:shadow-gold/30 hover:-translate-y-1"
                  style={{
                    animation: galleryAnim.isVisible
                      ? `scale-in 0.8s ease-out ${i * 0.15}s both`
                      : undefined,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-gold/70 group-hover:text-gold transition-colors">
                    {isVideo ? (
                      <Video className="w-10 h-10" strokeWidth={1.5} />
                    ) : (
                      <ImageIcon className="w-10 h-10" strokeWidth={1.5} />
                    )}
                    <span className="text-xs uppercase tracking-widest font-light">
                      {isVideo ? t.videoLabel : t.photoLabel}
                    </span>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Sparkles className="absolute top-3 right-3 w-4 h-4 text-gold animate-pulse" />
                    <Sparkles
                      className="absolute bottom-3 left-3 w-3 h-3 text-gold animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-black border-2 border-gold/50 text-primary-foreground sm:max-w-md shadow-2xl shadow-gold/30">
          <DialogHeader>
            <DialogTitle className="text-2xl font-sans flex items-center gap-2">
              <HomeIcon className="w-6 h-6 text-gold" />
              <span className="text-primary-foreground">{t.modalTitle}</span>
            </DialogTitle>
            <DialogDescription className="text-primary-foreground/70 font-light italic">
              {t.modalDesc}
            </DialogDescription>
          </DialogHeader>

          <div className="flex justify-center py-2">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(d) => {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return d < today;
              }}
              initialFocus
              locale={lang === "gr" ? el : undefined}
              className="pointer-events-auto rounded-lg border border-gold/30 bg-black/60 [&_.rdp-day]:text-primary-foreground [&_.rdp-day_button:hover]:bg-gold/20 [&_.rdp-day_selected]:!bg-gold [&_.rdp-day_selected]:!text-black [&_.rdp-day_today]:bg-gold/15 [&_.rdp-day_today]:text-gold [&_.rdp-head_cell]:text-gold [&_.rdp-caption_label]:text-gold [&_.rdp-nav_button]:text-gold [&_.rdp-nav_button:hover]:bg-gold/20 [&_.rdp-day_disabled]:text-primary-foreground/30"
            />
          </div>

          {date && (
            <div className="text-center text-sm text-gold border border-gold/30 rounded-md py-2 px-3 bg-gold/5 animate-fade-in">
              <span className="text-primary-foreground/70 mr-2">{t.modalSelected}</span>
              <span className="font-semibold">
                {lang === "gr"
                  ? format(date, "EEEE d MMMM yyyy", { locale: el })
                  : format(date, "EEEE, MMMM d, yyyy")}
              </span>
            </div>
          )}

          <p className="text-[11px] text-primary-foreground/55 italic text-center">
            {t.priceNote}
          </p>

          <Button
            variant="hero"
            size="lg"
            onClick={handleConfirm}
            disabled={!date}
            className="w-full"
          >
            <HomeIcon className="w-5 h-5" />
            {t.modalConfirm}
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HomeService;
