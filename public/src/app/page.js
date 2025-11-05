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
  useLenis();

  return (
    <main className="bg-[#F5F5F5]">
      <section id="hero">
        <HeroSection />
      </section>

      <section>
        <HowWeWorkSection />
      </section>

      <section>
        <CompanyLogos />
      </section>

      <section>
        <TestimonialSection />
      </section>

      <section className="bg-black w-[98%] md:w-[99%] mx-auto rounded-2xl px-4">
        <StepsSection />
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
  );
}
