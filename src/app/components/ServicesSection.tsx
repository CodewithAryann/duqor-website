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
      icon: <FaPaintBrush size={36} className="text-[#c2a158]" />,
      image: "/images/img.1.png", // ✅ renamed (no dots)
    },
    {
      title: "Turnkey Fit-Out Execution",
      description:
        "Comprehensive design-to-delivery solutions ensuring precision craftsmanship, superior quality control, and seamless project execution.",
      icon: <FaTools size={36} className="text-[#c2a158]" />,
      image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800",
    },
    {
      title: "Furniture, Fixtures & Equipment",
      description:
        "Premium sourcing and custom manufacturing of furniture and décor elements, meticulously selected to match and elevate your design intent.",
      icon: <FaCouch size={36} className="text-[#c2a158]" />,
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
    },
    {
      title: "Joinery & Bespoke Woodwork",
      description:
        "In-house production of luxury joinery elements crafted with meticulous attention to detail and exceptional craftsmanship.",
      icon: <FaRulerCombined size={36} className="text-[#c2a158]" />,
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800",
    },
    {
      title: "Renovation & Refurbishment",
      description:
        "Expertly transforming existing spaces into fresh, modern environments while preserving and enhancing functional value.",
      icon: <FaRedo size={36} className="text-[#c2a158]" />,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    },
    {
      title: "Lighting & Décor Styling",
      description:
        "Curated lighting design and carefully selected accessories that enhance the aesthetic appeal and ambiance of every space.",
      icon: <FaLightbulb size={36} className="text-[#c2a158]" />,
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Design. Build. Transform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden group transition-all duration-500"
            >
              {/* ✅ Properly sized image container */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={idx < 2} // only preload first 2
                  unoptimized={service.image.startsWith("http")} // for remote URLs
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
              </div>

              <div className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#c2a158] transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
