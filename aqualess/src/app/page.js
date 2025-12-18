import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
