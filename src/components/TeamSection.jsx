"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import team1 from "../../public/team-1.avif";
import team2 from "../../public/team-2.jpg";
import team3 from "../../public/team-3.avif";
import team4 from "../../public/team-4.jpg";
import team5 from "../../public/team-5.jpg";
import team6 from "../../public/team-6.avif";

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

const TeamSection = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.15, ease: "easeOut" },
    }),
  };

  return (
    <div className="data-scroll-section w-full">
      <section className="py-0 md:py-16 w-full">
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
                  className="inline-block bg-black text-white hover:bg-black rounded-lg px-8 py-2 text-base font-medium transition-colors"
                >
                  Join us
                </a>
              </motion.div>
            </motion.div>

            {/* Right Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 mt-2 md:mt-12">
              {teamMembers.map((member) => (
                <div key={member.id} className="relative group cursor-pointer">
                  <div className="relative w-full h-[520px] rounded-2xl overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-4 left-2 text-white">
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-sm">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamSection;
