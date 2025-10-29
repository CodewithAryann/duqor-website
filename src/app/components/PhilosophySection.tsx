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
      className="relative py-28 bg-white overflow-hidden"
    >
      {/* Background image with golden overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800"
          alt="Luxury interior background"
          fill
          className="object-cover opacity-30"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative">
        {/* Intro section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Our <span className="text-[#c2a158]">Design Philosophy</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
            At <span className="font-semibold text-gray-900">DUQOR</span>,
            design transcends the visual — it becomes experiential. We create
            interiors that reflect refined taste, cultural context, and
            contemporary sophistication, transforming spaces into environments
            that resonate with how you live, work, and entertain.
          </p>
        </motion.div>

        {/* Philosophy Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {philosophies.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Accent line */}
              <div className="h-1 w-16 bg-[#c2a158] mb-6 transition-all group-hover:w-20" />

              <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-[#c2a158] transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>

              {/* Subtle hover background effect */}
              <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:bg-[#c2a158]/5 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignPhilosophy;
