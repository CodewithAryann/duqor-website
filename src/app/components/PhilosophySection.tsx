"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const philosophies = [
  {
    title: "Simplicity with Substance",
    description:
      "Clean architectural lines, rich premium materials, and intentional detailing that speaks volumes through restraint.",
  },
  {
    title: "Luxury through Experience",
    description:
      "Comfort and elegance that authentically resonate with your lifestyle, creating spaces that feel both opulent and inviting.",
  },
  {
    title: "Innovation in Execution",
    description:
      "Smart technology integration, sustainable practices, and precision craftsmanship that set new standards in luxury interiors.",
  },
];

const DesignPhilosophy: React.FC = () => {
  return (
    <section
      id="philosophy"
      className="relative py-28 bg-linear-to-b from-[#0a0a0a] via-[#141414] to-[#0a0a0a] text-white overflow-hidden"
    >
      {/* Background image with golden glow overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600"
          alt="Luxury interior background"
          fill
          className="object-cover opacity-20"
          unoptimized
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,161,88,0.3),transparent_70%)]"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-linear-to-r text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.5)] bg-clip-text">
            Our Design Philosophy
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
            At <span className="font-semibold text-[#d4af37]">DUQOR</span>, design
            transcends the visual — it becomes experiential. We craft interiors
            that merge refined aesthetics, cultural context, and contemporary
            sophistication, transforming every environment into an extension of
            how you live, work, and inspire.
          </p>
        </motion.div>

        {/* Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {philosophies.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative group bg-[#111] border border-[#2a2a2a] hover:border-[#d4af37] rounded-2xl p-8 transition-all duration-500 overflow-hidden"
            >
              {/* Accent line animation */}
              <motion.div
                className="h-1 w-16 bg-[#d4af37] mb-6"
                whileHover={{ width: "5rem" }}
                transition={{ duration: 0.4 }}
              />

              <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-[#d4af37] transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>

              {/* Subtle golden shimmer overlay */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-r from-transparent via-[#c2a158]/5 to-transparent rounded-2xl"
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Decorative underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "60%" }}
          transition={{ duration: 1.2 }}
          className="mx-auto mt-20 h-0.5 bg-linear-to-r from-transparent via-[#d4af37] to-transparent"
        />
      </div>
    </section>
  );
};

export default DesignPhilosophy;
