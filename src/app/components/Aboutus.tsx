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

const AboutPage: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-50">
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
        >
          About DUQOR
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12"
        >
          DUQOR is a premier UAE-based interior design and fit-out firm dedicated to creating modern, sophisticated, and luxurious spaces that transcend mere aesthetics. We believe exceptional design embodies lifestyle, functionality, and innovation in perfect harmony. Our team of visionary designers, master craftsmen, and experienced project managers delivers comprehensive end-to-end solutions for residential, commercial, retail, and hospitality projects throughout the UAE and GCC markets.
        </motion.p>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white shadow-lg rounded-2xl p-6 flex items-start gap-4 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <span className="inline-block w-4 h-4 bg-[#c2a158] rounded-full mt-1" />
              </div>
              <p className="text-gray-700 font-medium">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
