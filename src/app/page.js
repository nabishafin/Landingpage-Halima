"use client";
import { useState } from "react";
import useLenis from "@/lib/useLenis";
import HeroSection from "@/components/HeroSection";
import { StepsSection } from "@/components/StepsSection";
import { CompanyLogos } from "@/components/CompanyLogos";
import { HowWeWorkSection } from "@/components/HowWeWorkSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import ClientTestimonialsSection from "@/components/ClientReview";
import TeamSection from "@/components/TeamSection";

export default function Home() {
  const [showMain, setShowMain] = useState(false);
  useLenis();

  const handleVideoEnd = () => {
    setShowMain(true);
  };

  // 🎥 ভিডিও চলাকালীন শুধুমাত্র ভিডিও দেখাবে
  if (!showMain) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <video
          src="logo video.mp4"
          autoPlay
          muted
          onEnded={handleVideoEnd}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  // 🌐 ভিডিও শেষ হলে পুরো landing page render হবে Navbar/Footer সহ
  return (
    <>
      <main className="bg-[#F5F5F5]">
        <section id="hero">
          <HeroSection />
        </section>

        <section>
          <StepsSection />
        </section>

        <section>
          <CompanyLogos />
        </section>

        <section>
          <TestimonialSection />
        </section>

        <section>
          <HowWeWorkSection />
        </section>

        <section id="reviews">
          <ClientTestimonialsSection />
        </section>

        <section id="us">
          <TeamSection />
        </section>

        <section>
          <FaqSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </>
  );
}
