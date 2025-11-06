"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

const projectCategories = [
  {
    title: "Residential Interiors",
    desc: "Elegant and functional spaces designed for modern living.",
    projects: [
      {
        title: 'Private Villa – Palm Jumeirah',
        images: [
          '/images/portfolio/project-2/pic-1.png',
          '/images/portfolio/project-2/pic-2.png',
          '/images/portfolio/project-2/pic-3.png',
          '/images/portfolio/project-2/pic-4.png',
          '/images/portfolio/project-2/pic-5.png',
          '/images/portfolio/project-2/pic-6.png',
          '/images/portfolio/project-2/pic-8.png',
          '/images/portfolio/project-2/pic-9.png',
          '/images/portfolio/project-2/pic-11.png',
          '/images/portfolio/project-2/pic-12.png',
          '/images/portfolio/project-2/pic-13.png',
          '/images/portfolio/project-2/pic-14.png',
        ],
      },
      {
        title: "Seaside Villa – Jumeirah Bay",
        images: [
          "/images/portfolio/residential/project-2/pic-1.png",
          "/images/portfolio/residential/project-2/pic-2.png",
          "/images/portfolio/residential/project-2/pic-3.png",
          "/images/portfolio/residential/project-2/pic-4.png",
          "/images/portfolio/residential/project-2/pic-5.png",
          "/images/portfolio/residential/project-2/pic-6.png",
          "/images/portfolio/residential/project-2/pic-7.png",
          "/images/portfolio/residential/project-2/pic-8.png",
        ],
      },
      {
        title: "Signature Villa – The World Islands",
        images: [
          "/images/portfolio/residential/project-3/pic-1.png",
          "/images/portfolio/residential/project-3/pic-2.png",
          "/images/portfolio/residential/project-3/pic-3.png",
          "/images/portfolio/residential/project-3/pic-4.png",
          "/images/portfolio/residential/project-3/pic-5.png",
          "/images/portfolio/residential/project-3/pic-6.png",
        ],
      },
    ],
  },
  {
    title: "Commercial Interiors",
    desc: "Inspiring workplaces that enhance creativity and efficiency.",
    projects: [
      {
        title: 'Innovation Hub HQ – City Walk',
        images: [
          '/images/portfolio/project-1/pic-1.png',
          '/images/portfolio/project-1/pic-2.png',
          '/images/portfolio/project-1/pic-3.png',
          '/images/portfolio/project-1/pic-4.png',
          '/images/portfolio/project-1/pic-5.png',
          '/images/portfolio/project-1/pic-6.png',
          '/images/portfolio/project-1/pic-7.png',
        ],
      },
      {
        title: 'Corporate Office – Downtown',
        images: [
          '/images/portfolio/project-3/pic-1.png',
          '/images/portfolio/project-3/pic-2.png',
          '/images/portfolio/project-3/pic-3.png',
          '/images/portfolio/project-3/pic-4.png',
          '/images/portfolio/project-3/pic-5.png',
          '/images/portfolio/project-3/pic-6.png',
          '/images/portfolio/project-3/pic-7.png',
        ],
      },
      {
        title: 'Corporate Office – Downtown',
        images: [
          '/images/portfolio/commercial/project-3/pic-1.png',
          '/images/portfolio/commercial/project-3/pic-2.png',
          '/images/portfolio/commercial/project-3/pic-3.png',
          '/images/portfolio/commercial/project-3/pic-4.png',
          '/images/portfolio/commercial/project-3/pic-5.png',
          '/images/portfolio/commercial/project-3/pic-6.png',
          '/images/portfolio/commercial/project-3/pic-7.png',
          '/images/portfolio/commercial/project-3/pic-8.png',
          '/images/portfolio/commercial/project-3/pic-9.png',
          '/images/portfolio/commercial/project-3/pic-10.png',
        ],
      },
    ],
  },
  {
    title: "Hospitality Interiors",
    desc: "Immersive guest experiences that balance luxury and comfort.",
    projects: [
      {
        title: "Luma Boutique Hotel",
        images: [
          "/images/portfolio/hospitality/project-1/pic-1.png",
          "/images/portfolio/hospitality/project-1/pic-2.png",
          "/images/portfolio/hospitality/project-1/pic-3.png",
          "/images/portfolio/hospitality/project-1/pic-4.png",
          "/images/portfolio/hospitality/project-1/pic-5.png",
        ],
      },
      {
        title: "Serenno Suites",
        images: [
          "/images/portfolio/hospitality/project-2/pic-1.png",
          "/images/portfolio/hospitality/project-2/pic-2.png",
          "/images/portfolio/hospitality/project-2/pic-3.png",
          "/images/portfolio/hospitality/project-2/pic-4.png",
          "/images/portfolio/hospitality/project-2/pic-5.png",
        ],
      },
      {
        title: "Maison Verra Hotel",
        images: [
          "/images/portfolio/hospitality/project-3/pic-1.png",
          "/images/portfolio/hospitality/project-3/pic-2.png",
          "/images/portfolio/hospitality/project-3/pic-3.png",
          "/images/portfolio/hospitality/project-3/pic-4.png",
          "/images/portfolio/hospitality/project-3/pic-5.png",
          "/images/portfolio/hospitality/project-3/pic-6.png",
          "/images/portfolio/hospitality/project-3/pic-7.png",
        ],
      },
    ],
  },
  {
    title: "Retail Interiors",
    desc: "Immersive guest experiences that balance luxury and comfort.",
    projects: [
      {
        title: "Verra Luxe",
        images: [
          "/images/portfolio/retail/project-1/pic-1.png",
          "/images/portfolio/retail/project-1/pic-2.png",
          "/images/portfolio/retail/project-1/pic-3.png",
          "/images/portfolio/retail/project-1/pic-4.png",
        ],
      },
      {
        title: "The Atelier",
        images: [
          "/images/portfolio/retail/project-2/pic-1.png",
          "/images/portfolio/retail/project-2/pic-2.png",
          "/images/portfolio/retail/project-2/pic-3.png",
          "/images/portfolio/retail/project-2/pic-4.png",
          "/images/portfolio/retail/project-2/pic-5.png",
          "/images/portfolio/retail/project-2/pic-6.png",
        ],
      },
    ],
  },
];

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState<{
    title: string;
    images: string[];
  } | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const openGallery = (project: { title: string; images: string[] }) => {
    setActiveProject(project);
    setCurrentImage(0);
  };

  const closeGallery = () => setActiveProject(null);
  const nextImage = () =>
    setCurrentImage((prev) =>
      activeProject ? (prev + 1) % activeProject.images.length : 0
    );
  const prevImage = () =>
    setCurrentImage((prev) =>
      activeProject
        ? (prev - 1 + activeProject.images.length) % activeProject.images.length
        : 0
    );

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
          Our Signature Projects
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          From luxurious residences to visionary commercial spaces, explore the
          artistry that defines Duqor.
        </p>
      </motion.div>

      {projectCategories.map((category, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto mb-24"
        >
          <h2 className="text-3xl font-semibold mb-2 text-[#d4af37] text-center md:text-left">
            {category.title}
          </h2>
          <p className="text-gray-300 mb-8 text-center md:text-left">
            {category.desc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {category.projects.map((project, j) => (
              <motion.div
                key={j}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 150 }}
                className="rounded-2xl overflow-hidden border border-[#2c2c2c] bg-[#121212] hover:border-[#d4af37]/50 transition-all cursor-pointer"
                onClick={() => openGallery(project)}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-56 object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 hover:bg-black/15 transition-all"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#d4af37] mb-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-300 text-sm">
                    <span className="mr-1">View Gallery</span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-[#d4af37]"
                    >
                      <ArrowRight size={14} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Image Gallery Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close button */}
            <button
              onClick={closeGallery}
              className="absolute top-6 right-6 text-gray-300 hover:text-white transition"
            >
              <X size={28} />
            </button>

            <div className="max-w-5xl w-full flex flex-col items-center">
              <h3 className="text-2xl font-semibold text-[#d4af37] mb-6 text-center">
                {activeProject.title}
              </h3>
              <div className="relative w-full flex items-center justify-center">
                {/* Left arrow */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 md:left-6 text-gray-300 hover:text-[#d4af37] transition"
                >
                  <ArrowLeft size={36} />
                </button>

                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="w-full flex justify-center"
                >
                  <Image
                    src={activeProject.images[currentImage]}
                    alt={`${activeProject.title} image ${currentImage + 1}`}
                    width={900}
                    height={500}
                    className="rounded-2xl object-cover shadow-lg"
                  />
                </motion.div>

                {/* Right arrow */}
                <button
                  onClick={nextImage}
                  className="absolute right-2 md:right-6 text-gray-300 hover:text-[#d4af37] transition"
                >
                  <ArrowRight size={36} />
                </button>
              </div>

              {/* Small caption */}
              <p className="text-gray-400 text-sm mt-4">
                Image {currentImage + 1} of {activeProject.images.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
