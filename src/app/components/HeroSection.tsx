"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
// Background slideshow images
const images = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920",
  "https://images.unsplash.com/photo-1537726235470-8504e3beef77?w=1920",
  "https://images.unsplash.com/photo-1606744888344-493238951221?w=1920",
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [particles, setParticles] = useState<{ x: number; y: number }[]>([]);

  // Image slideshow rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Golden sparkle generation (client-side only)
  useEffect(() => {
    const newParticles = Array.from({ length: 25 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background slideshow */}
     {images.map((img, index) => (
  <div
    key={index}
    className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
      index === currentImage ? "opacity-100" : "opacity-0"
    }`}
  >
    <Image
      src={img}
      alt={`Slide ${index + 1}`}
      fill
      priority={index === 0}
      sizes="100vw"
      className="object-cover"
    />
  </div>
))}

      {/* Golden gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40 z-10" />

      {/* Golden sparkles (animated particles) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-20 pointer-events-none">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute w-0.5 h-0.5 bg-[#d4af37] rounded-full opacity-60"
            style={{ top: p.y, left: p.x }}
            animate={{
              y: [p.y, p.y - 60, p.y],
              opacity: [0.2, 0.9, 0.2],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Centered content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-center text-white px-6">
        {/* Logo */}
        <motion.img
          src="/images/logo-1.png"
          alt="DUQOR Logo"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-40 md:w-40 mb-6 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
        />

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"
        >
          Where Elegance Inspires Luxury
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-2xl mb-10 max-w-2xl font-light text-gray-200 drop-shadow-[0_0_8px_rgba(0,0,0,0.4)]"
        >
          Transforming spaces into sophisticated sanctuaries of style and comfort
          across the UAE and GCC region.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-5"
        >
          <Link href="/projects">
            <button className="bg-[#d4af37] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#e6c65e] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]">
              Explore Projects
            </button>
          </Link>

          <Link href="/consultation">
            <button className="border-2 border-[#d4af37] text-[#d4af37] px-8 py-3 rounded-full font-semibold hover:bg-[#d4af37] hover:text-black transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]">
              Get Consultation
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Bottom subtle glow */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-black/70 to-transparent z-20" />
    </section>
  );
}
