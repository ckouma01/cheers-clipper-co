import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import CheersAnimation from "./components/CheersAnimation";
import HomeServiceAnnouncement from "./components/HomeServiceAnnouncement";
import Home from "./pages/Home";
import About from "./pages/About";
import BookAppointment from "./pages/BookAppointment";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PanagiotisCard from "./pages/PanagiotisCard";

const queryClient = new QueryClient();
const USE_HASH_ROUTER = import.meta.env.BASE_URL !== "/";

const STANDALONE_ROUTES = ["/panagiotis-card"];

const AppShell = () => {
  const location = useLocation();
  const isStandalone = STANDALONE_ROUTES.includes(location.pathname);

  if (isStandalone) {
    return (
      <Routes>
        <Route path="/panagiotis-card" element={<PanagiotisCard />} />
      </Routes>
    );
  }

  return (
    <>
      <HomeServiceAnnouncement />
      <div className="min-h-screen flex flex-col bg-primary">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/book" element={<BookAppointment />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CheersAnimation />
      {USE_HASH_ROUTER ? (
        <HashRouter>
          <AppShell />
        </HashRouter>
      ) : (
        <BrowserRouter>
          <AppShell />
        </BrowserRouter>
      )}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
