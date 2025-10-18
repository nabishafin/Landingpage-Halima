"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else setStatus("❌ Failed to send message.");
    } catch {
      setStatus("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/main-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 w-full lg:w-11/12 mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[90vh]">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-3xl p-10 shadow-2xl max-w-xl mx-auto lg:mx-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
              Can't find what you want?
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Your name*
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="w-full py-3 px-3 text-base"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  E-mail*
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full py-3 px-3 text-base"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  className="w-full min-h-[140px] resize-none py-3 px-3 text-base"
                  rows={5}
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-full text-base font-semibold"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>

            {status && (
              <p className="text-center mt-3 text-sm font-medium">{status}</p>
            )}

            <p className="text-xs text-gray-500 mt-4 text-center">
              By submitting, you agree to our{" "}
              <a href="#" className=" hover:text-gray-700">
                Terms
              </a>{" "}
              and{" "}
              <a href="#" className=" hover:text-gray-700">
                Privacy Policy
              </a>
              .
            </p>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="text-white space-y-12 lg:space-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Let's talk.
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-300">
                Tell us about your project, whether it's a vlog, documentary, or
                a TikTok short.
              </p>
            </div>

            {/* Features: Forced horizontal layout on mobile too */}
            <div className="flex flex-row flex-wrap gap-4 sm:gap-6">
              {/* Quick Response */}
              <div className="flex items-start gap-3 w-[calc(50%-0.5rem)] min-w-[140px]">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold mb-1">
                    Quick response.
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    If you're ready to create and collaborate, we'd love to hear
                    from you.
                  </p>
                </div>
              </div>

              {/* Clear Next Steps */}
              <div className="flex items-start gap-3 w-[calc(50%-0.5rem)] min-w-[140px]">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold mb-1">
                    Clear next steps.
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    After your discovery call, we'll provide you with a detailed
                    plan and timeline.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
