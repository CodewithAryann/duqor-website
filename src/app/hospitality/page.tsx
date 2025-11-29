"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Hammer,
  LayoutGrid,
  Sparkles,
  Palette,
  Lamp,
  Gem,
  Route,
  Feather,
  Quote,
} from "lucide-react";
import Head from "next/head";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

const COPPER_GRADIENT =
  "bg-clip-text text-transparent bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]";

interface HeroImage {
  src: string;
  alt: string;
}

interface Particle {
  x: number;
  y: number;
  dur: number;
}

// Utility: predictable pseudo-random
function seededRandom(seed: number) {
  return () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

/* ──────────────────────────── HERO SECTION ─────────────────────────── */
function HeroSection() {
  const heroImages: HeroImage[] = useMemo(
    () => [
      {
        src: "/images/hospitality/duqor-hotel-lobby.webp",
        alt: "Duqor hotel lobby interior design with luxurious lighting",
      },
      // {
      //   src: "/images/hospitality/verve-urban-lounge.webp",
      //   alt: "Verve Urban Lounge interior design with modern furnishings",
      // },
      // {
      //   src: "/images/hospitality/luxury-hotel-suite.webp",
      //   alt: "Luxury hotel suite designed for comfort and style",
      // },
      // {
      //   src: "/images/hospitality/boutique-restaurant-dining.webp",
      //   alt: "Boutique restaurant dining area with elegant ambiance",
      // },
    ],
    []
  );

  const [slide, setSlide] = useState<number>(0);

  const nextSlide = useCallback(() => {
    setSlide((s) => (s + 1) % heroImages.length);
  }, [heroImages.length]);

  useEffect(() => {
    const id = setInterval(nextSlide, 7000);
    return () => clearInterval(id);
  }, [nextSlide]);

  /* --- SAFE PARTICLES (no hydration mismatch) --- */
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const rand = seededRandom(12345);
    const generated: Particle[] = Array.from({ length: 12 }).map(() => ({
      x: rand() * 1200,
      y: rand() * 800,
      dur: 3 + rand() * 4,
    }));
    setParticles(generated);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black text-white">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[slide].src}
            alt={heroImages[slide].alt}
            fill
            className="object-cover brightness-60"
            priority={slide === 0}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Particles — ONLY render after mount */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none z-20">
          {particles.map((p, i) => (
            <motion.span
              key={i}
              className="absolute w-0.5 h-0.5 bg-[#d4af37] rounded-full opacity-60"
              style={{ top: p.y, left: p.x }}
              animate={{
                y: [p.y, p.y - 30, p.y],
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.4, 1],
              }}
              transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>
      )}

      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-30 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          <span className="text-white/90">Crafting Hospitality </span>
          <span className={COPPER_GRADIENT}>with Heart</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl"
        >
          Elegant, functional, unforgettable — spaces that elevate every guest experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link href="/portfolio">
            <button className="px-8 py-3 rounded-full border-2 border-[#c38a27] text-[#c38a27] font-semibold flex items-center cursor-pointer gap-2 hover:bg-[#c38a27]/20 transition">
              View Projects
            </button>
          </Link>

          <Link href="/contact">
            <button className="px-8 py-3 rounded-full font-semibold bg-[#c38a27] text-black cursor-pointer flex items-center gap-2">
              Contact Us <ArrowRight size={18} />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────────── INTRO SECTION ───────────────────────── */
function Introduction() {
  return (
    <section className="py-24 bg-black text-white text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          At <span className={COPPER_GRADIENT}>Duqor</span>, we create ambiences that captivate —
          from boutique hotels to luxury restaurants.
        </p>
      </motion.div>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "60%" }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="mx-auto mt-20 h-0.5 bg-linear-to-r from-transparent via-[#c38a27] to-transparent"
      />
    </section>
  );
}

/* ───────────────────────── DESIGN APPROACH ───────────────────────── */
function DesignApproach() {
  const approaches = useMemo(
    () => [
      {
        title: "Concept Development",
        desc: "Immersive storytelling that reflects brand ethos.",
        icon: <Sparkles size={28} />,
      },
      {
        title: "Material & Finish Selection",
        desc: "Textures and tones that balance warmth and luxury.",
        icon: <Palette size={28} />,
      },
      {
        title: "Space Planning & Lighting",
        desc: "Flow and lighting curated to heighten atmosphere.",
        icon: <LayoutGrid size={28} />,
      },
      {
        title: "Execution & Detailing",
        desc: "Delivering sensory design with meticulous attention.",
        icon: <Hammer size={28} />,
      },
    ],
    []
  );

  return (
    <section className="py-28 bg-black text-white px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className={COPPER_GRADIENT}>Our</span> Design Approach
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mt-2">
          From concept to execution, we craft spaces that resonate with your brand.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {approaches.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="bg-linear-to-br from-[#161616] to-[#0f0f0f] border border-[#2c2c2c] hover:border-[#c38a27]/60 rounded-2xl p-8 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-[#c38a27] bg-[#c38a27]/10 rounded-full">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#c38a27]">{item.title}</h3>
            <p className="text-gray-300 mt-3">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── SIGNATURE PROJECTS ───────────────────────── */
function SignatureProjects() {
  const slide = {
    img: "/images/hospitality/Azure-grand.png",
    title: "Azure Grand Hotel",
    desc: "Refined fusion of comfort and contemporary design.",
    alt: "Interior view of Azure Grand Hotel showcasing luxury modern design",
  };

  return (
    <section
      className="py-24 bg-[#0a0a0a] text-white"
      aria-label="Signature Projects Section"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Signature <span className={COPPER_GRADIENT}>Projects</span>
        </h2>
      </div>

      <div
        className="relative max-w-6xl mx-auto h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden"
        aria-labelledby="signature-title"
      >
        {/* Static Image */}
        <Image
          src={slide.img}
          alt={slide.alt}
          fill
          sizes="100vw"
          className="object-cover brightness-90"
          priority
        />

        {/* Overlay to make text more visible */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text Overlay */}
        <div className="absolute bottom-16 left-0 right-0 text-center px-4 z-10">
          <h3
            id="signature-title"
            className="text-2xl md:text-3xl font-semibold text-[#c38a27]"
          >
            {slide.title}
          </h3>

          <p className="text-gray-100 mb-6 text-lg md:text-xl">
            {slide.desc}
          </p>

          <Link href="/projects" aria-label="Explore all interior design projects">
            <button className="px-8 py-3 rounded-full bg-[#c38a27] cursor-pointer text-black font-semibold hover:bg-[#d4b15a] transition">
              Explore All Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}


/* ───────────────────────── CORE CAPABILITIES ───────────────────────── */
function CoreCapabilities() {
  const items = useMemo(
    () => [
      { icon: <Lamp size={36} />, label: "Ambient & Lighting Design" },
      { icon: <Gem size={36} />, label: "Luxury Material Integration" },
      { icon: <Route size={36} />, label: "Guest Flow & Planning" },
      { icon: <Feather size={36} />, label: "Signature Detailing & Decor" },
    ],
    []
  );

  return (
    <section className="py-24 bg-black text-white">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">
          Core <span className={COPPER_GRADIENT}>Capabilities</span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.06 }}
            className="w-56 h-56 bg-linear-to-br from-[#161616] to-[#0f0f0f] border border-[#2c2c2c] hover:border-[#c38a27]/60 rounded-2xl flex flex-col items-center justify-center text-center p-6"
          >
            <div className="text-[#c38a27] mb-3">{item.icon}</div>
            <p className="text-gray-300 text-sm">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── CLIENT EXPERIENCE ───────────────────────── */
function ClientExperience() {
  return (
    <section className="py-24 bg-black text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <Quote className="mx-auto mb-6 text-[#c38a27] w-12 h-12" />
        <p className="text-xl md:text-2xl text-gray-300 font-semibold mb-6">
          “Duqor’s design elevated our guest experience beyond expectations.”
        </p>
        <p className="text-gray-400">— Hotel Group, Dubai</p>
      </div>
    </section>
  );
}

/* ───────────────────────── CONTACT FORM (WEB3FORM) ───────────────────────── */
function ContactForm() {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Remove non-digit characters and check length
    if (!phone || phone.replace(/\D/g, "").length < 9) {
      e.preventDefault();
      alert("Please enter a valid phone number");
      return;
    }
  };

  return (
    <section className="py-28 bg-[#0a0a0a] text-white px-6" id="contact-form">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold">
          Lets <span className="bg-clip-text text-transparent bg-linear-to-r from-[#e7c675] via-[#c38a27] to-[#8b5b10]">Discuss</span> Your Project
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mt-3">
          Fill out the form and our design specialists will connect with you shortly.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

        {/* Left Image */}
        <div className="relative w-full h-[610px] rounded-2xl overflow-hidden">
          <Image
            src="/images/hospitality.png"
            alt="Hospitality Interior Design"
            fill
            className="object-cover scale-105 hover:scale-100 transition-all duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#00000045] to-transparent" />
        </div>

        {/* Right Form */}
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          onSubmit={handleSubmit}
          className="h-[610px] bg-[#111] border border-[#2c2c2c] rounded-2xl p-10 flex flex-col justify-between"
        >
          <input type="hidden" name="access_key" value="b601d7fe-9d0c-448b-8f4e-f83b4879d175" />
          <input type="hidden" name="subject" value="Residential Interior Inquiry - Duqor" />

          <div className="space-y-4 grow">

            {/* Name */}
            <div>
              <label className="block text-gray-300 mb-1">Name *</label>
              <input
                type="text" name="name" required
                className="w-full p-3 bg-[#0d0d0d] border border-[#333] rounded-lg focus:border-[#c38a27] outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 mb-1">Email *</label>
              <input
                type="email" name="email" required
                className="w-full p-3 bg-[#0d0d0d] border border-[#333] rounded-lg focus:border-[#c38a27] outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-300 mb-1">Phone *</label>
              <PhoneInput
                country={'ae'}
                value={phone}
                onChange={setPhone}
                inputProps={{
                  name: 'phone',
                  required: true,
                }}
                containerStyle={{ width: '100%' }}
                inputStyle={{
                  width: '100%',
                  height: '48px',
                  paddingLeft: '60px',
                  backgroundColor: '#0d0d0d',
                  borderRadius: '0.5rem',
                  border: '1px solid #333',
                  color: '#fff',
                }}
                buttonStyle={{
                  border: '1px solid #333',
                  borderRadius: '0.5rem 0 0 0.5rem',
                  backgroundColor: '#0d0d0d',
                }}
                dropdownStyle={{
                  backgroundColor: '#111',
                  color: '#c38a27',
                  borderRadius: '0.5rem',
                }}
                dropdownClass="custom-phone-dropdown"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-300 mb-1">Message</label>
              <textarea
                name="message" rows={5} required
                className="w-full p-3 bg-[#0d0d0d] border border-[#333] rounded-lg focus:border-[#c38a27] outline-none resize-none"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#c38a27] text-black rounded-full font-semibold hover:bg-[#d4b15a] transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}

/* ───────────────────────── FINAL CTA ───────────────────────── */
function FinalCTA() {
  return (
    <section
      className="py-32 text-center bg-cover bg-center relative"
      style={{
    backgroundImage:
      "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(17,17,17,0.5), rgba(0,0,0,0.5)), url('/images/hospitality/hospitality-lobby.png')",
  }}
    >
       <span
    className="sr-only"
    role="img"
    aria-label="Luxury hotel lobby interior with elegant lighting and modern furnishings"
  />
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Let’s <span className={COPPER_GRADIENT}>Transform</span> Experiences That Last
      </h2>

      <p className="text-gray-300 max-w-2xl mx-auto mb-10">
        Collaborate with Duqor to design hospitality spaces that inspire every guest.
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        <Link href="/contact">
          <button className="px-8 py-3 bg-[#c38a27] cursor-pointer text-black rounded-full font-semibold flex items-center gap-2">
            Contact Us <ArrowRight size={18} />
          </button>
        </Link>

        <Link href="/portfolio">
          <button className="px-8 py-3 border-2 cursor-pointer border-[#c38a27] text-[#c38a27] rounded-full font-semibold">
            View Projects
          </button>
        </Link>
      </div>
    </section>
  );
}

/* ───────────────────────── PAGE EXPORT ───────────────────────── */
export default function HospitalityInteriors() {
  return (
    <>
      <Head>
        <title>Duqor Hospitality Interior Design | Luxury Hotel & Restaurant Spaces</title>
        <meta
          name="description"
          content="Duqor creates elegant and functional hospitality interiors for hotels, resorts, and restaurants."
        />
        <link rel="canonical" href="https://www.duqor.ae/hospitality" />
      </Head>

      <main className="bg-black text-white">
        <HeroSection />
        <Introduction />
        <DesignApproach />
        <SignatureProjects />
        <CoreCapabilities />
        <ClientExperience />
        <ContactForm />
        <FinalCTA />
      </main>
    </>
  );
}
