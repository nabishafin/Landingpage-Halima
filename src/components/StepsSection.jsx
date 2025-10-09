"use client";

import { motion } from "framer-motion";
import { CirclePlus } from "lucide-react";
import EnquireButton from "./ui/EnquireButtton";

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
    <section id="you" className="px-4 w-auto lg:w-11/12 mx-auto ">
      {/* Top Section */}
      <section className="flex items-center justify-center my-5 md:my-16">
        <div className="w-full mx-auto text-left md:text-center px-4">
          <div className="flex items-center justify-start gap-2 mb-5 md:mb-16">
            <CirclePlus className="w-6 h-6 text-black font-bold" />
            <span className="text-lg md:text-xl font-semibold text-black">
              What We Do
            </span>
          </div>

          {/* Main heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-3xl lg:text-6xl font-[500] text-balance leading-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-black">You’ve built the brand.</span>
            <br />
            <span className="text-[#686868]">
              We make it resonate with precision.
            </span>
          </motion.h1>
        </div>
      </section>

      <section className="flex items-center justify-center mt-5 md:mt-10">
        <div className="w-full mx-auto text-left md:text-center my-6 px-4">
          {/* Main heading */}
          <motion.h1
            className="text-lg sm:text-xl md:text-xl mb-5 md:mg-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-black">
              Our services are delivered through five strategic pillars. <br />
              These are the ways we partner with you to build, grow, and sustain your brand.
            </span>
          </motion.h1>
        </div>
      </section>

      {/* Steps Grid */}

      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-3 sm:p-4 rounded-xl text-left hover:shadow-lg transition-shadow duration-300 py-6
              "
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
              <div className="flex justify-between items-center mb-3">
                {/* Step number */}
                <div className=" sm:text-sm  text-[#686868]">{step.number}</div>

                {/* Dots indicator */}
                <div className="flex gap-1 sm:gap-1.5">
                  {Array.from({ length: 5 }).map((_, dotIndex) => (
                    <div
                      key={dotIndex}
                      className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${dotIndex < step.activeDots ? "bg-black" : "bg-gray-300"
                        }`}
                    />
                  ))}
                </div>
              </div>

              {/* Step title */}
              <h3 className="text-lg sm:text-base md:text-lg font-bold text-[#686868] mb-1 px-7 md:px-0">
                {step.title}
              </h3>

              {/* Step text */}
              <p className="text-lg sm:text-sm md:text-sm leading-snug font-medium text-black px-7 md:px-0">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
