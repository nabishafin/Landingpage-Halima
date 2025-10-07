"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";

const faqData = [
    {
        question: "What is Re: Initiative?",
        answer:
            "Re: Initiative is a strategy-first content creation agency built for busy entrepreneurs and modern brands who want high-quality video content without the hassle.",
    },
    {
        question: "What types of content do you produce?",
        answer:
            "We specialize in creating various types of video content including vlogs, documentaries, TikTok shorts, promotional videos, brand stories, and social media content tailored to your specific needs and platform requirements.",
    },
    {
        question: "How does your process work?",
        answer:
            "Our process begins with a discovery call to understand your goals, followed by strategic planning, content creation, and post-production. We handle everything from concept development to final delivery, ensuring a seamless experience for our clients.",
    },
    {
        question: "What makes Re: Initiative different?",
        answer:
            "We take a strategy-first approach, focusing on understanding your business objectives before creating content. Our team combines creative expertise with business acumen to deliver content that not only looks great but drives real results for your brand.",
    },
    {
        question: "Do you manage social media or just create content?",
        answer:
            "While our primary focus is on high-quality content creation, we also offer social media management services. We can help with content strategy, posting schedules, and community engagement to maximize the impact of your video content.",
    },
    {
        question: "How is pricing structured?",
        answer:
            "Our pricing is project-based and depends on the scope, complexity, and deliverables required. We offer transparent pricing with detailed proposals that outline all costs upfront. Contact us for a custom quote based on your specific needs.",
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
            <div className="w-full md:w-10/12 mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left side - FAQ heading */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeUp}
                    >
                        <h2 className="text-6xl lg:text-8xl font-bold text-black mb-6">
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
