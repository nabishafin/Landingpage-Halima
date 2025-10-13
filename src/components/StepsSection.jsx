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
        <div className="w-full mx-auto text-left md:text-center mt-6 ">
          <div className="flex items-center justify-start gap-1 mb-5 md:mb-16">
            <CirclePlus fill="black" className="w-6 h-6 text-white font-bold" />
            <span className="text-[14px] md:text-md md:font-semibold text-black mt-1">
              What We Do
            </span>
          </div>

          {/* Main heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-3xl lg:text-6xl font-[500] text-balance leading-tight mt-8 md:mt-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
        <div className="w-full mx-auto text-center my-6">
          {" "}
          {/* Changed text-left to text-center here */}
          {/* Main heading */}
          <motion.h1
            className="text-lg sm:text-xl md:text-xl mb-5 md:mt-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-black text-[15px] md:text-lg">
              Our services are delivered through five strategic pillars. <br />
              These are the ways we partner with you to build, grow, and sustain
              your brand.
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
              className="bg-white p-3 sm:p-4 rounded-xl text-left hover:shadow-lg transition-shadow duration-300 py-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Flex container for number and dots */}
              <div className="flex justify-between items-center mb-3">
                {/* Dots indicator on the left */}
                <div className="flex gap-[3px] sm:gap-1.5">
                  {Array.from({ length: 5 }).map((_, dotIndex) => (
                    <div
                      key={dotIndex}
                      className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${
                        dotIndex < step.activeDots ? "bg-black" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Step number on the right */}
                <div className="text-[10px] md:text-[12px] text-[#686868] sm:text-right">
                  {step.number}
                </div>
              </div>

              {/* Step title */}
              <h3 className="text-[15px] md:text-md font-[500] text-black mb-1 px-20 md:px-0">
                {step.title}
              </h3>

              {/* Step text */}
              <p className="text-[13px] md:text-md leading-snug font-medium text-black px-20 md:px-0">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
