"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
  const [particles, setParticles] = useState<{ x: number; y: number; color: string }[]>([]);
  const [mounted, setMounted] = useState(false); // Track client mount

  useEffect(() => {
    setMounted(true); // Component is mounted on client
    const width = window.innerWidth;
    const height = window.innerHeight;

    const generated = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      color: ["#d4af37", "#ffd700"][Math.floor(Math.random() * 2)],
    }));
    setParticles(generated);
  }, []);

  return (
    <section className="bg-[#0a0a0a] text-white overflow-hidden">
      {/* --- Hero Section --- */}
      <div className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/contact/pic-1.png"
          alt="Contact Hero"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Particles (only render after client mount) */}
        {mounted && (
          <div className="absolute inset-0 w-full h-full overflow-hidden z-20 pointer-events-none">
            {particles.map((p, i) => (
              <motion.span
                key={i}
                className="absolute w-0.5 h-0.5 rounded-full opacity-70"
                style={{ top: p.y, left: p.x, backgroundColor: p.color }}
                animate={{
                  y: [p.y, p.y - 80, p.y],
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.8, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-30 max-w-3xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-[#d4af37] drop-shadow-[0_0_25px_rgba(212,175,55,0.7)]"
          >
            Get in Touch with <span className="text-white">Duqor</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-2xl mb-12 max-w-2xl font-light text-gray-200 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          >
            Whether it’s a residence, commercial project, or consultation, we’re here to transform your vision into reality.
          </motion.p>
        </div>
      </div>

      {/* --- Contact Form & Office Info --- */}
      <div className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#d4af37] mb-6">
            Send Us a Message
          </h2>
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#111] text-white p-4 rounded-lg border border-[#2c2c2c] focus:outline-none focus:border-[#d4af37] focus:shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-[#111] text-white p-4 rounded-lg border border-[#2c2c2c] focus:outline-none focus:border-[#d4af37] focus:shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-all"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="bg-[#111] text-white p-4 rounded-lg border border-[#2c2c2c] focus:outline-none focus:border-[#d4af37] focus:shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-all"
            />
            <button
              type="submit"
              className="bg-[#d4af37] text-black px-8 py-3 rounded-full font-semibold text-lg tracking-wide hover:bg-[#ffd700] hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.7)]"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Office Info */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#d4af37] mb-6">
            Our Office
          </h2>
          <p className="text-gray-400 leading-relaxed">
            <strong>Address:</strong> 123 Luxury Street, Dubai, UAE
          </p>
          <p className="text-gray-400 leading-relaxed">
            <strong>Phone:</strong> +971 55 123 4567
          </p>
          <p className="text-gray-400 leading-relaxed">
            <strong>Email:</strong> info@duqor.com
          </p>
          <div className="mt-6 w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Google Map Embed Here</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
