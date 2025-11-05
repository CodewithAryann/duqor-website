"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FiPhone, FiMail, FiUser, FiFileText } from "react-icons/fi";

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We’ll contact you soon.");
    setFormData({ name: "", email: "", phone: "", project: "", message: "" });
  };

  // Particles state
  const [particles, setParticles] = useState<{ x: number; y: number; color: string }[]>([]);
  const [mounted, setMounted] = useState(false);

  // Generate particles only on client
  useEffect(() => {
    setMounted(true);
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
    <section className="relative min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/contact/hero.png"
        alt="Consultation Background"
        fill
        style={{ objectFit: "cover" }}
        className="absolute inset-0 opacity-20 z-0"
      />

      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Particles */}
      {mounted && (
        <div className="absolute inset-0 z-20 pointer-events-none">
          {particles.map((p, i) => (
            <motion.span
              key={i}
              className="absolute w-0.5 h-0.5 rounded-full opacity-60"
              style={{ top: p.y, left: p.x, backgroundColor: p.color }}
              animate={{ y: [p.y, p.y - 80, p.y], opacity: [0.2, 1, 0.2], scale: [1, 1.8, 1] }}
              transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>
      )}

      {/* Form Container */}
      <div className="relative z-30 w-full max-w-5xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-[#d4af37] drop-shadow-[0_0_25px_rgba(212,175,55,0.7)]">
            Get a Free Consultation
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            Fill out the form below and our expert team will reach out to discuss your vision.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative bg-[#111]/80 backdrop-blur-lg rounded-2xl shadow-[0_0_30px_rgba(212,175,55,0.3)] p-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div className="relative">
            <FiUser className="absolute left-4 top-4 text-[#d4af37]" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#111] text-white placeholder-gray-400 border border-[#2c2c2c] focus:outline-none focus:border-[#d4af37] focus:shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-all duration-300"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FiMail className="absolute left-4 top-4 text-[#d4af37]" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#111] text-white placeholder-gray-400 border border-[#2c2c2c] focus:outline-none focus:border-[#d4af37] focus:shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-all duration-300"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <FiPhone className="absolute left-4 top-4 text-[#d4af37]" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#111] text-white placeholder-gray-400 border border-[#2c2c2c] focus:outline-none focus:border-[#d4af37] focus:shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-all duration-300"
            />
          </div>

          {/* Project Type */}
          <div className="relative">
            <FiFileText className="absolute left-4 top-4 text-[#d4af37]" />
            <input
              type="text"
              name="project"
              value={formData.project}
              onChange={handleChange}
              placeholder="Project Type"
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#111] text-white placeholder-gray-400 border border-[#2c2c2c] focus:outline-none focus:border-[#d4af37] focus:shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-all duration-300"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2 relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Project Details"
              required
              className="w-full pl-4 pr-4 py-3 rounded-lg bg-[#111] text-white placeholder-gray-400 border border-[#2c2c2c] focus:outline-none focus:border-[#d4af37] focus:shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-all duration-300"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-[#d4af37] text-black px-10 py-3 rounded-full font-semibold text-lg tracking-wide hover:bg-[#ffd700] hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.7)]"
            >
              Submit Request
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ConsultationPage;
