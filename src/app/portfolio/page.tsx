"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Private Villa – Palm Jumeirah",
    description:
      "Modern luxury interiors featuring Italian marble, natural wood accents, and entirely bespoke furniture pieces.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600",
  },
  {
    title: "Boutique Café – City Walk",
    description:
      "Contemporary urban design showcasing warm natural textures, ambient lighting, and inviting social spaces.",
    image:
      "https://images.unsplash.com/photo-1598300051089-5c88a6fbe7d2?w=1600",
  },
  {
    title: "Corporate Office – Downtown Dubai",
    description:
      "A sleek, minimalist workspace emphasizing natural light, collaborative zones, and strong brand presence.",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1600",
  },
  {
    title: "Penthouse Apartment – Dubai Marina",
    description:
      "High-end finishes, integrated smart home automation, and carefully curated art-led décor throughout.",
    image:
      "https://images.unsplash.com/photo-1618213837799-25d4b2abf8a6?w=1600",
  },
];

const PortfolioPage: React.FC = () => {
  return (
    <section className="relative bg-gray-50 py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Our <span className="text-[#c2a158]">Portfolio</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A curated selection of our signature luxury projects across the UAE.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700"
            >
              <div className="relative w-full h-80 overflow-hidden">
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
                <h3 className="text-2xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-200">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
