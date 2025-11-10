"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaComments,
  FaPalette,
  FaMoneyCheckAlt,
  FaTools,
  FaHandshake,
} from "react-icons/fa";

const processSteps = [
  {
    title: "Discovery & Consultation",
    description:
      "We begin with an in-depth consultation — listening to your aspirations, understanding your functional needs, and exploring your design preferences to form the foundation of your dream space.",
    icon: <FaComments />,
  },
  {
    title: "Concept Design",
    description:
      "Our designers craft immersive mood boards, conceptual layouts, and photorealistic 3D renders, translating your ideas into refined visual narratives that reflect your personality and lifestyle.",
    icon: <FaPalette />,
  },
  {
    title: "Budgeting & Material Selection",
    description:
      "We provide transparent cost breakdowns with luxury material selections — balancing aesthetic excellence with practicality to achieve enduring value and sophistication.",
    icon: <FaMoneyCheckAlt />,
  },
  {
    title: "Execution & Project Management",
    description:
      "With precision craftsmanship, in-house joinery, and meticulous site coordination, every detail is executed to perfection under strict timelines and quality standards.",
    icon: <FaTools />,
  },
  {
    title: "Handover & Aftercare",
    description:
      "We deliver a seamless handover experience complemented by post-completion care — ensuring every detail of your bespoke interior continues to shine over time.",
    icon: <FaHandshake />,
  },
];

const OurProcess: React.FC = () => {
  return (
    <section
      id="process"
      className="relative py-28 bg-linear-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] text-white overflow-hidden"
    >
      {/* Subtle golden background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,161,88,0.3),transparent_70%)]"
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-24 px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-4xl md:text-5xl font-serif font-bold
                     leading-[1.1] pb-1
                     bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]
                     bg-clip-text text-transparent
                     drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]
                     [text-shadow:0_0_6px_rgba(255,220,120,0.5),
                                  0_0_14px_rgba(195,138,39,0.4),
                                  0_0_24px_rgba(139,91,16,0.3)]"
        >
          Our Design <span className="font-semibold text-[#d4af37]">Process</span>
        </motion.h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
          Every masterpiece begins with a story — our 5-stage journey from concept to completion.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto px-6 lg:px-10">
        {/* Vertical golden timeline line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute left-6 top-0 w-0.5 bg-linear-to-b from-[#d4af37] to-transparent"
        />

        <div className="space-y-20 relative">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row md:items-start group"
            >
              {/* Timeline icon */}
              <div className="relative z-10 shrink-0 mr-8 md:mr-10">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-14 h-14 flex items-center justify-center rounded-full
                             bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]
                             text-black text-2xl shadow-[0_0_25px_rgba(212,175,55,0.6)]"
                >
                  {step.icon}
                </motion.div>
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0.5 h-20 bg-linear-to-b from-[#c2a158]/40 to-transparent" />
              </div>

              {/* Content card */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 bg-[#111] border border-[#2c2c2c]
                           hover:border-[#d4af37]/70 p-8 rounded-2xl shadow-lg
                           hover:shadow-[0_0_25px_rgba(194,161,88,0.3)] transition-all duration-500 md:w-[80%]"
              >
                <h3 className="text-2xl font-semibold mb-3
                               bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]
                               bg-clip-text text-transparent
                               drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]
                               group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]
                               transition-all duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>

                {/* Decorative underline */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-0.5 mt-5 bg-linear-to-r from-transparent via-[#d4af37] to-transparent rounded-full"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
