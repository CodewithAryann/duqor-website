"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const highlights = [
  "Luxury Residential Projects",
  "Premium Commercial & Hospitality Interiors",
  "Complete Design-to-Execution Under One Roof",
  "Multi-Disciplinary Team with Decades of Expertise",
  "Trusted by Property Developers, Brands & Homeowners",
];

const services = [
  {
    title: "Residential Interior Design",
    desc: "Bespoke concepts for villas, apartments, and penthouses.",
  },
  {
    title: "Commercial Design",
    desc: "Elegant, sustainable, and functional spaces for modern businesses.",
  },
  {
    title: "Turnkey Fit-Out",
    desc: "From initial concept to project handover.",
  },
  {
    title: "Space Planning",
    desc: "Intelligent design that maximizes comfort and efficiency.",
  },
  {
    title: "Custom Furniture & Décor",
    desc: "Tailored pieces that bring character and luxury to life.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15 },
  }),
};

const Introduction: React.FC = () => {
  return (
    <section className="min-h-screen relative bg-linear-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white overflow-hidden">
      {/* Soft Golden Glow Overlay */}
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
          className="text-4xl md:text-6xl font-bold mb-6 text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"
        >
          Welcome to DUQOR
        </motion.h1>

        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-16"
        >
          Duqor is a Dubai-based interior design and fit-out studio redefining
          modern luxury. We create living and working environments that are
          visually stunning yet functionally seamless. Every project is a story —
          crafted through collaboration, creativity, and craftsmanship that
          reflects your lifestyle and aspirations.
        </motion.p>

        {/* Highlights */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              whileHover={{ scale: 1.05, rotate: 0.5 }}
              className="bg-[#111] border border-[#2c2c2c] hover:border-[#d4af37] rounded-2xl p-6 shadow-lg hover:shadow-[0_0_20px_rgba(194,161,88,0.3)] transition-all duration-500"
            >
              <div className="flex items-center gap-4">
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
                  className="w-5 h-5 rounded-full bg-[#d4af37] shrink-0"
                />
                <p className="text-gray-200 font-medium text-lg leading-snug text-left">
                  {item}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-[#111] border border-[#2c2c2c] hover:border-[#d4af37] rounded-2xl p-8 shadow-lg hover:shadow-[0_0_25px_rgba(194,161,88,0.3)] transition-all duration-500 text-left"
            >
              <h3 className="text-xl font-semibold text-[#d4af37] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-5">{service.desc}</p>
              <button className="text-[#d4af37] flex items-center gap-2 hover:gap-3 transition-all font-medium">
                Learn More <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "60%" }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mx-auto mt-20 h-0.5 bg-linear-to-r from-transparent via-[#d4af37] to-transparent"
        />
      </div>
    </section>
  );
};

export default Introduction;
