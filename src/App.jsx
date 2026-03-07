import { useEffect } from "react";
import LenisScroll from "./components/lenis-scroll";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HeroSection from "./sections/hero-section";
import FaqSection from "./sections/faq-section";
import TrustedCompanies from "./sections/trusted-companies";
import Features from "./sections/features";
import WorkflowSteps from "./sections/workflow-steps";
import PricingPlans from "./sections/pricing-plans";
import ContactPage from "./sections/Contact";

export default function App() {
  useEffect(() => {
    const clickRipple = (e) => {
      const ripple = document.createElement("div");
      ripple.className = "cursor-click-ripple";
      ripple.style.left = `${e.clientX - 7}px`;
      ripple.style.top = `${e.clientY - 7}px`;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    };

    document.addEventListener("click", clickRipple);
    return () => document.removeEventListener("click", clickRipple);
  }, []);

  return (
    <>
      <LenisScroll />
      <Navbar />

      {/* Background blobs */}
      <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none">
        <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#3B6B4C] blur-[100px]" />
        <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#3A7CA5] blur-[100px]" />
        <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#2F5D62]/80 blur-[100px]" />
      </div>

      <main className="px-4">
        <HeroSection />
        <TrustedCompanies />
        <Features />
        <WorkflowSteps />
        <PricingPlans />
        <FaqSection />
        <ContactPage />
      </main>

      <Footer />
    </>
  );
}