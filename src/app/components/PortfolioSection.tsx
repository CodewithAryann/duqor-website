'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Project {
  title: string;
  images: string[];
}

const featuredProjects: Project[] = [
  {
    title: 'Innovation Hub HQ – City Walk',
    images: [
      '/images/portfolio/project-1/pic-2.png',
      // '/images/portfolio/project-1/pic-3.png',
      // '/images/portfolio/project-1/pic-5.png',
      // '/images/portfolio/project-1/pic-6.png',
      // '/images/portfolio/project-1/pic-7.png',
    ],
  },
  {
    title: 'Private Villa – Palm Jumeirah',
    images: [
      '/images/portfolio/project-2/pic-1.png',
      // '/images/portfolio/project-2/pic-2.png',
      // '/images/portfolio/project-2/pic-4.png',
      // '/images/portfolio/project-2/pic-5.png',
      // '/images/portfolio/project-2/pic-6.png',
    ],
  },
  {
    title: 'Corporate Office – Downtown',
    images: [
      '/images/portfolio/project-3/pic-1.png',
      // '/images/portfolio/project-3/pic-2.png',
      // '/images/portfolio/project-3/pic-3.png',
      // '/images/portfolio/project-3/pic-4.png',
      // '/images/portfolio/project-3/pic-5.png',
      // '/images/portfolio/project-3/pic-6.png',
      // '/images/portfolio/project-3/pic-7.png',
    ],
  },
];

const PortfolioSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState<number>(0);

  const openGallery = (index: number) => {
    setActiveProject(index);
    setActiveImage(0);
  };

  const closeGallery = () => setActiveProject(null);

  const prevImage = () => {
    if (activeProject === null) return;
    setActiveImage((prev) =>
      prev === 0 ? featuredProjects[activeProject].images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    if (activeProject === null) return;
    setActiveImage((prev) =>
      prev === featuredProjects[activeProject].images.length - 1 ? 0 : prev + 1
    );
  };

  const goldGradient = "bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]";

  return (
    <section
      id="portfolio"
      className="relative py-24 bg-linear-to-b from-black via-[#111] to-black text-white overflow-hidden"
    >
      {/* Subtle radial gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,161,88,0.08)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`relative text-4xl md:text-5xl font-serif font-bold ${goldGradient}
                       bg-clip-text text-transparent drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]
                       [text-shadow:0_0_6px_rgba(255,220,120,0.5),
                                    0_0_14px_rgba(195,138,39,0.4),
                                    0_0_24px_rgba(139,91,16,0.3)]
                       mb-4`}
          >
            Our <span className="font-semibold text-transparent bg-clip-text">Portfolio</span>
          </motion.h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Experience the harmony of innovation and luxury through our signature projects.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(194,161,88,0.15)]
                         hover:shadow-[0_0_50px_rgba(194,161,88,0.25)] transition-all duration-700"
            >
              <div className="relative w-full h-72 md:h-80 overflow-hidden">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  unoptimized
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/60 transition-all duration-700" />
              </div>

              {/* Project Info */}
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <h3 className={`text-xl font-semibold mb-2 ${goldGradient} bg-clip-text text-transparent
                               drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]
                               group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]
                               transition-all duration-300`}>
                  {project.title}
                </h3>
               <button
  onClick={() => openGallery(idx)}
  className={`relative flex items-center gap-2 ${goldGradient} bg-clip-text text-transparent text-sm`}
>
  View Details
  <ArrowRight size={16} />
  <span className="absolute left-0 bottom-0 w-0 h-px bg-linear-to-r from-[#e7c675] via-[#c38a27] to-[#8b5b10] transition-all group-hover:w-full"></span>
</button>

              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#d4af37]/80 rounded-2xl transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* View Full Portfolio Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/portfolio"
            className={`inline-flex items-center gap-2 ${goldGradient} text-black font-semibold px-8 py-3 rounded-full
                       shadow-[0_0_20px_rgba(194,161,88,0.4)] hover:shadow-[0_0_35px_rgba(194,161,88,0.6)]
                       hover:scale-105 transition-all duration-300`}
          >
            View Full Portfolio
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>

      {/* Lightbox Gallery */}
      <AnimatePresence>
        {activeProject !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center px-4 py-10"
          >
            <button
              onClick={closeGallery}
              className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-white/10 transition-all"
            >
              <X size={28} />
            </button>

            {/* Image Display */}
            <div className="relative w-full max-w-4xl h-[60vh] md:h-[70vh]">
              <Image
                src={featuredProjects[activeProject].images[activeImage]}
                alt={featuredProjects[activeProject].title}
                fill
                className="object-contain"
                unoptimized
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/10 transition-all"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/10 transition-all"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            <h3 className={`text-2xl md:text-3xl mt-6 font-semibold ${goldGradient} bg-clip-text text-transparent
                           drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]`}>
              {featuredProjects[activeProject].title}
            </h3>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
