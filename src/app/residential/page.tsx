"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sunrise,
  Settings,
  PenTool,
  Sun,
  Maximize2,
  Diamond,
  ChevronLeft,
  ChevronRight,
  Quote
} from "lucide-react";

const GOLD = "#d4af37";

// --- Hero Section with Glowing Text + Particles ---
function HeroSection() {
  const heroImages = [
    "/images/residential/1.png",
    "/images/residential/2.png",
    "/images/residential/3.png",
    "/images/residential/4.png",
  ];

  const [index, setIndex] = useState(0);
  const [particles, setParticles] = useState<{ x: number; y: number }[]>([]);

  // ✅ Use useCallback for stable function reference
  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % heroImages.length);
  }, [heroImages.length]);

  // ✅ Auto slide effect — depends on nextSlide only (no ESLint warning)
  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // ✅ Generate particles only once (safe and clean)
  useEffect(() => {
    const newParticles = Array.from({ length: 35 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[index]}
            alt="Office Interior"
            fill
            className="object-cover brightness-60"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Golden glow particles */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute w-0.5 h-0.5 bg-[#d4af37] rounded-full opacity-70"
            style={{ top: p.y, left: p.x }}
            animate={{
              y: [p.y, p.y - 60, p.y],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.7, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black/20 z-10" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-30 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold tracking-tight"
        >
          <span className="text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Where Luxury
          </span>{" "}
          <span
            style={{
              color: GOLD,
              textShadow:
                "0 0 10px rgba(212,175,55,0.7), 0 0 25px rgba(212,175,55,0.5)",
            }}
          >
            Meets Comfort
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl"
        >
          Designing homes that reflect individuality, warmth, and timeless elegance
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link href="/portfolio">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212,175,55,0.5)" }}
              className="px-8 py-3 rounded-full border-2 border-[#d4af37] text-[#d4af37] font-semibold flex items-center gap-2 hover:bg-[#d4af37]/20 transition-all"
            >
              View Projects
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-[0_0_25px_rgba(212,175,55,0.4)]"
              style={{ background: GOLD, color: "#000" }}
            >
              Contact Us <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


function Introduction() {
  return (
    <section className="py-24 bg-black text-white text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          At <span style={{ color: GOLD }}>Duqor</span>, home is more than space — it’s emotion, personality, and purpose. At Duqor, we craft bespoke villas and residences that blend refined aesthetics with functional beauty. Each design is a reflection of your lifestyle, built to inspire and comfort in equal measure.
        </p>
      </motion.div>

      {/* Bottom Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "60%" }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="mx-auto mt-20 h-0.5 bg-linear-to-r from-transparent via-[#d4af37] to-transparent"
      />
    </section>
  );
}


function DesignApproach() {
  const approaches = [
    {
      title: "Concept Development",
      desc: "Bespoke design visions crafted to reflect personal style and lifestyle.",
      icon: <PenTool size={28} />, // creativity & personalization
    },
    {
      title: "Material & Finish Selection",
      desc: "Selecting high-quality materials and finishes for lasting elegance.",
      icon: <Diamond size={28} />, // luxury & refinement
    },
    {
      title: "Spatial Planning & Lighting",
      desc: "Layouts and lighting that create harmony between openness and coziness.",
      icon: <Sunrise size={28} />, // light, openness, and atmosphere
    },
    {
      title: "Execution & Detailing",
      desc: "Meticulous attention to every detail for flawless interiors.",
      icon: <Settings size={28} />, // precision and craftsmanship
    },
  ];


  return (
    <section className="relative py-28 bg-black text-white overflow-hidden px-6">
      <div className="absolute inset-0 bg-linear-to-b from-black via-[#0b0b0b] to-black" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-280 h-280 bg-[#d4af37]/10 rounded-full blur-[160px]" />

      <div className="relative text-center mb-16 z-10">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span style={{ color: GOLD }}>Our</span> Design Approach
        </h2>
        <p className="mt-2 text-gray-400 max-w-xl mx-auto text-sm md:text-base">
          From concept to execution, we craft spaces that resonate with your brand and culture.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {approaches.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.7 }}
            whileHover={{
              scale: 1.05,
              y: -8,
              boxShadow:
                "0 0 35px rgba(212,175,55,0.25), 0 0 15px rgba(212,175,55,0.15)",
            }}
            className="group bg-linear-to-br from-[#161616] via-[#1e1e1e] to-[#0f0f0f] border border-[#2c2c2c] hover:border-[#d4af37]/60 rounded-2xl p-8 transition-all duration-500"
          >
            {/* Icon with hover animation */}
            <motion.div
              whileHover={{ scale: 1.3, rotate: 10 }}
              className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-[#d4af37] bg-[#d4af37]/10 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.6)]"
            >
              {item.icon}
            </motion.div>

            <h3 className="text-xl font-semibold text-[#d4af37] mb-3 text-center">
              {item.title}
            </h3>
            <p className="text-gray-300 text-center leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function SignatureProjects() {
  const slides = [
    {
      img: "/images/residential/slider/1.png",
      title: "Serenity Villa",
      desc: "A private sanctuary combining modern elegance with timeless comfort and nature-inspired tranquility.",
    },
    {
      img: "/images/residential/slider/2.png",
      title: "Horizon Penthouse",
      desc: "Sleek urban design with panoramic city views, curated for sophisticated metropolitan living.",
    },
    {
      img: "/images/residential/slider/3.png",
      title: "The Oakwood Residence",
      desc: "Warm textures, natural materials, and thoughtful layouts create a refined and cozy home environment.",
    },
    {
      img: "/images/residential/slider/4.png",
      title: "Elysium Lake House",
      desc: "Blending indoor-outdoor living, this lakeside retreat harmonizes with its serene surroundings.",
    },
    {
      img: "/images/residential/slider/5.png",
      title: "Modern Heritage Villa",
      desc: "A contemporary take on classic architecture, preserving heritage charm with modern luxury.",
    },
    {
      img: "/images/residential/slider/6.png",
      title: "Infinity Terrace Apartment",
      desc: "Open-plan living spaces with flowing interiors, floor-to-ceiling windows, and bespoke furnishings.",
    },
    {
      img: "/images/residential/slider/7.png",
      title: "Palm Grove Residence",
      desc: "A tropical-inspired villa that merges indoor elegance with outdoor leisure and garden living.",
    },
  ];



  const [index, setIndex] = useState(0);

  // ✅ useCallback for stable functions
  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // ✅ Auto-slide with timer reset on index change
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide, index]); // depends on index so timer resets after manual click

  return (
    <section className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Signature <span style={{ color: GOLD }}>Projects</span>
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto h-[70vh] rounded-3xl overflow-hidden shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[index].img}
              alt={slides[index].title}
              fill
              className="object-cover brightness-75"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full hover:bg-black/70 transition z-20"
        >
          <ChevronLeft size={28} color={GOLD} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full hover:bg-black/70 transition z-20"
        >
          <ChevronRight size={28} color={GOLD} />
        </button>

        {/* Slide Text */}
        <div className="absolute bottom-16 inset-x-0 text-center z-10 px-4">
          <motion.h3
            key={slides[index].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-semibold text-[#d4af37] mb-2 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"
          >
            {slides[index].title}
          </motion.h3>
          <motion.p
            key={slides[index].desc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-gray-300 mb-6"
          >
            {slides[index].desc}
          </motion.p>
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-8 py-3 rounded-full font-semibold"
              style={{ background: GOLD, color: "#000" }}
            >
              Explore All Projects
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}


// --- Core Capabilities ---
function CoreCapabilities() {
  const items = [
    { icon: <PenTool size={36} />, label: "Personalized Design Concepts" }, 
    { icon: <Sun size={36} />, label: "Natural Light Integration" },        
    { icon: <Maximize2 size={36} />, label: "Indoor-Outdoor Spatial Harmony" }, 
    { icon: <Diamond size={36} />, label: "Luxury Finishes & Detailing" },    
  ];


  return (
    <section className="py-24 bg-black text-white">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">
          Core <span style={{ color: GOLD }}>Capabilities</span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto px-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 35px rgba(212,175,55,0.4)",
            }}
            className="w-56 h-56 bg-linear-to-br from-[#161616] via-[#1e1e1e] to-[#0f0f0f] border border-[#2c2c2c] hover:border-[#d4af37]/60 rounded-2xl flex flex-col items-center justify-center text-center p-6 transition-all duration-500"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="text-[#d4af37] mb-3"
            >
              {item.icon}
            </motion.div>
            <p className="text-gray-300 text-sm font-medium">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
function ClientExperience() {
  return (
    <section className="py-24 bg-black text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Quote className="mx-auto mb-6 text-[#d4af37] w-12 h-12" />
          <p className="text-xl md:text-2xl font-semibold text-gray-300 leading-relaxed mb-6">
            “Our home finally feels like us — elegant, functional, and full of warmth.”
          </p>
          <p className="text-gray-400 font-medium">— Design Your Dream Home with Duqor.</p>
        </motion.div>
      </div>
    </section>
  );
}

// --- Final CTA ---
function FinalCTA() {
  return (
    <section
      className="py-32 relative text-center text-white overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(
          to bottom, 
          rgba(0,0,0,0.5), 
          rgba(17,17,17,0.5), 
          rgba(0,0,0,0.5)
        ), url('/images/residential/slider/bottom.png')`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Design Your <span style={{ color: "#d4af37" }}>Dream</span> Home with Duqor
        </h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          Where sophistication meets serenity — let’s create your personal masterpiece
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 rounded-full font-semibold flex items-center gap-2"
              style={{ background: "#d4af37", color: "#000" }}
            >
              Contact Us <ArrowRight size={18} />
            </motion.button>
          </Link>

          <Link href="/portfolio">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212,175,55,0.5)" }}
              className="px-8 py-3 rounded-full border-2 border-[#d4af37] text-[#d4af37] font-semibold flex items-center gap-2 hover:bg-[#d4af37]/20 transition-all"
            >
              View Projects <ArrowRight size={18} />
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}



// --- Export Full Page ---
export default function CommercialOfficeInteriors() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <Introduction />
      <DesignApproach />
      <SignatureProjects />
      <CoreCapabilities />
      <ClientExperience/>
      <FinalCTA />
    </main>
  );
}
