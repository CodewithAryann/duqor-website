"use client";
import React from "react";
import { motion } from "framer-motion";

const highlights = [
  "Headquartered in Dubai, UAE",
  "Expertise in Modern to Luxury Interiors",
  "Turnkey Design & Build Capabilities",
  "In-house Joinery & FF&E Support",
  "Strategic Partnerships with Premium Global Brands",
  "Client-Centric Approach with On-Time Delivery",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15 },
  }),
};

const AboutPage: React.FC = () => {
  return (
    <section className="min-h-screen relative bg-linear-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white overflow-hidden">
      {/* Animated Background Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,161,88,0.3),transparent_70%)]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-6 bg-linear-to-r text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.5)] bg-clip-text"
        >
          About DUQOR
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-16"
        >
          DUQOR is a premier UAE-based interior design and fit-out firm dedicated
          to crafting modern, sophisticated, and luxurious spaces that go beyond
          aesthetics. We believe exceptional design embodies lifestyle,
          functionality, and innovation in perfect harmony. Our visionary
          designers, master craftsmen, and project managers deliver end-to-end
          solutions across residential, commercial, retail, and hospitality
          sectors throughout the UAE and GCC.
        </motion.p>

        {/* Highlights */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              whileHover={{ scale: 1.05, rotate: 0.5 }}
              className="bg-[#111] border border-[#2c2c2c] hover:border-[#d4af37] rounded-2xl p-6 shadow-lg hover:shadow-[0_0_20px_rgba(194,161,88,0.3)] transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <motion.span
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.6, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-block w-4 h-4 rounded-full bg-[#d4af37] mt-2 shadow-[0_0_10px_#c2a158]"
                />
                <p className="text-gray-200 font-medium text-lg leading-snug text-left">
                  {item}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Elegant Footer Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "60%" }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mx-auto mt-16 h-0.5 bg-linear-to-r from-transparent via-[#d4af37] to-transparent text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"
        />
      </div>
    </section>
  );
};

export default AboutPage;
