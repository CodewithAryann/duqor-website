"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaComments, FaPalette, FaMoneyCheckAlt, FaTools, FaHandshake } from "react-icons/fa";

const processSteps = [
  {
    title: "Discovery & Consultation",
    description:
      "Understanding your goals, lifestyle aspirations, and vision for the space through in-depth conversations and site analysis.",
    icon: <FaComments className="text-[#c2a158] text-3xl h-4" />,
  },
  {
    title: "Concept Design",
    description:
      "Developing comprehensive mood boards, detailed space layouts, and photorealistic 3D renders that bring your vision to life.",
    icon: <FaPalette className="text-[#c2a158] text-3xl h-4" />,
  },
  {
    title: "Budgeting & Material Selection",
    description:
      "Providing transparent Bills of Quantities with carefully curated luxury-grade material options that align with your investment.",
    icon: <FaMoneyCheckAlt className="text-[#c2a158] text-3xl h-4" />,
  },
  {
    title: "Execution & Project Management",
    description:
      "Controlled, precisely coordinated, and quality-driven implementation with regular updates and on-site supervision.",
    icon: <FaTools className="text-[#c2a158] text-3xl h-4" />,
  },
  {
    title: "Handover & Aftercare",
    description:
      "Seamless turnover with comprehensive post-completion support and quality assurance to ensure your complete satisfaction.",
    icon: <FaHandshake className="text-[#c2a158] text-3xl h-4" />,
  },
];

const OurProcess: React.FC = () => {
  return (
    <section id="process" className="relative bg-gray-50 py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 opacity-60 pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Our <span className="text-[#c2a158]">Process</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Five Stages to Perfection
          </p>
        </motion.div>

        {/* Timeline layout */}
        <div className="relative border-l-2 border-[#c2a158]/40 pl-10 space-y-16">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[1.6rem] top-2 w-8 h-8 flex items-center justify-center bg-white border-2 border-[#c2a158] rounded-full shadow-md group-hover:scale-110 transition-transform">
                {step.icon}
              </div>

              {/* Content */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-[#c2a158] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
