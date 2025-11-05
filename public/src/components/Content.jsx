"use client";

import { motion } from "framer-motion";

import { CirclePlus } from "lucide-react";

export function ContentSection() {
  return (
    <div className="">
      <section className="flex items-center justify-center px-6 py-20 ">
        <div className="w-full lg:w-11/12 mx-auto text-center">
          <div className="flex items-center justify-start gap-2 mb-4">
            <CirclePlus className="w-6 h-6 text-[#686868] font-bold" />
            <span className="text-lg md:text-2xl font-semibold text-[#686868]">
              We've met you before
            </span>
          </div>
          {/* Top indicator */}
          <motion.div
            className="flex items-center justify-start gap-2 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          ></motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-3xl md:text-4xl lg:text-6xl font-[700] text-balance leading-tight "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-black ">You’ve built the brand.</span> <br />{" "}
            <span className="text-[#686868]">
              We make it resonate with precision.
            </span>
          </motion.h1>
        </div>
      </section>
    </div>
  );
}
