"use client";

import React from "react";
import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
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
    link: "/residential",
    img: "/images/intro/img1.png",
  },
  {
    title: "Commercial Interiors",
    desc: "Redefining Workspaces with Purpose.",
    highlights: [
      "Workspace planning and brand-aligned aesthetics",
      "Optimized lighting and spatial flow",
      "Focus on durability and long-term value",
    ],
    link: "/commercial",
    img: "/images/intro/img2.png",
  },
  {
    title: "Hospitality Interiors",
    desc: "Crafting Hospitality with Heart",
    highlights: [
      "Bespoke ambiance creation",
      "Custom furniture and décor for hospitality",
      "Guest-focused design experience",
    ],
    link: "/hospitality",
    img: "/images/intro/img3.png",
  },
  {
    title: "Retail Interiors",
    desc: "Designing Retail Experiences That Sell.",
    highlights: [
      "Strategic product display layouts",
      "Lighting and signage integration",
      "Customer flow and zoning optimization",
    ],
    link: "/retail",
    img: "/images/intro/img4.png",
  },
];

// Optimized fade-up variant for all cards
const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Introduction: React.FC = () => {
  return (
    <>
      <section className="min-h-screen relative bg-linear-to-b from-[#0a0a0a] via-[#121212] to-[#0a0a0a] text-white overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent_75%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
          {/* Heading */}
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative text-4xl md:text-5xl font-serif font-bold tracking-wide leading-tight
                       bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]
                       bg-clip-text text-transparent
                       drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]
                       [text-shadow:0_0_6px_rgba(255,220,120,0.5),
                                    0_0_14px_rgba(195,138,39,0.4),
                                    0_0_24px_rgba(139,91,16,0.3)]"
          >
            Welcome to DUQOR
          </motion.h3>

          {/* Intro Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed md:leading-loose max-w-3xl mx-auto mb-12 px-4"
          >
            Duqor is a Dubai-based interior design and fit-out studio redefining modern
            luxury with sustainability at its heart. Each space balances beauty,
            function, and environmental responsibility — a harmony of art, architecture,
            and innovation inspired by your lifestyle.
          </motion.p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-linear-to-br from-[#1e1e1e] via-[#2a2a2a] to-[#151515] border border-[#2c2c2c] hover:border-[#d4af37]/60 rounded-2xl shadow-md flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
              >
                {/* Image */}
                <div className="overflow-hidden rounded-t-2xl h-48 sm:h-52 md:h-56 lg:h-48">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={400}
                    height={240}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 justify-between p-6">
                  {/* Title & Description */}
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * i }}
                      className="text-xl sm:text-lg md:text-xl font-serif font-semibold
                                 bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]
                                 bg-clip-text text-transparent
                                 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]
                                 mb-2"
                    >
                      {service.title}
                    </motion.h3>

                    <p className="text-gray-300 mb-4 text-sm sm:text-base">{service.desc}</p>

                    <ul className="space-y-2">
                      {service.highlights.map((point, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] mt-1 shrink-0 animate-pulse"></span>
                          <span className="text-gray-300 text-sm sm:text-base leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Learn More Button */}
                  <Link href={service.link} className="mt-4 block">
      <button className="w-full text-sm font-semibold cursor-pointer text-black bg-linear-to-b from-[#f5d67a] via-[#c38a27] to-[#8b5b10] rounded-full py-2 hover:scale-105 transition">
        Learn {service.title}
      </button>
    </Link>

                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
            className="mx-auto mt-20 h-1 w-3/5 
                       bg-linear-to-r from-[#f5d67a] via-[#c38a27] to-[#8b5b10] 
                       rounded-full 
                       shadow-[0_0_15px_rgba(212,175,55,0.6),0_0_25px_rgba(195,138,39,0.4)] 
                       origin-center"
          />
        </div>
      </section>
    </>
  );
};

export default Introduction;
