"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Background images
const images = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920",
  "https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=870",
  "https://images.unsplash.com/photo-1606744888344-493238951221?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=774",
];

const HeroSection: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/40 z-10" />

      {/* Logo & Text */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        {/* Logo */}
        <motion.img
          src="/images/logo.png" 
          alt="DUQOR Logo"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-32 md:w-40 mb-6"
        />

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4 tracking-tight drop-shadow-lg"
        >
          Where Elegance Inspires Luxury
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-2xl mb-8 max-w-2xl font-light drop-shadow-md"
        >
          Transforming spaces into sophisticated sanctuaries of style and comfort across the UAE and GCC region
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <Link href="/projects">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-[#c2a158] hover:text-white transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl">
              Explore Projects
            </button>
          </Link>
          <Link href="/consultation">
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl">
              Get Consultation
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
