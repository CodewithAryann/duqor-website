"use client";
import React from "react";
import Image from "next/image";

// Philosophy content
const philosophies = [
  {
    title: "Simplicity with Substance",
    description:
      "Clean architectural lines, rich premium materials, and intentional detailing that speaks through refined restraint.",
  },
  {
    title: "Luxury through Experience",
    description:
      "Comfort and elegance that resonate with your lifestyle — creating spaces both opulent and inviting.",
  },
  {
    title: "Innovation in Execution",
    description:
      "Smart technology, sustainable practices, and precision craftsmanship shaping next-generation interiors.",
  },
];

const DesignPhilosophy: React.FC = () => {
  return (
    <section
      id="philosophy"
      className="relative py-20 md:py-28 bg-black text-white overflow-hidden"
    >
      {/* Background Image - LOW JS + LOW NETWORK */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <Image
          src="/images/bg/interior-bg.webp" // <-- Use your own 50–80 kb local webp
          alt="Luxury interior background"
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,161,88,0.25),transparent_70%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2
            className="text-4xl md:text-5xl font-serif font-bold bg-clip-text text-transparent
                       bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]"
          >
            Our Design Philosophy
          </h2>

          <p className="max-w-3xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed mt-4">
            At{" "}
            <span className="font-serif bg-clip-text text-transparent bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]">
              DUQOR
            </span>
            , design is more than aesthetics — it is an experience reflecting
            lifestyle, culture, and contemporary sophistication.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {philosophies.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-[#111] border border-[#2a2a2a] rounded-2xl p-6 md:p-8 
                         transition-all duration-300 hover:border-[#d4af67] hover:shadow-[0_0_18px_rgba(212,175,55,0.35)]"
            >
              {/* Gold Accent Line */}
              <div className="h-1 w-14 md:w-16 mb-6 rounded-full bg-linear-to-r from-[#f5d67a] via-[#c38a27] to-[#8b5b10]" />

              <h3
                className="text-xl md:text-2xl font-serif font-semibold mb-3 bg-clip-text 
                           text-transparent bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]"
              >
                {item.title}
              </h3>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Line */}
        <div
          className="mx-auto mt-16 h-1 w-3/5 rounded-full 
                     bg-linear-to-r from-[#f5d67a] via-[#c38a27] to-[#8b5b10]"
        />
      </div>
    </section>
  );
};

export default DesignPhilosophy;
