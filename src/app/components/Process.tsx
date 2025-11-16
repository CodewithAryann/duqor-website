"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaComments, FaPalette, FaMoneyCheckAlt, FaTools, FaHandshake } from "react-icons/fa";

const processSteps = [
  {
    title: "Discovery & Consultation",
    description:
      "In-depth consultation to understand your aspirations, functional needs, and design preferences, forming the foundation of your dream space.",
    icon: <FaComments />,
  },
  {
    title: "Concept Design",
    description:
      "Immersive mood boards, conceptual layouts, and photorealistic 3D renders translating ideas into refined visual narratives.",
    icon: <FaPalette />,
  },
  {
    title: "Budgeting & Material Selection",
    description:
      "Transparent cost breakdowns with luxury material selections, balancing aesthetic excellence with practicality.",
    icon: <FaMoneyCheckAlt />,
  },
  {
    title: "Execution & Project Management",
    description:
      "Precision craftsmanship, in-house joinery, and meticulous site coordination ensuring every detail meets quality standards.",
    icon: <FaTools />,
  },
  {
    title: "Handover & Aftercare",
    description:
      "Seamless handover with post-completion care, ensuring every aspect of your bespoke interior continues to shine.",
    icon: <FaHandshake />,
  },
];

const OurProcess: React.FC = () => {
  return (
    <section
      id="process"
      className="relative py-20 md:py-28 bg-linear-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] text-white overflow-hidden"
    >
      {/* Golden glow background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,161,88,0.3),transparent_70%)]"
        aria-hidden="true"
      />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16 md:mb-20 px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-serif font-bold leading-tight
                     bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]
                     bg-clip-text text-transparent
                     drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]"
        >
          Our Design <span className="font-semibold text-[#d4af37]">Process</span>
        </motion.h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-3">
          Every masterpiece begins with a story — our 5-stage journey from concept to completion.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto px-6 lg:px-10">
        {/* Vertical timeline line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute left-6 md:left-8 top-0 w-0.5 bg-linear-to-b from-[#d4af37] to-transparent"
        />

        <div className="space-y-16 md:space-y-20 relative">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row md:items-start group"
            >
              {/* Icon */}
              <div className="relative z-10 shrink-0 mr-6 md:mr-10">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-12 md:w-14 h-12 md:h-14 flex items-center justify-center rounded-full
                             bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]
                             text-black text-xl md:text-2xl shadow-[0_0_20px_rgba(212,175,55,0.6)]"
                >
                  {step.icon}
                </motion.div>
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0.5 h-16 md:h-20 bg-linear-to-b from-[#c2a158]/40 to-transparent" />
              </div>

              {/* Content card */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 bg-[#111] border border-[#2c2c2c]
                           hover:border-[#d4af37]/70 p-6 md:p-8 rounded-2xl shadow-md
                           hover:shadow-[0_0_20px_rgba(194,161,88,0.3)] transition-all duration-500 md:w-[80%]"
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3
                               bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]
                               bg-clip-text text-transparent
                               drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]
                               group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]
                               transition-all duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">{step.description}</p>

                {/* Decorative underline */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "50%" }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-0.5 mt-4 bg-linear-to-r from-transparent via-[#d4af37] to-transparent rounded-full"
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
