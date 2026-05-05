import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { LeftRail } from "./components/layout/LeftRail";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { CaseStudies } from "./pages/CaseStudies";
import { Services } from "./pages/Services";
import { ServicePage } from "./pages/ServicePage";
import { CustomCursor } from "./components/ui/CustomCursor";
import { ScrollIndicator } from "./components/ui/ScrollIndicator";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <CustomCursor />
        <div className="min-h-screen relative bg-brand-primary">
          <LeftRail />
          <Navbar />
          <ScrollIndicator />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServicePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
