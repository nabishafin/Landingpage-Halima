"use client";

import { CirclePlus } from "lucide-react";
import pic from "../../public/testomonial.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export function TestimonialSection() {
  const numberStats = [
    { id: 1, number: 5000, suffix: "+", cardNumber: "01" },
    { id: 2, number: 98, suffix: "%", cardNumber: "02" },
    { id: 3, number: 423, suffix: "m+", cardNumber: "03" },
    { id: 4, number: 470, suffix: "+", cardNumber: "04" },
  ];

  const textStats = [
    { id: 5, title: "5k+ projects", subtitle: "successfully completed" },
    { id: 6, title: "Customer satisfaction", subtitle: "rate" },
    { id: 7, title: "Organic", subtitle: "views" },
    { id: 8, title: "Happy", subtitle: "clients" },
  ];

  // Count animation trigger on scroll
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section className="py-2 md:py-16 px-4 mt-10">
      <div className="w-full lg:w-11/12 mx-auto">
        {/* Header */}
        <motion.div
          className="mb-0 md:mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* <div className="flex items-center justify-start gap-1 mb-5 md:mb-16">
            <CirclePlus fill="black" className="w-6 h-6 text-white font-bold" />
            <span className="text-[14px] md:text-md md:font-semibold text-black mt-1">
              What We Do
            </span>
          </div> */}
          <h2 className="text-3xl lg:text-6xl text-black leading-tight font-bold">
            Hall of Fame Marketer Bozoma St John, <br />
            <span className="text-[#686868]">said this about us</span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-stretch justify-between">
          {/* For mobile: Quote comes first, then image */}
          <div className="lg:hidden flex flex-col gap-8">
            {/* Quote - Mobile */}
            <motion.div
              className="w-full space-y-8"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-[15px] text-[#686868] leading-relaxed  mt-6 md:mt-0">
                <p>
                  <strong className="text-black">
                    An incredibly talented group.
                  </strong>{" "}
                  Who perform at high standards. I was impressed with the
                  thoroughness of their work, the creativity in their vision and
                  sound storytelling. I'd highly recommend.
                </p>
              </div>
            </motion.div>
            {/* Image - Mobile */}
            <motion.div
              className="w-full relative group"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-3xl h-[520px] md:h-80">
                <Image
                  src={pic}
                  alt="Bozoma St John"
                  fill
                  className="object-cover object-[center_top] transition-transform duration-500 ease-out group-hover:scale-110 group-hover:blur-sm"
                />
                {/* Overlay text */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-sm md:text-sm font-semibold text-center">
                    Meet Bozoma St John – A Hall of Fame marketer with global
                    impact.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* For desktop: Original layout */}

          {/* Left - Image - Desktop */}
          <motion.div
            className="hidden lg:block w-full lg:w-1/4 relative group"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative overflow-hidden rounded-3xl h-full">
              <Image
                src={pic}
                alt="Bozoma St John"
                fill
                className="object-cover object-[center_top] transition-transform duration-500 ease-out group-hover:scale-110 group-hover:blur-sm"
              />
              {/* Overlay text */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-sm md:text-sm font-semibold text-center">
                  Meet Bozoma St John – A Hall of Fame marketer with global
                  impact.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Text + Stats - Desktop */}
          <motion.div
            className="w-full lg:w-2/5 space-y-3"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Quote - Desktop */}
            <div className="hidden lg:block text-[16px] text-[#686868] leading-relaxed  ">
              <p>
                <strong className="text-black">
                  An incredibly talented group.
                </strong>{" "}
                Who perform at high standards. I was impressed with the
                thoroughness of their work, the creativity in their vision and
                sound storytelling. I'd highly recommend.
              </p>
            </div>

            {/* Stats Grid - Both mobile and desktop */}
            <div ref={ref} className="grid grid-cols-2 gap-1 pt-4">
              {/* Row 1: Number cards */}
              {numberStats.slice(0, 2).map((stat) => (
                <div
                  key={stat.id}
                  className="relative bg-white px-6 lg:px-12 py-6 rounded-lg"
                >
                  <div className="absolute top-3 right-3 text-xs text-gray-400 font-bold">
                    {stat.cardNumber}
                  </div>
                  <div className="text-3xl lg:text-4xl md:text-5xl font-bold text-black mb-2">
                    <CountUp
                      start={0}
                      end={inView ? stat.number : 0}
                      duration={40}
                      separator=","
                      suffix={stat.suffix}
                    />
                  </div>
                </div>
              ))}

              {/* Row 2: Text cards */}
              {textStats.slice(0, 2).map((stat) => (
                <div
                  key={stat.id}
                  className="relative bg-white font-semibold px-6 lg:px-12 py-6 rounded-lg"
                >
                  <div className="text-sm text-black leading-tight text-end">
                    <p>{stat.title}</p>
                    <p>{stat.subtitle}</p>
                  </div>
                </div>
              ))}

              {/* Row 3: Number cards */}
              {numberStats.slice(2, 4).map((stat) => (
                <div
                  key={stat.id}
                  className="relative bg-white px-6 lg:px-12 py-6 rounded-lg"
                >
                  <div className="absolute top-3 right-3 text-xs text-gray-400 font-bold">
                    {stat.cardNumber}
                  </div>
                  <div className="text-3xl lg:text-4xl md:text-5xl font-bold text-black mb-2">
                    <CountUp
                      start={0}
                      end={inView ? stat.number : 0}
                      duration={3}
                      separator=","
                      suffix={stat.suffix}
                    />
                  </div>
                </div>
              ))}

              {/* Row 4: Text cards */}
              {textStats.slice(2, 4).map((stat) => (
                <div
                  key={stat.id}
                  className="relative bg-white font-semibold px-6 lg:px-12 py-6 rounded-lg"
                >
                  <div className="text-sm text-black leading-tight text-end">
                    <p>{stat.title}</p>
                    <p>{stat.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
