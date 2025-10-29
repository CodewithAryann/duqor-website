"use client";
import React, { useState } from "react";
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
      "https://images.unsplash.com/photo-1600585154203-72b9d9a95b31?w=1200",
      "https://images.unsplash.com/photo-1600585154203-72b9d9a95b31?w=1200",
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
      "https://images.unsplash.com/photo-1541542684-4a058a0b77a5?w=1200",
    ],
  },
];

const ProjectPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Our Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center text-white p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm tracking-wide uppercase text-[#c2a158]">
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
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-black">
            Want to create something extraordinary?
          </h2>
          <button className="bg-[#c2a158] text-white px-10 py-3 rounded-full font-medium hover:bg-[#b08e47] transition-all duration-300">
            Get a Free Consultation
          </button>
        </motion.div>
      </div>

      {/* Modal for Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden relative flex flex-col"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white z-10">
                <h3 className="text-2xl font-semibold text-gray-900">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-600 hover:text-gray-900 text-xl"
                >
                  ✕
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 space-y-4 overflow-y-auto max-h-[75vh] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                <p className="text-gray-700">{selectedProject.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  {selectedProject.gallery.map((img, i) => (
                    <motion.img
                      key={i}
                      src={img}
                      alt={`${selectedProject.title} ${i}`}
                      className="rounded-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
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
