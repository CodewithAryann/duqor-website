"use client";
import React from "react";
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

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      title: "Interior Design & Concept Development",
      description:
        "Bespoke concepts blending innovation, functionality, and elegance — including space planning, photorealistic 3D renders, and curated material selection.",
      icon: <FaPaintBrush size={36} className="text-[#d4af37]" aria-hidden="true" />,
      image: "/images/services/pic-1.webp",
    },
    {
      title: "Turnkey Fit-Out Execution",
      description:
        "Comprehensive design-to-delivery solutions ensuring precision craftsmanship, superior quality control, and seamless project execution.",
      icon: <FaTools size={36} className="text-[#d4af37]" aria-hidden="true" />,
      image: "/images/services/pic-2.webp",
    },
    {
      title: "Furniture, Fixtures & Equipment",
      description:
        "Premium sourcing and custom manufacturing of furniture and décor elements, meticulously selected to match and elevate your design intent.",
      icon: <FaCouch size={36} className="text-[#d4af37]" aria-hidden="true" />,
      image: "/images/services/pic-3.webp",
    },
    {
      title: "Joinery & Bespoke Woodwork",
      description:
        "In-house production of luxury joinery elements crafted with meticulous attention to detail and exceptional craftsmanship.",
      icon: <FaRulerCombined size={36} className="text-[#d4af37]" aria-hidden="true" />,
      image: "/images/services/pic-4.webp",
    },
    {
      title: "Renovation & Refurbishment",
      description:
        "Expertly transforming existing spaces into fresh, modern environments while preserving and enhancing functional value.",
      icon: <FaRedo size={36} className="text-[#d4af37]" aria-hidden="true" />,
      image: "/images/services/pic-5.webp",
    },
    {
      title: "Lighting & Décor Styling",
      description:
        "Curated lighting design and carefully selected accessories that enhance the aesthetic appeal and ambiance of every space.",
      icon: <FaLightbulb size={36} className="text-[#d4af37]" aria-hidden="true" />,
      image: "/images/services/pic-6.webp",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 relative bg-linear-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white overflow-hidden"
    >
      {/* Background Glow */}
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
          variants={fadeUp}
        >
          <h2
            className="text-4xl md:text-5xl font-serif font-bold
                       bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]
                       bg-clip-text text-transparent"
          >
            Our Services
          </h2>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-1 w-28 mx-auto mt-3 bg-linear-to-r from-[#f5d67a] via-[#c38a27] to-[#8b5b10]
                       rounded-full shadow-[0_0_12px_rgba(212,175,55,0.6)] origin-center"
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
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03, y: -2 }}
              className="bg-linear-to-br from-[#1e1e1e] via-[#2a2a2a] to-[#151515]
                         border border-[#2c2c2c] hover:border-[#d4af37]/60 
                         rounded-2xl overflow-hidden transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden rounded-t-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading={idx < 2 ? "eager" : "lazy"}
                  priority={idx < 2}
                  decoding="async"
                />

                <div className="absolute inset-0 bg-black/30 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  {service.icon}
                  <h3
                    className="text-lg md:text-xl font-serif font-semibold
                               bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]
                               bg-clip-text text-transparent"
                  >
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mx-auto mt-16 h-1 w-3/5 
                     bg-linear-to-r from-[#f5d67a] via-[#c38a27] to-[#8b5b10]
                     rounded-full shadow-[0_0_15px_rgba(212,175,55,0.6)] origin-center"
        />
      </div>
    </section>
  );
};

export default ServicesSection;
