import React from "react";
import { motion } from "framer-motion";

const HeroSection = React.memo(() => {
  return (
    <section className="relative py-52 md:py-80 overflow-hidden w-[98%] md:w-[99%] mx-auto rounded-2xl mt-18">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/main-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/70 to-black/90"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 md:px-6 mx-auto md:pt-32 overflow-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-white text-3xl sm:text-4xl md:text-4xl font-bold mb-6 drop-shadow-lg leading-snug max-w-full px-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          Founded in London, collaborating worldwide
        </motion.h1>

        <motion.h2
          className="text-[#9c9c9c] text-[14px] sm:text-base md:text-3xl font-semibold mb-2 max-w-full sm:max-w-2xl md:max-w-6xl mx-auto leading-relaxed px-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          The Re: Initiative is a boutique consultancy shaping brands through
          strategy, design, and creative direction, with every solution
          meticulously tailored.
        </motion.h2>

        {/* Solutions List */}
        <motion.ul
          className="text-white text-left max-w-3xl w-full mx-auto mt-2 space-y-1 text-xs sm:text-xs md:text-sm leading-relaxed px-2"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
            hidden: { opacity: 0 },
          }}
        ></motion.ul>
      </motion.div>
    </section>
  );
});

export default HeroSection;
