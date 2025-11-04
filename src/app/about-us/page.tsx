"use client";
import React from "react";
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
  return (
    <section className="bg-[#0a0a0a] text-white overflow-hidden">
      {/* --- Hero Section --- */}
      <div
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0,0,0,0.7), rgba(0,0,0,0.7)
          ), url('/images/about/hero.jpg')`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Crafting <span className="text-[#d4af37]">Spaces</span> that Inspire,
            Reflect, and Endure.
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            At Duqor, we merge design excellence with timeless craftsmanship to
            create environments that tell stories of elegance and purpose.
          </p>
        </motion.div>
      </div>

      {/* --- Philosophy Section --- */}
      <div className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <Image
            src="/images/about/philosophy.jpg"
            alt="Design Philosophy"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
        >
          <h2 className="text-3xl font-semibold mb-4 text-[#d4af37]">
            Our Philosophy
          </h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Every Duqor project begins with a vision — to blend form and
            function in perfect harmony. We believe great design not only looks
            extraordinary but feels effortless and deeply personal.
          </p>
          <p className="text-gray-400 leading-relaxed">
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

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          {[
            {
              title: "Residential Design",
              desc: "Crafting intimate, luxurious living spaces that resonate with your lifestyle.",
              img: "/images/about/residential.jpg",
            },
            {
              title: "Commercial Design",
              desc: "Designing workspaces that inspire productivity, collaboration, and innovation.",
              img: "/images/about/commercial.jpg",
            },
            {
              title: "Hospitality Design",
              desc: "Creating immersive environments that embody comfort, elegance, and identity.",
              img: "/images/about/hospitality.jpg",
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
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- Team & Values --- */}
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
          className="text-gray-400 max-w-2xl mx-auto leading-relaxed"
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
          backgroundImage: `linear-gradient(
            rgba(0,0,0,0.7), rgba(0,0,0,0.7)
          ), url('/images/about/cta.jpg')`,
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
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
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
