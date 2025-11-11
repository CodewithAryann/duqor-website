"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/hero-section/pic-1.png",
  "/images/hero-section/pic-2.png",
  "/images/hero-section/pic-3.png",
  "/images/hero-section/pic-4.png",
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [particles, setParticles] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const newParticles = Array.from({ length: 35 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background slideshow */}
      {images.map((img, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          animate={{
            scale: index === currentImage ? 1.05 : 1,
          }}
          transition={{ duration: 8, ease: "easeOut" }}
        >
          <Image
            src={img}
            alt={`Slide ${index + 1}`}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      ))}

      {/* Golden overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-black/40 via-black/35 to-black/45 z-10" />

      {/* Floating golden sparkles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-20 pointer-events-none">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute w-0.5 h-0.5 bg-[#d4af37] rounded-full opacity-60"
            style={{ top: p.y, left: p.x }}
            animate={{
              y: [p.y, p.y - 80, p.y],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.7, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-center text-white px-6">
        {/* Static Logo */}
        <motion.img
          src="/images/new-logo.png"
          alt="Duqor Logo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-40 md:w-48 mx-auto mb-6 drop-shadow-[0_0_25px_rgba(212,175,55,0.5)]"
        />

        {/* Main Heading */}
       <motion.h1
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
  className="relative text-4xl md:text-5xl font-serif font-bold tracking-wide leading-tight
             bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]
             bg-clip-text text-transparent
             drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]
             [text-shadow:0_0_6px_rgba(255,220,120,0.5),
                          0_0_14px_rgba(195,138,39,0.4),
                          0_0_24px_rgba(139,91,16,0.3)] 
             after:content-[''] after:absolute after:inset-0 
             after:bg-linear-to-t after:from-white/20 after:to-transparent
             after:bg-clip-text after:text-transparent"
>
  Where Elegance Inspires Luxury
</motion.h1>



        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-2xl mb-12 max-w-2xl font-light text-gray-200 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        >
          Transforming spaces into elegant retreats of style and comfort across the UAE and GCC.
        </motion.p>

        {/* Buttons */}
       <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.4 }}
  className="flex flex-wrap gap-6 justify-center"
>
  {/* Explore Projects Button */}
  <Link href="/portfolio">
    <button
      className="relative overflow-hidden px-10 py-3 rounded-full font-serif font-semibold text-lg tracking-wide text-black
                 bg-linear-to-b from-[#f5d67a] via-[#c38a27] to-[#8b5b10]
                 shadow-[0_4px_20px_rgba(195,138,39,0.6)]
                 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.8)]
                 transition-all duration-300 group"
    >
      <span className="relative z-10">Explore Projects</span>
      <span className="absolute inset-0 bg-linear-to-t from-white/40 to-transparent opacity-60 rounded-full"></span>

      {/* ✨ Shimmer effect */}
      <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/70 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out rounded-full"></span>
    </button>
  </Link>

  {/* Contact Us Button */}
  <Link href="/contact">
    <button
      className="relative overflow-hidden px-10 py-3 rounded-full font-serif font-semibold text-lg tracking-wide text-black
                 bg-linear-to-b from-[#f5d67a] via-[#c38a27] to-[#8b5b10]
                 border-2 border-[#c38a27]
                 shadow-[0_4px_20px_rgba(195,138,39,0.5)]
                 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.8)]
                 transition-all duration-300 group"
    >
      <span className="relative z-10">Contact Us</span>
      <span className="absolute inset-0 bg-linear-to-t from-white/40 to-transparent opacity-60 rounded-full"></span>

      {/* ✨ Shimmer effect */}
      <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/70 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out rounded-full"></span>
    </button>
  </Link>
</motion.div>

      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black/80 to-transparent z-20" />
    </section>
  );
}
