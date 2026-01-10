"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Residential Interiors",
    desc: "Where Luxury Meets Comfort.",
    highlights: [
      "Tailor-made luxury design concepts",
      "Premium material and furniture selection",
      "End-to-end project management",
    ],
    link: "/residential-renovation-in-dubai",
    img: "/images/portfolio/project-2/pic-1.png",
  },
  {
    title: "Commercial Interiors",
    desc: "Redefining Workspaces with Purpose.",
    highlights: [
      "Workspace planning and brand-aligned aesthetics",
      "Optimized lighting and spatial flow",
      "Focus on durability and long-term value",
    ],
    link: "/commercial-renovation-in-dubai",
    img: "/images/portfolio/project-3/pic-1.png",
  },
  {
    title: "Hospitality Interiors",
    desc: "Crafting Hospitality with Heart.",
    highlights: [
      "Bespoke ambiance creation",
      "Custom furniture and décor for hospitality",
      "Guest-focused design experience",
    ],
    link: "/hospitality-renovation-in-dubai",
    img: "/images/portfolio/project-5/pic-9.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Introduction: React.FC = () => {
  return (
    <section className="min-h-screen relative bg-linear-to-b from-[#0a0a0a] via-[#121212] to-[#0a0a0a] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-serif font-bold tracking-wide
                     bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]
                     bg-clip-text text-transparent mb-6"
        >
          Welcome to DUQOR
        </motion.h3>

        {/* Intro Text */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed
                     max-w-3xl mx-auto mb-16 px-4"
        >
          Duqor is a Dubai-based interior design and fit-out studio redefining modern
          luxury with sustainability at its heart. Each space balances beauty,
          function, and environmental responsibility — a harmony of art,
          architecture, and innovation inspired by your lifestyle.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group w-full max-w-[420px]
                         bg-linear-to-br from-[#1e1e1e] via-[#2a2a2a] to-[#151515]
                         border border-[#2c2c2c] hover:border-[#d4af37]/60
                         rounded-2xl shadow-lg overflow-hidden
                         transition-all duration-300
                         hover:-translate-y-2
                         hover:shadow-[0_25px_50px_rgba(0,0,0,0.65)]"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading={i === 0 ? "eager" : "lazy"}
                  priority={i === 0}
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-6 text-left">
                <div>
                  <h3
                    className="text-xl font-serif font-semibold mb-2
                               bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]
                               bg-clip-text text-transparent"
                  >
                    {service.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4">
                    {service.desc}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.highlights.map((point, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="w-2.5 h-2.5 mt-1 rounded-full bg-[#d4af37]" />
                        <span className="text-gray-300 text-sm">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link href={service.link}>
                  <button
                    className="w-full text-sm font-semibold text-black
                               bg-linear-to-b from-[#f5d67a] via-[#c38a27] to-[#8b5b10]
                               rounded-full py-2.5
                               transition-transform duration-300
                               hover:scale-105"
                  >
                    Explore {service.title}
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-20 h-1 w-3/5
                     bg-linear-to-r from-[#f5d67a] via-[#c38a27] to-[#8b5b10]
                     rounded-full shadow-[0_0_15px_rgba(212,175,55,0.6)]"
        />
      </div>
    </section>
  );
};

export default Introduction;
