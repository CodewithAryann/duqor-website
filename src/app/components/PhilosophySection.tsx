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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
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
  Our Design Philosophy
</motion.h2>


          <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed mt-4">
  At{" "}
  <span className="font-serif font-semibold
                   bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]
                   bg-clip-text text-transparent
                   drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
    DUQOR
  </span>
  , design transcends the visual — it becomes experiential. We craft interiors
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative group bg-[#111] border border-[#2a2a2a] hover:border-[#d4af67]/70
                         rounded-2xl p-8 overflow-hidden transition-all duration-500 shadow-md hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
            >
              {/* Accent line with gold gradient */}
              <motion.div
                className="h-1 w-16 mb-6 rounded-full bg-linear-to-r from-[#f5d67a] via-[#c38a27] to-[#8b5b10] shadow-[0_0_8px_rgba(212,175,55,0.6),0_0_16px_rgba(195,138,39,0.4)] origin-left"
                whileHover={{ scaleX: 1.5 }}
                transition={{ duration: 0.4 }}
              />

              {/* Heading with gradient text */}
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="text-2xl font-semibold mb-3 font-serif
                           bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]
                           bg-clip-text text-transparent
                           drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]
                           transition-colors duration-300 group-hover:text-[#f5d67a]"
              >
                {item.title}
              </motion.h3>

              <p className="text-gray-300 leading-relaxed">{item.description}</p>

              {/* Subtle gold shimmer overlay */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100
                           bg-linear-to-r from-transparent via-[#c2a158]/10 to-transparent rounded-2xl"
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Decorative footer line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
          className="mx-auto mt-20 h-1 w-3/5 
                     bg-linear-to-r from-[#f5d67a] via-[#c38a27] to-[#8b5b10]
                     rounded-full shadow-[0_0_15px_rgba(212,175,55,0.6),0_0_25px_rgba(195,138,39,0.4)]
                     origin-center"
        />
      </div>
    </section>
  );
};

export default DesignPhilosophy;
