import { useState } from "react";
import { format } from "date-fns";
import { el } from "date-fns/locale";
import { Sparkles, Crown, Scissors, Calendar as CalendarIcon, Check, Image as ImageIcon, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { toast } from "sonner";
import theraponImg from "@/assets/therapon.png";

const THERAPON_PHONE = "+35796557340";

const content = {
  en: {
    eyebrow: "Exclusive Offering",
    title: "Wedding Barber Service",
    subtitle: "A once-in-a-lifetime grooming experience for your most important day",
    description:
      "Make your wedding day truly unforgettable with our signature Premium Wedding Barber Service — crafted exclusively by Owner & Master Barber Therapon. This bespoke experience blends timeless tradition with modern elegance, ensuring you and your closest companions look impeccable for every photograph and every moment.",
    availability: "Available exclusively on Thursdays, Saturdays & Sundays",
    price: "350€",
    priceLabel: "All-inclusive package",
    includesTitle: "What's Included",
    items: [
      {
        title: "3 Premium Haircuts",
        desc: "For 3 gentlemen of the wedding party — the groom, best men, brothers or cousins.",
      },
      {
        title: "1 Trial Haircut (Δοκιμαστικό)",
        desc: "One month before the wedding to perfect every detail and ensure the look is exactly right.",
      },
      {
        title: "LIVE Traditional Shaving at the Αλλάματα",
        desc: "An authentic classic shave for the groom during the αλλάματα ceremony, finished with an elegant styling (χτένισμα).",
      },
    ],
    barberLabel: "Crafted personally by",
    barberName: "Therapon Constantinou",
    barberRole: "Owner ◦ Master Barber",
    cta: "Book Wedding Service",
    galleryTitle: "Past Wedding Moments",
    gallerySubtitle: "A glimpse into Therapon's signature wedding experiences — more coming soon.",
    photoLabel: "Photo coming soon",
    videoLabel: "Video coming soon",
    langToggle: "Ελληνικά",
    modalTitle: "Choose Your Wedding Date",
    modalDesc: "Select the date of your wedding. We'll send your interest directly to Therapon.",
    modalConfirm: "Confirm & Send to Therapon",
    modalSelected: "Selected date:",
    modalNoDate: "Please select a wedding date first",
    smsSent: "Opening your messaging app to send Therapon your request…",
    smsBody: (date: string) =>
      `Hello Therapon! I'm interested in booking the Premium Wedding Barber Service for my wedding on ${date}. Please contact me to discuss the details. Thank you!`,
  },
  gr: {
    eyebrow: "Αποκλειστική Υπηρεσία",
    title: "Υπηρεσία Γάμου",
    subtitle: "Μια μοναδική εμπειρία περιποίησης για την πιο σημαντική σου μέρα",
    description:
      "Κάνε τη μέρα του γάμου σου πραγματικά αξέχαστη με την αποκλειστική μας Premium Υπηρεσία Γάμου — δημιουργημένη αποκλειστικά από τον Owner & Master Barber Θεράπων. Μια ξεχωριστή εμπειρία που συνδυάζει διαχρονική παράδοση με μοντέρνα κομψότητα, εξασφαλίζοντας ότι εσύ και οι πιο κοντινοί σου άνθρωποι θα δείχνετε άψογοι σε κάθε φωτογραφία και κάθε στιγμή.",
    availability: "Διαθέσιμο αποκλειστικά Πέμπτη, Σάββατο & Κυριακή",
    price: "350€",
    priceLabel: "Πλήρες πακέτο",
    includesTitle: "Τι Περιλαμβάνει",
    items: [
      {
        title: "3 Premium Κουρέματα",
        desc: "Για 3 άνδρες του γάμου — γαμπρό, κουμπάρους, αδέρφια ή ξαδέρφια.",
      },
      {
        title: "1 Δοκιμαστικό Κούρεμα",
        desc: "Έναν μήνα πριν τον γάμο, για να τελειοποιήσουμε κάθε λεπτομέρεια του look.",
      },
      {
        title: "LIVE Παραδοσιακό Ξύρισμα στα Αλλάματα",
        desc: "Αυθεντικό κλασικό ξύρισμα για τον γαμπρό κατά τη διάρκεια των αλλαμάτων, με κομψό χτένισμα στο τέλος.",
      },
    ],
    barberLabel: "Δημιουργημένο προσωπικά από τον",
    barberName: "Θεράπων Κωνσταντίνου",
    barberRole: "Owner ◦ Master Barber",
    cta: "Κλείσε Ραντεβού Γάμου",
    galleryTitle: "Στιγμές από Παλιούς Γάμους",
    gallerySubtitle: "Μια ματιά στις γαμήλιες εμπειρίες του Θεράπων — σύντομα περισσότερα.",
    photoLabel: "Φωτογραφία σύντομα",
    videoLabel: "Βίντεο σύντομα",
    langToggle: "English",
    modalTitle: "Επίλεξε Ημερομηνία Γάμου",
    modalDesc: "Διάλεξε την ημερομηνία του γάμου σου. Θα στείλουμε το ενδιαφέρον σου απευθείας στον Θεράπων.",
    modalConfirm: "Επιβεβαίωση & Αποστολή",
    modalSelected: "Επιλεγμένη ημερομηνία:",
    modalNoDate: "Παρακαλώ επίλεξε πρώτα ημερομηνία",
    smsSent: "Άνοιγμα της εφαρμογής μηνυμάτων για αποστολή στον Θεράπων…",
    smsBody: (date: string) =>
      `Γεια σου Θεράπων! Ενδιαφέρομαι να κλείσω την Premium Υπηρεσία Γάμου για τον γάμο μου στις ${date}. Παρακαλώ επικοινώνησε μαζί μου για τις λεπτομέρειες. Ευχαριστώ!`,
  },
};

const WeddingService = () => {
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
    const smsUrl = `sms:${THERAPON_PHONE}?body=${body}`;
    toast.success(t.smsSent);
    window.location.href = smsUrl;
    setTimeout(() => setOpen(false), 600);
  };

  return (
    <section
      id="wedding-service"
      className="relative py-24 bg-primary text-primary-foreground overflow-hidden scroll-mt-24"
    >
      {/* Elegant background layers */}
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
              top: `${(i * 13 + 10) % 90}%`,
              left: `${(i * 23 + 5) % 95}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          ref={headerAnim.ref}
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-[2000ms] ${
            headerAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/40 mb-5">
            <Crown className="w-4 h-4 text-gold" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              {t.eyebrow}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-4 text-primary-foreground">
            <span className="font-script text-gold text-5xl md:text-6xl block mb-2">
              Premium
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

        {/* Main Card */}
        <div
          ref={cardAnim.ref}
          className={`max-w-6xl mx-auto transition-all duration-[2000ms] ${
            cardAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <Card className="border-2 border-gold/40 bg-black/50 backdrop-blur-sm overflow-hidden shadow-2xl shadow-gold/20">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 w-full">
                <div className="relative overflow-hidden aspect-square md:aspect-auto md:min-h-[500px] group w-full">
                  <img
                    src={theraponImg}
                    alt="Therapon Constantinou - Owner & Master Wedding Barber"
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
                    <Crown className="w-7 h-7 text-gold" />
                  </div>
                </div>

                <div className="p-8 md:p-10 space-y-6 flex flex-col justify-center">
                  <p className="text-primary-foreground/85 leading-relaxed font-light">
                    {t.description}
                  </p>

                  <div className="flex flex-wrap items-baseline gap-3 py-4 border-y border-gold/20">
                    <span className="text-5xl font-sans font-bold text-gold">{t.price}</span>
                    <span className="text-sm text-primary-foreground/60 italic">
                      {t.priceLabel}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 text-primary-foreground/90">
                    <CalendarIcon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="font-light">{t.availability}</span>
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
                      <Crown className="w-5 h-5" />
                      {t.cta}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Media Gallery Placeholders */}
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

      {/* Wedding Date Picker Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-black border-2 border-gold/50 text-primary-foreground sm:max-w-md shadow-2xl shadow-gold/30">
          <DialogHeader>
            <DialogTitle className="text-2xl font-sans flex items-center gap-2">
              <Crown className="w-6 h-6 text-gold" />
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
              disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
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

          <Button
            variant="hero"
            size="lg"
            onClick={handleConfirm}
            disabled={!date}
            className="w-full"
          >
            <Crown className="w-5 h-5" />
            {t.modalConfirm}
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WeddingService;
