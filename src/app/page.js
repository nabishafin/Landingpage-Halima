"use client";
import useLocoScroll from "@/lib/useLocoScroll";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  useLocoScroll();

  return (
    <main data-scroll-container>
      <section id="hero" data-scroll-section>
        <HeroSection />
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
