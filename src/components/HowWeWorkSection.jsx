"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CirclePlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";

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
    <section className="py-20 px-6 bg-white text-black mt-16 mx-2 rounded-2xl">
      <div className="w-full lg:w-11/12 mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-start gap-1 mb-5 md:mb-10">
            <CirclePlus fill="black" className="w-6 h-6 text-white font-bold" />
            <span className="text-[14px] md:text-md md:font-semibold text-black mt-1">
              What we do
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold leading-snug">
            We meet you where you are <br />
            <span className="text-[#686868] mt-1">
              and build the systems that move you forward.
            </span>
          </h2>

          <p className="text-black text-[12px] md:text-[15px] leading-relaxed">
            We power the growth engines of <span> brands</span> ready to scale
            globally and sustainably, designing the systems that give creative
            businesses the structure to grow intelligently and sustainably.
          </p>

          <p className="text-[12px] md:text-[15px]">
            To simplify your journey, we’ve shaped three engagement levels, each
            powered by our five pillars:
          </p>
        </motion.div>

        {/* RIGHT CONTENT - CARDS */}
        <div className="space-y-6">
          {workSteps.map((step, index) => (
            <motion.div
              key={step.id}
              className="bg-[#F5F5F5] p-6 rounded-2xl relative overflow-hidden group border border-white/10 hover:border-white/20 transition-colors"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-black mb-2 text-sm leading-relaxed text-[11px] md:text-[14px]">
                {step.description}
              </p>
              <ScrollLink
                to="you"
                smooth={true}
                duration={800}
                className="text-gray-800 italic text-[12px] md:text-[15px] cursor-pointer hover:underline"
              >
                {step.powered}
              </ScrollLink>
            </motion.div>
          ))}

          {/* Enquire Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center mt-4"
          >
            <Button
              onClick={() => router.push("/meeting")}
              className="bg-black text-white hover:bg-black  border-[1px] border-black/50 w-40  py-3 rounded-lg  font-semibold flex items-center gap-2  transition"
            >
              Enquire
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
