"use client";

import { motion } from "framer-motion";
import { CirclePlus } from "lucide-react";

export function StepsSection() {
  const steps = [
    {
      number: "01",
      title: "Re: Define",
      text: "Clarity is strategy. We align your brand’s story, structure, and positioning so it speaks with intent.",
      activeDots: 1,
    },
    {
      number: "02",
      title: "Re: Design",
      text: "From product to packaging, every detail is meticulously tailored — turning vision into assets that endure.",
      activeDots: 2,
    },
    {
      number: "03",
      title: "Re: Present",
      text: "Visibility with precision. We translate your brand story into campaigns, content, and storytelling that cut through the noise.",
      activeDots: 3,
    },
    {
      number: "04",
      title: "Re: Scale",
      text: "Growth with clarity. We design marketing and partnerships that transform visibility into market position and market position into measurable growth.",
      activeDots: 4,
    },
    {
      number: "05",
      title: "Re: Structure",
      text: "Growth demands structure. We design the operations, systems, and workflows that let your business scale without breaking.",
      activeDots: 5,
    },
  ];

  return (
    <section id="you" className="px-4">
      {/* Top Section */}
      <section className="flex items-center justify-center px-6 py-20">
        <div className="w-full lg:w-11/12 mx-auto text-center">
          <div className="flex items-center justify-start gap-2 mb-4">
            <CirclePlus className="w-6 h-6 text-[#686868] font-bold" />
            <span className="text-lg md:text-2xl font-semibold text-[#686868]">
              We've met you before
            </span>
          </div>

          {/* Main heading */}
          <motion.h1
            className="text-3xl md:text-4xl lg:text-6xl font-[700] text-balance leading-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-black">You’ve built the brand.</span>
            <br />
            <span className="text-[#686868]">
              {" "}
              We make it resonate with precision.{" "}
            </span>
          </motion.h1>
        </div>
      </section>

      {/* Steps Grid */}
      <div className="w-auto lg:w-11/12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-3 sm:p-5 rounded-xl text-left hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Number and dots in a row */}
              <div className="flex justify-between items-center mb-4">
                {/* Step number */}
                <div className="text-lg sm:text-xl font-semibold text-[#686868]">
                  {step.number}
                </div>

                {/* Dots indicator */}
                <div className="flex gap-1 sm:gap-2">
                  {Array.from({ length: 5 }).map((_, dotIndex) => (
                    <div
                      key={dotIndex}
                      className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full ${
                        dotIndex < step.activeDots
                          ? "bg-[#686868]"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Step title */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#686868] mb-2">
                {step.title}
              </h3>

              {/* Step text */}
              <p className="text-sm sm:text-base md:text-base leading-relaxed font-medium text-[#686868]">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
