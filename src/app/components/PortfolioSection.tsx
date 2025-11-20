"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";

// Dynamic motion imports (ssr: false to avoid hydration mismatch)
const MotionDiv = dynamic(() => import("framer-motion").then((m) => m.motion.div), { ssr: false });
const MotionH2 = dynamic(() => import("framer-motion").then((m) => m.motion.h2), { ssr: false });
const AnimatePresence = dynamic(() => import("framer-motion").then((m) => m.AnimatePresence), { ssr: false });

interface Project {
  title: string;
  cover: string;
  gallery: string[];
}

const featuredProjects: Project[] = [
  {
    title: "Innovation Hub HQ – City Walk",
    cover: "/images/portfolio/project-1/pic-2.png",
    gallery: [
      "/images/portfolio/project-1/pic-2.png",
      "/images/portfolio/project-1/pic-3.png",
      "/images/portfolio/project-1/pic-5.png",
      "/images/portfolio/project-1/pic-6.png",
    ],
  },
  {
    title: "Parkside residence – Palm Jumeirah",
    cover: "/images/portfolio/project-2/pic-1.png",
    gallery: [
      "/images/portfolio/project-2/pic-1.png",
      "/images/portfolio/project-2/pic-2.png",
      "/images/portfolio/project-2/pic-4.png",
      "/images/portfolio/project-2/pic-5.png",
    ],
  },
  {
    title: "Corporate Office – Downtown",
    cover: "/images/portfolio/project-3/pic-1.png",
    gallery: [
      "/images/portfolio/project-3/pic-1.png",
      "/images/portfolio/project-3/pic-2.png",
      "/images/portfolio/project-3/pic-3.png",
      "/images/portfolio/project-3/pic-4.png",
    ],
  },
];

const PortfolioSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState<number>(0);

  const openGallery = (index: number) => {
    console.log("openGallery called, index:", index);
    setActiveProject(index);
    setActiveImage(0);
    // Also print the gallery URLs for this project
    console.log("gallery urls:", featuredProjects[index]?.gallery);
  };

  const closeGallery = () => {
    console.log("closeGallery");
    setActiveProject(null);
  };

  const prevImage = () => {
    if (activeProject === null) return;
    setActiveImage((prev) =>
      prev === 0 ? featuredProjects[activeProject].gallery.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    if (activeProject === null) return;
    setActiveImage((prev) =>
      prev === featuredProjects[activeProject].gallery.length - 1 ? 0 : prev + 1
    );
  };

  const goldGradient =
    "bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]";

  return (
    <section
      id="portfolio"
      className="relative py-24 bg-linear-to-b from-black via-[#111] to-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,161,88,0.08)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* HEADER */}
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <MotionH2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`text-4xl md:text-5xl font-serif font-bold ${goldGradient} bg-clip-text text-transparent`}
          >
            Our Portfolio
          </MotionH2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Experience the harmony of innovation and luxury through our signature projects.
          </p>
        </MotionDiv>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {featuredProjects.map((project, idx) => (
            <MotionDiv
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(194,161,88,0.15)]
                         hover:shadow-[0_0_50px_rgba(194,161,88,0.25)] transition-all"
            >
              <div className="relative w-full h-72 md:h-80 overflow-hidden">
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all" />
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3
                  className={`text-xl font-semibold mb-2 ${goldGradient} bg-clip-text text-transparent`}
                >
                  {project.title}
                </h3>

                <button
                  onClick={() => openGallery(idx)}
                  className={`flex items-center gap-2 ${goldGradient} bg-clip-text text-transparent text-sm`}
                >
                  {/* View Details <ArrowRight size={16} /> */}
                </button>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#d4af37]/80 rounded-2xl transition-all" />
            </MotionDiv>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/portfolio"
            className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold ${goldGradient} text-black shadow-lg`}
          >
            View Full Portfolio <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* LIGHTBOX - DEBUG MODE: plain <img> used so browser requests are visible in network tab */}
      <AnimatePresence>
        {activeProject !== null && (
          <MotionDiv
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center px-4"
          >
            <button
              onClick={closeGallery}
              className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full"
            >
              <X size={28} />
            </button>

            <div className="relative w-full max-w-4xl h-[70vh] bg-transparent flex items-center justify-center">
              {/* DEBUG: plain img tag (bypasses next/image) */}
              <Image
                src={featuredProjects[activeProject].gallery[activeImage]}
                alt={`gallery-${activeImage}`}
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
                onError={(e) => {
                  // show helpful message in console and on page
                  console.error("Image failed to load:", (e.target as HTMLImageElement).src);
                  // optionally show a tiny overlay message
                  const el = document.createElement("div");
                  el.textContent = "Image failed to load (check console/network).";
                  Object.assign(el.style, {
                    color: "white",
                    position: "absolute",
                    left: "16px",
                    top: "16px",
                    background: "rgba(0,0,0,0.6)",
                    padding: "8px",
                    borderRadius: "6px",
                    zIndex: "60",
                  });
                  document.body.appendChild(el);
                }}
              />

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full"
              >
                <ChevronLeft size={32} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            <h3
              className={`text-2xl md:text-3xl mt-6 font-semibold ${goldGradient} bg-clip-text text-transparent`}
            >
              {featuredProjects[activeProject].title}
            </h3>
          </MotionDiv>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
