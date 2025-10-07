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
      { name: "L'ORÉAL PARIS", src: img5, alt: "L'ORÉAL PARIS" },
      { name: "Sony Music", src: img6, alt: "Sony Music" },
    ],
    // Bottom row
    [
      { name: "WPP", src: img7, alt: "WPP" },
      { name: "Ogilvy", src: img8, alt: "Ogilvy" },
      { name: "TEDx", src: img9, alt: "TEDx" },
      { name: "Sta Studios", src: img10, alt: "Sta Studios" },
      { name: "Ruka", src: img6, alt: "Ruka" },
      { name: "World Economic Forum", src: img8, alt: "World Economic Forum" },
    ],
  ];

  return (
    <section className="py-  mt-16">
      <div className="w-full lg:w-11/12 mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-10 text-black"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          The company <span className="">we keep</span>
        </motion.h2>

        <div className="space-y-2">
          {companies.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 items-center justify-items-center"
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
                  className="flex items-center justify-center h-40 w-full bg-white rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
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
