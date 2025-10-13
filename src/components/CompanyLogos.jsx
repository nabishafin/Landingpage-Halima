"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Import all logos
import img1 from "../../public/company-1.avif";
import img2 from "../../public/company-2.avif";
import img3 from "../../public/company-3.avif";
import img4 from "../../public/company-4.avif";
import img5 from "../../public/company-5.avif";
import img6 from "../../public/company-6.avif";
import img7 from "../../public/company-7.avif";
import img8 from "../../public/company-8.png";
import img9 from "../../public/company-9.avif";
import img10 from "../../public/company-10.avif";

export function CompanyLogos() {
  const companies = [
    // Top row
    [
      { name: "LVMH", src: img1, alt: "LVMH" },
      { name: "TESCO", src: img2, alt: "TESCO" },
      { name: "Virgin Atlantic", src: img3, alt: "Virgin Atlantic" },
      { name: "BBC", src: img4, alt: "BBC" },
    ],
    // Bottom row
    [
      { name: "L'ORÉAL PARIS", src: img5, alt: "L'ORÉAL PARIS" },
      { name: "WPP", src: img7, alt: "WPP" },
      { name: "Ogilvy", src: img8, alt: "Ogilvy" },
      { name: "TEDx", src: img9, alt: "TEDx" },
    ],
  ];

  return (
    <section className="px-4 my-16">
      <div className="w-full lg:w-8/12 mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mt-20 mb-5 md:mb-10 text-black text-left md:text-center sm:text-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          The company <span className="block sm:inline-block">we keep</span>
        </motion.h2>

        <div className="space-y-1">
          {companies.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-1 justify-items-center mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: rowIndex * 0.2,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {row.map((company, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-35 w-full bg-white rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
                >
                  <Image
                    src={company.src}
                    alt={company.alt}
                    className="max-h-24 max-w-24 object-contain"
                  />
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
