"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  title: string;
  image: string;
  category: string;
  gallery: string[];
  description: string;
}

const projects: Project[] = [
  {
    title: "Luxury Villa Interior",
    image: "https://images.unsplash.com/photo-1600585154163-4977f3d77c7c?w=1200",
    category: "Residential Design",
    description:
      "A breathtaking villa interior combining modern elegance and natural textures. Designed for comfort, space, and sophistication.",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200",
      "https://images.unsplash.com/photo-1600585154203-72b9d9a95b31?w=1200",
    ],
  },
  {
    title: "Modern Office Space",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200",
    category: "Commercial Design",
    description:
      "A workspace that inspires creativity and productivity, with minimal design and ergonomic furniture.",
    gallery: [
      "https://images.unsplash.com/photo-1590608897129-79da98d159c2?w=1200",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
    ],
  },
  {
    title: "Restaurant Renovation",
    image: "https://images.unsplash.com/photo-1628744448840-7b40b2a7faba?w=1200",
    category: "Hospitality Design",
    description:
      "A luxurious dining experience crafted with warm lighting, rich textures, and a cozy ambiance.",
    gallery: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200",
      "https://images.unsplash.com/photo-1541542684-4a058a0b77a5?w=1200",
    ],
  },
];

const ProjectPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="min-h-screen bg-black text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black opacity-90" />
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight text-[#d4af37]">
            Our Projects
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore a curated selection of our most stunning interior and construction projects,
            where design meets precision.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="group relative overflow-hidden rounded-2xl shadow-[0_0_25px_rgba(212,175,55,0.3)] cursor-pointer"
            >
              <div className="relative w-full h-72">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transform group-hover:scale-110 transition-all duration-700 ease-out"
                  priority={index === 0}
                />
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm tracking-wide uppercase text-[#d4af37]">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
            Want to create something extraordinary?
          </h2>
          <button className="bg-[#d4af37] text-black px-10 py-3 rounded-full font-medium hover:bg-[#b89730] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
            Get a Free Consultation
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-zinc-950 rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden relative flex flex-col border border-[#d4af37]/30"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-[#d4af37]/20 sticky top-0 bg-zinc-950 z-10">
                <h3 className="text-2xl font-semibold text-[#d4af37]">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-[#d4af37] text-xl transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 space-y-4 overflow-y-auto max-h-[75vh] scrollbar-thin scrollbar-thumb-[#d4af37]/40 scrollbar-track-zinc-800">
                <p className="text-gray-300">{selectedProject.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  {selectedProject.gallery.map((img, i) => (
                    <motion.div key={i} whileHover={{ scale: 1.05 }} className="relative w-full h-48">
                      <Image
                        src={img}
                        alt={`${selectedProject.title} ${i}`}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectPage;
