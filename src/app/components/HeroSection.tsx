"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

// Optimized hero images in WebP format
const images = [
  "/images/hero-section/hero-section-img-1.webp",
  "/images/hero-section/hero-section-img-3.webp",
  "/images/hero-section/hero-section-img-4.webp",
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [particles, setParticles] = useState<{ x: number; y: number }[]>([]);

  // Hero slideshow interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Generate floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 35 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <>

      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Slideshow */}
        {images.map((img, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            animate={{ scale: index === currentImage ? 1.05 : 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
          >
            <Image
              src={img}
              alt={`Hero Slide ${index + 1}`}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
              quality={75}
              placeholder="blur"
              blurDataURL="/images/hero-section/placeholder.png"
            />
          </motion.div>
        ))}

        {/* Golden Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-black/40 via-black/35 to-black/45 z-10" />

        {/* Floating Golden Sparkles (BALL MOTION) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-20 pointer-events-none">
          {particles.map((p, i) => (
            <motion.span
              key={i}
              className="absolute w-0.5 h-0.5 md:w-1 md:h-1 bg-[#d4af37] rounded-full opacity-60"
              style={{ top: p.y, left: p.x }}
              animate={{
                y: [p.y, p.y - 80, p.y], // vertical float
                opacity: [0.2, 1, 0.2],   // fade in/out
                scale: [1, 1.7, 1],       // subtle size change
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-30 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <motion.img
            src="/images/copper-logo.png"
            alt="Duqor Logo"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-40 md:w-48 mx-auto mb-6 drop-shadow-[0_0_25px_rgba(212,175,55,0.5)]"
          />

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif font-bold tracking-wide leading-tight
                       bg-clip-text text-transparent bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]
                       drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]
                       [text-shadow:0_0_6px_rgba(255,220,120,0.5),
                                    0_0_14px_rgba(195,138,39,0.4),
                                    0_0_24px_rgba(139,91,16,0.3)]"
          >
            Where Elegance Inspires Luxury
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-2xl mb-12 max-w-2xl font-light text-gray-200 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          >
            Transforming spaces into elegant retreats of style and comfort across the UAE and GCC.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            <Link
              href="/portfolio"
              aria-label="Explore Projects"
              className="px-6 md:px-10 py-4 md:py-3 rounded-full font-serif font-semibold text-lg tracking-wide text-black
                         bg-linear-to-b from-[#f5d67a] via-[#c38a27] to-[#8b5b10]
                         shadow-[0_4px_20px_rgba(195,138,39,0.6)]
                         hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.8)]
                         transition-all duration-300
                         inline-flex items-center justify-center min-h-12 min-w-[120px]"
            >
              Explore Projects
            </Link>

            <Link
              href="/contact"
              aria-label="Contact Us"
              className="px-6 md:px-10 py-4 md:py-3 rounded-full font-serif font-semibold text-lg tracking-wide text-black
                         bg-linear-to-b from-[#f5d67a] via-[#c38a27] to-[#8b5b10]
                         border-2 border-[#c38a27]
                         shadow-[0_4px_20px_rgba(195,138,39,0.5)]
                         hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.8)]
                         transition-all duration-300
                         inline-flex items-center justify-center min-h-12 min-w-[120px]"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black/80 to-transparent z-20" />
      </section>
    </>
  );
}
