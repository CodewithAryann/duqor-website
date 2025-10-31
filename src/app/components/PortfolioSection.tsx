"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featuredProjects = [
  {
    title: "Private Villa – Palm Jumeirah",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600",
  },
  {
    title: "Boutique Café – City Walk",
    image: "https://images.unsplash.com/photo-1598300051089-5c88a6fbe7d2?w=1600",
  },
  {
    title: "Corporate Office – Downtown Dubai",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1600",
  },
];

const PortfolioSection: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="relative py-24 bg-linear-to-b from-black via-[#1a1a1a] to-black text-white overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,161,88,0.08)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Our <span className="text-[#d4af37]">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Experience the harmony of innovation and luxury through our signature projects.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(194,161,88,0.15)] hover:shadow-[0_0_50px_rgba(194,161,88,0.25)] transition-all duration-700"
            >
              {/* Project Image */}
              <div className="relative w-full h-72 md:h-80 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  unoptimized
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/60 transition-all duration-700" />
              </div>

              {/* Project Info */}
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <h3 className="text-xl font-semibold mb-2 tracking-wide">
                  {project.title}
                </h3>

                {/* Subtle hover reveal */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="opacity-0 group-hover:opacity-100 flex items-center gap-2 text-[#d4af37] text-sm transition-all duration-300"
                >
                  <span>View Details</span>
                  <ArrowRight size={16} />
                </motion.div>
              </div>

              {/* Golden border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#d4af37]/80 rounded-2xl transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-[#d4af37] text-black font-semibold px-8 py-3 rounded-full shadow-[0_0_20px_rgba(194,161,88,0.4)] hover:shadow-[0_0_35px_rgba(194,161,88,0.6)] hover:scale-105 transition-all duration-300"
          >
            View Full Portfolio
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
