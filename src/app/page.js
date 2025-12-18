'use client';

import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Dynamically import HeroSection to avoid static prerendering issues with Canvas
const HeroSection = dynamic(() => import("@/components/HeroSection"), {
  ssr: false,
  loading: () => <div style={{ height: '100vh', background: '#0a0e27' }} />
});

// Disable static generation for this page
export const dynamic = 'force-dynamic';

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
