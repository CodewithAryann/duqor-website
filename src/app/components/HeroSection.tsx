"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const images = [
  "/images/hero-section/hero-section-img-1.webp",
  "/images/hero-section/hero-section-img-3.webp",
  "/images/hero-section/hero-section-img-4.webp",
];

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger initial fade-in for hero content
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* PURE CSS BACKGROUND SLIDESHOW */}
      <div className="absolute inset-0 z-0 slideshow">
        {images.map((img, i) => (
          <div key={i} className={`slide bg-cover bg-center`} style={{ backgroundImage: `url(${img})` }} />
        ))}
      </div>

      {/* GOLDEN OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-r from-black/40 via-black/35 to-black/45 z-10" />

      {/* PURE CSS SPARKLES (ZERO JS) */}
      <div className="absolute inset-0 pointer-events-none z-20 sparkle-layer">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="sparkle"></span>
        ))}
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-center text-white px-6">

        {/* LOGO */}
        <Image
          src="/images/copper-logo.png"
          alt="Duqor Logo"
          width={192}
          height={192}
          className={`w-40 md:w-48 mb-6 transition-all duration-1000 ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          priority
        />

        {/* HEADING */}
        <h1
          className={`text-4xl md:text-5xl font-serif font-bold tracking-wide leading-tight transition-all duration-1000 delay-200
                      bg-clip-text text-transparent bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]
                      drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]
                      ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Where Elegance Inspires Luxury
        </h1>

        {/* SUBTEXT */}
        <p
          className={`text-lg md:text-2xl mb-12 max-w-2xl font-light text-gray-200 transition-all duration-1000 delay-400
                      drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]
                      ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Transforming spaces into elegant retreats of style and comfort across the UAE and GCC.
        </p>

        {/* BUTTONS */}
        <div
          className={`flex flex-wrap gap-6 justify-center transition-all duration-1000 delay-500
                      ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <Link
            href="/portfolio"
            className="px-6 md:px-10 py-4 md:py-3 rounded-full font-serif font-semibold text-lg tracking-wide text-black
                       bg-linear-to-b from-[#f5d67a] via-[#c38a27] to-[#8b5b10]
                       shadow-[0_4px_20px_rgba(195,138,39,0.6)]
                       hover:scale-105 transition duration-300"
          >
            Explore Projects
          </Link>

          <Link
            href="/contact"
            className="px-6 md:px-10 py-4 md:py-3 rounded-full font-serif font-semibold text-lg tracking-wide text-black
                       bg-linear-to-b from-[#f5d67a] via-[#c38a27] to-[#8b5b10]
                       border border-[#c38a27]
                       shadow-[0_4px_20px_rgba(195,138,39,0.5)]
                       hover:scale-105 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black/80 to-transparent z-20" />

      {/* STYLES */}
      <style jsx>{`
        /* PURE CSS SLIDESHOW */
        .slideshow {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .slide {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          animation: fadeSlideshow 18s infinite;
        }
        .slide:nth-child(1) { animation-delay: 0s; }
        .slide:nth-child(2) { animation-delay: 6s; }
        .slide:nth-child(3) { animation-delay: 12s; }

        @keyframes fadeSlideshow {
          0% { opacity: 0; transform: scale(1); }
          10% { opacity: 1; transform: scale(1.05); }
          30% { opacity: 1; transform: scale(1.05); }
          40% { opacity: 0; transform: scale(1.1); }
          100% { opacity: 0; }
        }

        /* PURE CSS SPARKLES */
        .sparkle-layer {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        .sparkle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: #d4af37;
          border-radius: 50%;
          opacity: 0.7;
          animation: sparkleFloat 6s infinite linear;
        }
        .sparkle:nth-child(n) {
          top: calc(100% * var(--randY));
          left: calc(100% * var(--randX));
          animation-delay: calc(-5s * var(--randD));
          transform: scale(calc(0.5 + var(--randS) * 1.5));
        }

        @keyframes sparkleFloat {
          0% { transform: translateY(0) scale(1); opacity: 0.8; }
          50% { transform: translateY(-40px) scale(1.2); opacity: 1; }
          100% { transform: translateY(-80px) scale(0.8); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
