"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div
      data-scroll
      data-scroll-speed="1"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-green-50 to-white"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold mb-4"
      >
        Feel the Smooth Scroll 🌿
      </motion.h1>

      <p className="max-w-xl text-center text-gray-600 mb-6">
        Built with Next.js, Locomotive Scroll, and shadcn/ui — smooth and
        modern.
      </p>

      <Button>Get Started</Button>
    </div>
  );
}
