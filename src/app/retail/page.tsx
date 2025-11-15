"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
ArrowRight,
  Sunrise,
  Settings,
  PenTool,
  Layout,
  Move,
  Layers,
  Zap,
  Diamond,
  ChevronLeft,
  ChevronRight,
  Quote
} from "lucide-react";

// Keep the exact theme classes you used — adjust if your Tailwind config uses different names
const COPPER_GRADIENT = "bg-clip-text text-transparent bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]";

// Utility: safe window check
const isClient = typeof window !== "undefined";

// --- HERO SECTION ---
function HeroSection() {
  // Use webp images for smaller file size if you can convert them on the server
  const heroImages = useMemo(
    () => [
      "/images/retail/1.png",
    "/images/retail/2.png",
    "/images/retail/4.png",
    "/images/retail/3.png",
    ],
    []
  );

  const [slide, setSlide] = useState(0);
  const slideRef = useRef<number>(0);

  const nextSlide = useCallback(() => {
    setSlide((s) => {
      const n = (s + 1) % heroImages.length;
      slideRef.current = n;
      return n;
    });
  }, [heroImages.length]);

  // Auto-advance slides (only client)
  useEffect(() => {
    if (!isClient) return;
    const id = window.setInterval(nextSlide, 7000);
    return () => window.clearInterval(id);
  }, [nextSlide]);

  // Simple lightweight particle layer (reduced count)
  const particles = useMemo(() => {
    if (!isClient) return [] as { x: number; y: number; dur: number }[];
    return Array.from({ length: 18 }).map(() => ({
      x: Math.random() * (window.innerWidth || 1200),
      y: Math.random() * (window.innerHeight || 800),
      dur: 3 + Math.random() * 4,
    }));
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[slide]}
            alt={`Hero ${slide + 1}`}
            fill
            className="object-cover brightness-60"
            priority={slide === 0}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Particles (very light) */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {particles.map((p, i) => (
          <motion.span
            key={`p-${i}`}
            className="absolute w-0.5 h-0.5 bg-[#d4af37] rounded-full opacity-60"
            style={{ top: p.y, left: p.x }}
            animate={{ y: [p.y, p.y - 40, p.y], opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
            transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.05 }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black/20 z-10" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-30 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          <span className="text-white/90">Designing Retail Experiences</span>
          <span className={COPPER_GRADIENT}>That Sell</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl"
        >
           We craft immersive store environments that drive engagement and elevate brand identity
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/portfolio">
            <button className="px-8 py-3 rounded-full border-2 border-[#c38a27] text-[#c38a27] font-semibold flex items-center cursor-pointer gap-2 hover:bg-[#c38a27]/20 transition-all">
              View Projects
            </button>
          </Link>

          <Link href="/contact">
            <button className="px-8 py-3 rounded-full cursor-pointer font-semibold flex items-center gap-2 bg-[#c38a27] text-black">
              Contact Us <ArrowRight size={18} />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// --- INTRO ---
function Introduction() {
  return (
    <section className="py-24 bg-black text-white text-center px-6">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          At <span className={COPPER_GRADIENT}>Duqor</span>, every square meter in retail speaks your brand’s story. At Duqor, we merge aesthetics with consumer psychology — creating retail spaces that attract, engage, and convert. From boutique showrooms to large-format stores, our designs drive both footfall and experience.
        </p>
      </motion.div>

      <motion.div initial={{ width: 0 }} whileInView={{ width: "60%" }} transition={{ duration: 1.2, delay: 0.5 }} className="mx-auto mt-20 h-0.5 bg-linear-to-r from-transparent via-[#c38a27] to-transparent" />
    </section>
  );
}

// --- DESIGN APPROACH ---
function DesignApproach() {
  const approaches = useMemo(
    () => [
       {
      title: "Concept Development",
      desc: "Turning brand identity into spatial storytelling.",
      icon: <PenTool size={28} />, // creativity & personalization
    },
    {
      title: "Material & Finish Selection",
      desc: "Blending textures, lighting, and color for maximum visual appeal.",
      icon: <Diamond size={28} />, // luxury & refinement
    },
    {
      title: "Spatial Planning & Lighting",
      desc: "Optimizing layout for movement, visibility, and flow.",
      icon: <Sunrise size={28} />, // light, openness, and atmosphere
    },
    {
      title: "Execution & Detailing",
      desc: "From fixtures to finishes, every detail enhances customer experience.",
      icon: <Settings size={28} />, // precision and craftsmanship
    },
    ],
    []
  );

  return (
    <section className="relative py-28 bg-black text-white overflow-hidden px-6">
      <div className="relative text-center mb-16 z-10">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className={COPPER_GRADIENT}>Our</span> Design Approach
        </h2>
        <p className="mt-2 text-gray-400 max-w-xl mx-auto text-sm md:text-base"> From concept to execution, we craft spaces that resonate with your brand and culture.</p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {approaches.map((item, i) => (
          <motion.div key={`approach-${i}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }} whileHover={{ scale: 1.04 }} className="group bg-linear-to-br from-[#161616] via-[#1e1e1e] to-[#0f0f0f] border border-[#2c2c2c] hover:border-[#c38a27]/60 rounded-2xl p-8 transition-all duration-500">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-[#c38a27] bg-[#c38a27]/10 rounded-full">{item.icon}</div>
            <h3 className="text-xl font-semibold text-[#c38a27] mb-3 text-center">{item.title}</h3>
            <p className="text-gray-300 text-center leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// --- SIGNATURE PROJECTS (lightweight) ---
function SignatureProjects() {
  const slides = useMemo(
    () => [
        {
      img: "/images/retail/5.png",
      title: "Luxe Boutique Flagship",
      desc: "A curated shopping experience blending brand identity with immersive interior design.",
    },
    {
      img: "/images/retail/6.png",
      title: "Urban Concept Store",
      desc: "Modern retail design with flexible layouts, dynamic lighting, and interactive product zones.",
    },
    {
      img: "/images/retail/7.png",
      title: "Heritage Brand Outlet",
      desc: "A sophisticated retail space that balances historical character with contemporary display aesthetics.",
    },
    ],
    []
  );

  const [idx, setIdx] = useState(0);
  const next = useCallback(() => setIdx((s) => (s + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setIdx((s) => (s - 1 + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Signature <span className={COPPER_GRADIENT}>Projects</span></h2>
      </div>

      <div className="relative max-w-6xl mx-auto h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div key={idx} initial={{ opacity: 0, scale: 1.02 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.9 }} className="absolute inset-0">
            <Image src={slides[idx].img} alt={slides[idx].title} fill className="object-cover brightness-75" sizes="100vw" priority={idx === 0} />
          </motion.div>
        </AnimatePresence>

        <button onClick={prev} aria-label="previous" className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full hover:bg-black/70 transition z-20">
          <ChevronLeft size={28} color="#c38a27" />
        </button>
        <button onClick={next} aria-label="next" className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full hover:bg-black/70 transition z-20">
          <ChevronRight size={28} color="#c38a27" />
        </button>

        <div className="absolute bottom-16 inset-x-0 text-center z-10 px-4">
          <motion.h3 key={slides[idx].title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-2xl font-semibold text-[#c38a27]">{slides[idx].title}</motion.h3>
          <motion.p key={slides[idx].desc} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }} className="text-gray-300 mb-6">{slides[idx].desc}</motion.p>
          <Link href="/projects"><button className="px-8 py-3 rounded-full font-semibold bg-[#c38a27] text-black">Explore All Projects</button></Link>
        </div>
      </div>
    </section>
  );
}

// --- CORE CAPABILITIES ---
function CoreCapabilities() {
  const items = useMemo(() => [
    { icon: <Layout size={36} />, label: "Brand Experience & Visual Storytelling" }, // showcases branding & imagery
    { icon: <Move size={36} />, label: "Consumer Flow Optimization" },              // movement & circulation
    { icon: <Layers size={36} />, label: "Premium Finish Execution" },             // layers, textures, high-quality finishes
    { icon: <Zap size={36} />, label: "Interactive Lighting & Displays" },         // energy, light, engagement
  ], []);

  return (
    <section className="py-24 bg-black text-white">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">Core <span className={COPPER_GRADIENT}>Capabilities</span></h2>
      </div>

      <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto px-6">
        {items.map((item, i) => (
          <motion.div key={`cap-${i}`} whileHover={{ scale: 1.06 }} className="w-56 h-56 bg-linear-to-br from-[#161616] via-[#1e1e1e] to-[#0f0f0f] border border-[#2c2c2c] hover:border-[#c38a27]/60 rounded-2xl flex flex-col items-center justify-center text-center p-6 transition-all duration-500">
            <motion.div whileHover={{ scale: 1.15, rotate: 8 }} className="text-[#c38a27] mb-3">{item.icon}</motion.div>
            <p className="text-gray-300 text-sm font-medium">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// --- CLIENT EXPERIENCE ---
function ClientExperience() {
  return (
    <section className="py-24 bg-black text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <Quote className="mx-auto mb-6 text-[#c38a27] w-12 h-12" />
          <p className="text-xl md:text-2xl font-semibold text-gray-300 leading-relaxed mb-6">“Our store now tells a story — one our customers love to be part of.”</p>
          <p className="text-gray-400 font-medium">— Luxury Retail Brand, Abu Dhabi.</p>
        </motion.div>
      </div>
    </section>
  );
}

// --- FINAL CTA ---
function FinalCTA() {
  return (
    <section className="py-32 relative text-center text-white overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(17,17,17,0.5), rgba(0,0,0,0.5)), url('/images/residential/slider/bottom.png')` }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let’s Redefine <span className={COPPER_GRADIENT}>Retail</span> Together</h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto"> Transform your retail space into a brand experience your customers remember</p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link href="/contact"><button className="px-8 py-3 rounded-full font-semibold flex items-center gap-2 cursor-pointer bg-[#c38a27] text-black">Contact Us <ArrowRight size={18} /></button></Link>
          <Link href="/portfolio"><button className="px-8 py-3 rounded-full border-2 border-[#c38a27] text-[#c38a27] font-semibold flex items-center gap-2 cursor-pointer hover:bg-[#c38a27]/20 transition-all">View Projects <ArrowRight size={18} /></button></Link>
        </div>
      </motion.div>
    </section>
  );
}

// --- Export full page ---
export default function RetailInteriors() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <Introduction />
      <DesignApproach />
      <SignatureProjects />
      <CoreCapabilities />
      <ClientExperience />
      <FinalCTA />
    </main>
  );
}
