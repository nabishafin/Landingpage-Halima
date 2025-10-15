"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

import team1 from "../../public/team-1.jpg";
import team2 from "../../public/team-2.jpg";
import team3 from "../../public/team-3.jpg";
import team4 from "../../public/team-4.jpg";
import team5 from "../../public/team-5.jpg";
import team6 from "../../public/team-6.jpg";

const teamMembers = [
  {
    id: "1",
    name: "Kim",
    role: "Researcher",
    image: team1,
    description:
      "Blends insight with innovation to uncover what's working, what's next, and what cuts through, turning industry trends into actionable content intelligence.",
  },
  {
    id: "2",
    name: "O'Hara",
    role: "Video Architect",
    image: team2,
    description:
      "Creates compelling visual narratives that engage audiences and drive meaningful connections through innovative video storytelling techniques.",
  },
  {
    id: "3",
    name: "Pierre",
    role: "Production Lead",
    image: team3,
    description:
      "Orchestrates seamless production workflows, ensuring every project delivers exceptional quality while meeting tight deadlines and exceeding expectations.",
  },
  {
    id: "4",
    name: "Raygan",
    role: "Lead Editor",
    image: team4,
    description:
      "Transforms raw content into polished masterpieces, bringing creative vision to life through meticulous attention to detail and innovative editing techniques.",
  },
  {
    id: "5",
    name: "Ash",
    role: "Developer",
    image: team5,
    description:
      "Builds robust digital solutions that power creative workflows, combining technical expertise with user-centered design principles.",
  },
  {
    id: "6",
    name: "Anita",
    role: "Operations",
    image: team6,
    description:
      "Ensures smooth operations across all departments, optimizing processes and maintaining the high standards that define our creative excellence.",
  },
];

export function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.15, ease: "easeOut" },
    }),
  };

  return (
    <div className="data-scroll-section">
      <section className="py-0 md:py-16">
        <div className="w-full lg:w-11/12 mx-auto bg-white p-4 md:p-16 rounded-2xl">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start md:items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <motion.div className="space-y-2" custom={0} variants={fadeUp}>
                <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
                  Built by <span className="text-black">Creatives</span>
                </h1>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#686868] leading-tight">
                  Powered
                  <br />
                  by purpose.
                </h2>
              </motion.div>

              <motion.div
                className="space-y-6 text-gray-700 max-w-md"
                custom={1}
                variants={fadeUp}
              >
                <p className="text-lg leading-relaxed">
                  We believe great work comes from{" "}
                  <span className="font-semibold text-black">
                    diverse collaboration.
                  </span>{" "}
                  That's why we work closely with each other to ensure every
                  project meets your goals and exceeds expectations.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-black">
                    Be part of our mission
                  </h3>
                  <p className="text-base leading-relaxed">
                    If you're ready to create and collaborate, we'd love to hear
                    from you.
                  </p>
                </div>

                <a
                  href="mailto:people@thereinitiative.com?subject=&body="
                  className="inline-block bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3 text-base font-medium transition-colors"
                >
                  Join us
                </a>
              </motion.div>
            </motion.div>

            {/* Right Team Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mt-8 md:mt-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gray-900 transition-shadow duration-500 hover:shadow-2xl hover:shadow-black/40
                             h-[530px] sm:h-[420px] lg:h-[400px]"
                  onMouseEnter={() => setHoveredMember(member.id)}
                  onMouseLeave={() => setHoveredMember(null)}
                  onTouchStart={() => setHoveredMember(member.id)}
                  onTouchEnd={() => setHoveredMember(null)}
                  custom={index}
                  variants={fadeUp}
                >
                  {/* ✅ Image adjustment */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={`object-cover transition-transform duration-500 ease-out ${
                      hoveredMember === member.id
                        ? "scale-110 blur-sm"
                        : "group-hover:scale-110 group-hover:blur-sm"
                    }`}
                    style={{
                      objectPosition: "center top 65%",
                    }}
                    priority={index < 2}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Role */}
                  <div className="absolute top-4 left-4 right-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full opacity-80" />
                      <span className="text-white text-sm font-medium tracking-wide">
                        {member.role}
                      </span>
                    </div>
                  </div>

                  {/* Name */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <h3 className="text-white text-xl md:text-2xl font-bold drop-shadow-lg">
                      {member.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <div
                    className={`absolute inset-x-0 bottom-0 transition-all duration-500 ease-out transform ${
                      hoveredMember === member.id
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0"
                    }`}
                    style={{
                      height: "45%",
                    }}
                  >
                    <div className="absolute bottom-16 left-4 right-4 space-y-3 h-3/4 flex flex-col justify-end">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-white rounded-full opacity-80" />
                        <span className="text-white text-sm font-medium tracking-wide">
                          {member.role}
                        </span>
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-white/90 text-xs sm:text-xs leading-tight">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
