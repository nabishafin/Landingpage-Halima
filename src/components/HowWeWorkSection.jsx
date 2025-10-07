"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function HowWeWorkSection() {
  const router = useRouter();

  const workSteps = [
    {
      id: 1,
      title: "Foundation",
      description:
        "For brands seeking clarity and a strong foundation. We uncover your brand’s DNA, define your positioning, and craft the visual identity that anchors everything to come.",
      powered: "→ Powered by Re:Define and Re:Design",
    },
    {
      id: 2,
      title: "Growth",
      description:
        "For brands ready to expand their reach and deepen connection. We create campaigns, content, and growth systems that increase visibility and build momentum with the right audience.",
      powered: "→ Powered by Re:Present and Re:Scale",
    },
    {
      id: 3,
      title: "Structure",
      description:
        "For brands ready to scale with strategy and structure. We act as an embedded partner — aligning brand, marketing, and operations so you can grow with clarity and confidence.",
      powered: "→ Powered by Re:Structure (and all five pillars as needed)",
    },
  ];

  return (
    <section className="py-20 px-6 bg-black text-white mt-16">
      <div className="w-full lg:w-11/12 mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            How We Work <br />
            <span className="text-white">with you</span>
          </h2>

          <p className="text-white text-lg leading-relaxed">
            Every brand has a different starting point. Some need clarity,
            others crave growth, and some are ready to scale with structure. At
            <span className="text-white font-semibold"> The Re:Initiative</span>
            , we meet you where you are, guiding you through our proven service
            framework.
          </p>

          <p className="text-white text-lg leading-relaxed">
            To simplify your journey, we’ve shaped three engagement levels, each
            powered by our five pillars:
          </p>
        </motion.div>

        {/* RIGHT CONTENT - CARDS */}
        <div className="space-y-8">
          {workSteps.map((step, index) => (
            <motion.div
              key={step.id}
              className="bg-[#111] p-8 rounded-2xl relative overflow-hidden group border border-white/10 hover:border-white/20 transition-colors"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              <p className="text-white mb-3 leading-relaxed">
                {step.description}
              </p>
              <p className="text-gray-400 italic">{step.powered}</p>
            </motion.div>
          ))}

          {/* Enquire Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Button
              onClick={() => router.push("/meeting")}
              className="mt-4 bg-white w-full md:w-80 text-black py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-200 transition"
            >
              Enquire <ArrowRight size={18} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
