"use client";
import useLocoScroll from "@/lib/useLocoScroll";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import { StepsSection } from "@/components/StepsSection";

export default function Home() {
  useLocoScroll();

  return (
    <main className="bg-[#F5F5F5]" data-scroll-container>
      <section id="hero" data-scroll-section>
        <HeroSection />
      </section>

      <section data-scroll-section>
        <StepsSection />
      </section>
      <section id="about" data-scroll-section>
        <AboutSection />
      </section>
      <section id="services" data-scroll-section>
        <ServicesSection />
      </section>
    </main>
  );
}
