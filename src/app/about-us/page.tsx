"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15 },
  }),
};

export default function AboutPage() {
  const [particles, setParticles] = useState<{ x: number; y: number }[]>([]);
  const particleCount = 40;

  useEffect(() => {
    const sparks = Array.from({ length: particleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));
    setParticles(sparks);
  }, []);

  return (
    <section className="bg-[#0a0a0a] text-white overflow-hidden">
      {/* --- Hero Section --- */}
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center text-center">
        {/* Background Image */}
        <Image
          src="/images/about/hero.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10 backdrop-blur-[1px]" />

        {/* Floating Golden Particles */}
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
          {particles.map((p, i) => (
            <motion.span
              key={i}
              className="absolute w-0.5 h-0.5 bg-[#d4af37] rounded-full opacity-60"
              style={{ top: p.y, left: p.x }}
              animate={{
                y: [p.y, p.y - 60, p.y],
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

        {/* Hero Content */}
        <div className="relative z-30 px-6 max-w-3xl mt-20 sm:mt-32">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-[#d4af37] drop-shadow-[0_0_25px_rgba(212,175,55,0.7)] leading-tight"
          >
            Crafting Spaces that Inspire, Reflect, and Endure.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-2xl mb-12 font-light text-gray-200 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          >
            At Duqor, we merge design excellence with timeless craftsmanship to
            create environments that tell stories of elegance and purpose.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link href="/portfolio">
              <button className="bg-[#d4af37] text-black px-10 py-3 rounded-full font-semibold text-lg tracking-wide hover:bg-[#e7c968] hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.6)]">
                Explore Projects
              </button>
            </Link>
            <Link href="/consultation">
              <button className="border-2 border-[#d4af37] text-[#d4af37] px-10 py-3 rounded-full font-semibold text-lg tracking-wide hover:bg-[#d4af37] hover:text-black hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.6)]">
                Get Consultation
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* --- Philosophy Section --- */}
      <div className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          whileHover={{
            scale: 1.05,
            rotate: 1.5,
            boxShadow: "0 0 30px rgba(212,175,55,0.5)",
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden"
        >
          <Image
            src="/images/about/design.png"
            alt="Design Philosophy"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg transition-transform duration-700"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-[#d4af37]">
            Our Philosophy
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Every Duqor project begins with a vision — to blend form and
            function in perfect harmony. We believe great design not only looks
            extraordinary but feels effortless and deeply personal.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Our process is rooted in collaboration, creativity, and an
            obsession with detail — ensuring every corner, texture, and light
            fixture contributes to the whole experience.
          </p>
        </motion.div>
      </div>

      {/* --- Expertise Cards --- */}
      <div className="py-24 bg-[#111]">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#d4af37]"
        >
          Our Expertise
        </motion.h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
          {[
            {
              title: "Residential Design",
              desc: "Crafting intimate, luxurious living spaces that resonate with your lifestyle.",
              img: "/images/about/residential.png",
            },
            {
              title: "Commercial Design",
              desc: "Designing workspaces that inspire productivity, collaboration, and innovation.",
              img: "/images/about/commercial.png",
            },
            {
              title: "Hospitality Design",
              desc: "Creating immersive environments that embody comfort, elegance, and identity.",
              img: "/images/about/hospitality.png",
            },
            {
              title: "Retail Design",
              desc: "Designing engaging retail experiences that elevate brand presence and customer interaction.",
              img: "/images/about/retail.png",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-[#2c2c2c] bg-[#0d0d0d] hover:border-[#d4af37]/50 transition-all group"
            >
              <div className="overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#d4af37] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- Core Values --- */}
      <div className="py-24 px-6 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-[#d4af37]"
        >
          Our Core Values
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          <span className="text-white font-medium">Integrity</span>,
          <span className="text-white font-medium"> Creativity</span>, and
          <span className="text-white font-medium"> Precision</span> are the
          cornerstones of our identity. Every project we undertake is a
          testament to our commitment to timeless design and unparalleled
          craftsmanship.
        </motion.p>
      </div>

      {/* --- Final CTA --- */}
      <div
        className="relative text-center py-32 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/about/cta.png')`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s <span className="text-[#d4af37]">Create</span> Something
            Extraordinary Together
          </h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            Whether it’s a residence, workspace, or hospitality destination —
            Duqor brings visions to life through design that speaks.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto"
              style={{ background: "#d4af37", color: "#000" }}
            >
              Contact Us <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
