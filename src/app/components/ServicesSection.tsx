"use client";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import {
  FaPaintBrush,
  FaTools,
  FaCouch,
  FaRulerCombined,
  FaRedo,
  FaLightbulb,
} from "react-icons/fa";
import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  icon: React.ReactElement;
  image: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      title: "Interior Design & Concept Development",
      description:
        "Bespoke concepts blending innovation, functionality, and elegance — including space planning, photorealistic 3D renders, and curated material selection.",
      icon: <FaPaintBrush size={36} className="text-[#d4af37]" aria-hidden="true" />,
      image: "/images/services/pic-1.png",
    },
    {
      title: "Turnkey Fit-Out Execution",
      description:
        "Comprehensive design-to-delivery solutions ensuring precision craftsmanship, superior quality control, and seamless project execution.",
      icon: <FaTools size={36} className="text-[#d4af37]" aria-hidden="true" />,
      image: "/images/services/pic-2.png",
    },
    {
      title: "Furniture, Fixtures & Equipment",
      description:
        "Premium sourcing and custom manufacturing of furniture and décor elements, meticulously selected to match and elevate your design intent.",
      icon: <FaCouch size={36} className="text-[#d4af37]" aria-hidden="true" />,
      image: "/images/services/pic-3.png",
    },
    {
      title: "Joinery & Bespoke Woodwork",
      description:
        "In-house production of luxury joinery elements crafted with meticulous attention to detail and exceptional craftsmanship.",
      icon: <FaRulerCombined size={36} className="text-[#d4af37]" aria-hidden="true" />,
      image: "/images/services/pic-4.png",
    },
    {
      title: "Renovation & Refurbishment",
      description:
        "Expertly transforming existing spaces into fresh, modern environments while preserving and enhancing functional value.",
      icon: <FaRedo size={36} className="text-[#d4af37]" aria-hidden="true" />,
      image: "/images/services/pic-5.png",
    },
    {
      title: "Lighting & Décor Styling",
      description:
        "Curated lighting design and carefully selected accessories that enhance the aesthetic appeal and ambiance of every space.",
      icon: <FaLightbulb size={36} className="text-[#d4af37]" aria-hidden="true" />,
      image: "/images/services/pic-6.png",
    },
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Our Services | DUQOR Luxury Interior Design Dubai</title>
        <meta
          name="description"
          content="Discover DUQOR's interior design and fit-out services in Dubai. From bespoke concepts to turnkey execution, furniture, joinery, renovation, and lighting — transforming spaces with elegance."
        />
        <link rel="canonical" href="https://www.duqor.ae/services" />
        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Our Services | DUQOR Luxury Interior Design Dubai" />
        <meta
          property="og:description"
          content="Explore DUQOR's comprehensive interior design services: design concepts, turnkey fit-out, bespoke furniture, joinery, renovation, and lighting styling in Dubai & GCC."
        />
        <meta property="og:url" content="https://www.duqor.ae/services" />
        <meta property="og:type" content="website" />
      </Head>

      <section
        id="services"
        className="py-20 relative bg-linear-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white overflow-hidden"
      >
        {/* Subtle gold glow background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,161,88,0.25),transparent_70%)]"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative text-4xl md:text-5xl font-serif font-bold
                         bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]
                         bg-clip-text text-transparent
                         drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]
                         [text-shadow:0_0_6px_rgba(255,220,120,0.5),
                                      0_0_14px_rgba(195,138,39,0.4),
                                      0_0_24px_rgba(139,91,16,0.3)]"
            >
              Our Services
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
              className="h-1 w-28 mx-auto mt-3 bg-linear-to-r from-[#f5d67a] via-[#c38a27] to-[#8b5b10] rounded-full shadow-[0_0_12px_rgba(212,175,55,0.6),0_0_20px_rgba(195,138,39,0.4)] origin-center"
            />

            <p className="text-base text-gray-300 max-w-2xl mx-auto mt-3">
              Design. Build. Transform. — The DUQOR Way.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -2, boxShadow: "0 0 20px rgba(212,175,55,0.4)" }}
                className="relative bg-linear-to-br from-[#1e1e1e] via-[#2a2a2a] to-[#151515]
                           border border-[#2c2c2c] hover:border-[#d4af37]/60 rounded-2xl overflow-hidden
                           transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative w-full h-52 overflow-hidden rounded-t-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={idx < 2}
                    unoptimized={service.image.startsWith("http")}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500" />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-linear-to-t from-[#d4af37]/30 to-transparent"
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    {service.icon}
                    <motion.h3
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="relative text-lg md:text-xl font-serif font-semibold
                                 bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]
                                 bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
                    >
                      {service.title}
                    </motion.h3>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed flex-1">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
            className="mx-auto mt-16 h-1 w-3/5 
                       bg-linear-to-r from-[#f5d67a] via-[#c38a27] to-[#8b5b10]
                       rounded-full shadow-[0_0_15px_rgba(212,175,55,0.6),0_0_25px_rgba(195,138,39,0.4)]
                       origin-center"
          />
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
