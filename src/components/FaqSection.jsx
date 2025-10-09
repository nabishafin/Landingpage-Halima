"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "What types of brands do you work with?",
    answer:
      "We specialise in fashion, beauty, and lifestyle brands — but we also partner with businesses in other industries where strategy, design, and storytelling are essential. This includes corporate clients who value brand clarity and creative direction to sharpen their presence.",
  },
  {
    question: "How are your services structured?",
    answer:
      "Our work is built on five strategic pillars — Re:Define, Re:Design, Re:Present, Re:Scale, and Re:Structure. Depending on where your brand is, we guide you through three engagement levels: Foundation, Growth, or Structure.",
  },
  {
    question: "How is The Re:Initiative different from a traditional agency?",
    answer:
      "Unlike agencies that jump straight to execution, we begin with strategy. Every creative or marketing decision is rooted in brand positioning and long-term structure. This ensures you’re not just producing content but building lasting brand equity.",
  },
  {
    question: "Do you offer fixed packages or custom solutions?",
    answer:
      "We design bespoke solutions for each client, but our work is guided by structured bundles and frameworks. This balance gives you clarity on scope and investment while ensuring the solution is tailored to your needs.",
  },
  {
    question: "Where are you based, and do you work internationally?",
    answer:
      "We’re founded in London, with collaborations that span Europe, North America, Africa, and beyond. Our network of strategists, designers, and creative partners allows us to deliver seamlessly across markets.",
  },
  {
    question: "What does the consultation involve?",
    answer:
      "Our consultations are short and focused. They give us a chance to hear about your brand, your goals, and where you are in your journey. It also allows you to learn more about us and how we work. It’s a first step to see if there’s alignment before moving forward.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
    }),
  };

  return (
    <section className="py-20 px-6">
      <div className="w-full lg:w-11/12 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - FAQ heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-black mb-6">
              FAQ.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Got questions? We've got answers. Here's everything you need to
              know about working with us.
            </p>
          </motion.div>

          {/* Right side - FAQ items */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-200"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
                variants={fadeUp}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-6 flex items-center justify-between text-left transition-colors duration-200"
                >
                  <span className="text-lg font-medium text-black pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-black" />
                    ) : (
                      <Plus className="w-5 h-5 text-black" />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <motion.div
                    className="pb-6 pr-10"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
