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
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative text-4xl md:text-5xl font-serif font-bold tracking-wide leading-tight
                     bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]
                     bg-clip-text text-transparent
                     drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]
                     [text-shadow:0_0_6px_rgba(255,220,120,0.5),
                                  0_0_14px_rgba(195,138,39,0.4),
                                  0_0_24px_rgba(139,91,16,0.3)] 
                     after:content-[''] after:absolute after:inset-0 
                     after:bg-linear-to-t after:from-white/20 after:to-transparent
                     after:bg-clip-text after:text-transparent
          "
        >
          About DUQOR
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-16"
        >
          DUQOR is a premier UAE-based interior design and fit-out firm dedicated
          to crafting modern, sophisticated, and luxurious spaces that go beyond
          aesthetics. We believe exceptional design embodies lifestyle,
          functionality, innovation, and sustainability in perfect harmony. Our visionary
          designers, master craftsmen, and project managers deliver end-to-end
          solutions across residential, commercial, retail, and hospitality
          sectors throughout the UAE and GCC.
        </motion.p>

        {/* Highlights with Glowing Balls */}
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
      whileHover={{ scale: 1.05, y: -2 }}
      className="bg-linear-to-br from-[#1e1e1e] via-[#2a2a2a] to-[#151515] 
                 border border-[#2c2c2c] hover:border-[#d4af37]/60 
                 rounded-2xl p-6 shadow-md hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] 
                 transition-transform duration-300 flex flex-col"
    >
      <div className="flex items-start gap-4">
        {/* Glowing dot */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [1, 0.7, 1],
            boxShadow: [
              "0 0 5px rgba(212,175,55,0.6)",
              "0 0 15px rgba(212,175,55,0.9)",
              "0 0 5px rgba(212,175,55,0.6)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-3.5 h-3.5 rounded-full bg-[#d4af37] shrink-0 mt-1"
        />
        <p className="text-gray-200 font-medium text-lg leading-snug text-left">
          {item}
        </p>
      </div>
    </motion.div>
  ))}
</motion.div>


        {/* Elegant Footer Line - Center Radiating */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
          className="mx-auto mt-16 h-1 w-3/5 
                     bg-linear-to-r from-[#f5d67a] via-[#c38a27] to-[#8b5b10] 
                     rounded-full 
                     shadow-[0_0_15px_rgba(212,175,55,0.6),0_0_25px_rgba(195,138,39,0.4)] 
                     origin-center"
        />
      </div>
    </section>
  );
};

export default AboutPage;
