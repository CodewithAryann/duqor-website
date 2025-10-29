"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const featuredProjects = [
  {
    title: "Private Villa – Palm Jumeirah",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600",
  },
  {
    title: "Boutique Café – City Walk",
    image:
      "https://images.unsplash.com/photo-1598300051089-5c88a6fbe7d2?w=1600",
  },
  {
    title: "Corporate Office – Downtown Dubai",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1600",
  },
];

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#c2a158]">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600">
            A curated glimpse into our signature luxury projects.
          </p>
        </motion.div>

        {/* 3 Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700"
            >
              <div className="relative w-full h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-block bg-[#c2a158] text-white px-8 py-3 rounded-full font-medium shadow-md hover:bg-[#b29045] transition-all"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
