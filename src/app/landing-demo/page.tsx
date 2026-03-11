import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import PressBar from "@/components/sections/PressBar";
import FeatureShowcase from "@/components/sections/FeatureShowcase";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PricingHomeSection from "@/components/sections/PricingHomeSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import HomeFAQSection from "@/components/sections/HomeFAQSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import MobileBottomCTA from "@/components/sections/MobileBottomCTA";

export default function LandingDemo() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen overflow-x-hidden pb-20 md:pb-0">
      <Navbar />
      <HeroSection />
      <PressBar />
      <FeatureShowcase />
      <HowItWorksSection />
      <ServicesSection />
      <PricingHomeSection />
      <ComparisonSection />
      <TestimonialsSection />
      <HomeFAQSection />
      <CTASection />
      <Footer />
      <MobileBottomCTA />
    </main>
  );
}
