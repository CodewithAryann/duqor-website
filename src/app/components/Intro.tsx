"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
    img: "/images/intro/residential.png",
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
    img: "/images/intro/commercial.png",
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
    img: "/images/intro/hospitality.png",
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
    img: "/images/intro/retail.png",
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
    <section className="min-h-screen relative bg-linear-to-b from-[#0a0a0a] via-[#121212] to-[#0a0a0a] text-white overflow-hidden">
      {/* Background Glow Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.25),transparent_75%)]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
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
  className="text-center text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed md:leading-loose max-w-3xl mx-auto mb-12 px-4"
>
  Duqor is a Dubai-based interior design and fit-out studio redefining modern
  luxury with sustainability at its heart. Each space we design balances
  beauty, function, and environmental responsibility — a harmony of art,
  architecture, and innovation inspired by your lifestyle.
</motion.p>


        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              whileHover={{
                scale: 1.06,
                y: -8,
                boxShadow:
                  "0 0 30px rgba(212,175,55,0.25), 0 0 15px rgba(212,175,55,0.15)",
              }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-linear-to-br from-[#1e1e1e] via-[#2a2a2a] to-[#151515] border border-[#2c2c2c] hover:border-[#d4af37]/60 rounded-2xl shadow-md flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={400}
                  height={240}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Title */}
                <h3 className="text-xl font-semibold text-[#d4af37] mb-2 group-hover:text-[#f5d878] transition-colors">
                  {service.title}
                </h3>

                {/* Description + Highlights */}
                <div className="flex-1 flex flex-col justify-start">
                  <p className="text-gray-300 mb-4 text-sm">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.highlights.map((point, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] mt-1 shrink-0 animate-pulse"></span>
                        <span className="text-gray-300 text-sm leading-snug">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Button */}
                <Link
                  href={service.link}
                  className="mt-6 block"
                  aria-label={` ${service.title}`}
                >
                  <button className="w-full text-center px-4 py-2 bg-[#d4af37] text-black font-medium rounded-md hover:bg-[#f2cf63] transition-all cursor-pointer flex items-center justify-center gap-2">
                    {" "}
                    <span className="font-semibold">{service.title}</span>
                    <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
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
