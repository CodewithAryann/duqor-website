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

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      title: "Interior Design & Concept Development",
      description:
        "Bespoke concepts blending innovation, functionality, and elegance — including space planning, photorealistic 3D renders, and curated material selection.",
      icon: <FaPaintBrush size={36} className="text-[#d4af37]" />,
      image: "/images/img.1.png",
    },
    {
      title: "Turnkey Fit-Out Execution",
      description:
        "Comprehensive design-to-delivery solutions ensuring precision craftsmanship, superior quality control, and seamless project execution.",
      icon: <FaTools size={36} className="text-[#d4af37]" />,
      image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800",
    },
    {
      title: "Furniture, Fixtures & Equipment",
      description:
        "Premium sourcing and custom manufacturing of furniture and décor elements, meticulously selected to match and elevate your design intent.",
      icon: <FaCouch size={36} className="text-[#d4af37]" />,
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
    },
    {
      title: "Joinery & Bespoke Woodwork",
      description:
        "In-house production of luxury joinery elements crafted with meticulous attention to detail and exceptional craftsmanship.",
      icon: <FaRulerCombined size={36} className="text-[#d4af37]" />,
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800",
    },
    {
      title: "Renovation & Refurbishment",
      description:
        "Expertly transforming existing spaces into fresh, modern environments while preserving and enhancing functional value.",
      icon: <FaRedo size={36} className="text-[#d4af37]" />,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    },
    {
      title: "Lighting & Décor Styling",
      description:
        "Curated lighting design and carefully selected accessories that enhance the aesthetic appeal and ambiance of every space.",
      icon: <FaLightbulb size={36} className="text-[#d4af37]" />,
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 relative bg-linear-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white overflow-hidden"
    >
      {/* Subtle gold glow background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,161,88,0.25),transparent_70%)]"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.5)] bg-clip-text">
            Our Services
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1 }}
            className="h-0.5 mx-auto mb-6 bg-linear-to-r from-transparent via-[#c2a158] to-transparent"
          />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Design. Build. Transform. — The DUQOR Way.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 30px rgba(194,161,88,0.3)",
              }}
              className="relative bg-[#111] border border-[#2c2c2c] hover:border-[#d4af37]/70 rounded-2xl overflow-hidden transition-all duration-500 group"
            >
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={idx < 2}
                  unoptimized={service.image.startsWith("http")}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500" />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-linear-to-t from-[#d4af37]/30 to-transparent"
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#c2a158] transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "70%" }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mx-auto mt-20 h-px bg-linear-to-r from-transparent via-[#d4af37] to-transparent"
        />
      </div>
    </section>
  );
};

export default ServicesSection;
